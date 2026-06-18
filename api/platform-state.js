import {sql} from '@vercel/postgres';

const stateId = 'nextskills-platform';

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS nextskills_platform_state (
      id TEXT PRIMARY KEY,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

function sendJson(response, status, payload) {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Cache-Control', 'no-store');
  response.end(JSON.stringify(payload));
}

function uniqueBy(items, keyFn) {
  const map = new Map();
  (items || []).forEach((item) => {
    if (!item) return;
    const key = keyFn(item);
    if (!key) return;
    map.set(key, item);
  });
  return Array.from(map.values());
}

function mergeStates(base = {}, incoming = {}) {
  const merged = {
    ...base,
    ...incoming,
    users: uniqueBy([...(base.users || []), ...(incoming.users || [])], (user) => user.id || user.email?.toLowerCase()),
    assignments: {...(base.assignments || {})},
    progress: {...(base.progress || {})},
    attempts: uniqueBy([...(base.attempts || []), ...(incoming.attempts || [])], (attempt) => attempt.id),
    lessonTime: {...(base.lessonTime || {})},
    lessonNotes: {...(base.lessonNotes || {})},
    unlockRequests: uniqueBy([...(base.unlockRequests || []), ...(incoming.unlockRequests || [])], (request) => request.id),
    signupRequests: uniqueBy([...(base.signupRequests || []), ...(incoming.signupRequests || [])], (request) => request.id),
    notificationReads: {...(base.notificationReads || {}), ...(incoming.notificationReads || {})}
  };

  [base.assignments, incoming.assignments].forEach((assignmentSet) => {
    Object.entries(assignmentSet || {}).forEach(([userId, assignedCourses]) => {
      merged.assignments[userId] = Array.from(new Set([...(merged.assignments[userId] || []), ...(assignedCourses || [])]));
    });
  });

  [base.progress, incoming.progress].forEach((progressSet) => {
    Object.entries(progressSet || {}).forEach(([userId, userCourses]) => {
      merged.progress[userId] = merged.progress[userId] || {};
      Object.entries(userCourses || {}).forEach(([courseId, record]) => {
        const existing = merged.progress[userId][courseId] || {completedLessons: []};
        merged.progress[userId][courseId] = {
          ...existing,
          ...record,
          completedLessons: Array.from(new Set([...(existing.completedLessons || []), ...(record.completedLessons || [])])).sort((a, b) => a - b)
        };
      });
    });
  });

  [base.lessonTime, incoming.lessonTime].forEach((timeSet) => {
    Object.entries(timeSet || {}).forEach(([userId, userCourses]) => {
      merged.lessonTime[userId] = merged.lessonTime[userId] || {};
      Object.entries(userCourses || {}).forEach(([courseId, lessonTimes]) => {
        merged.lessonTime[userId][courseId] = merged.lessonTime[userId][courseId] || {};
        Object.entries(lessonTimes || {}).forEach(([lessonIndex, seconds]) => {
          merged.lessonTime[userId][courseId][lessonIndex] = Math.max(Number(merged.lessonTime[userId][courseId][lessonIndex] || 0), Number(seconds || 0));
        });
      });
    });
  });

  [base.lessonNotes, incoming.lessonNotes].forEach((notesSet) => {
    Object.entries(notesSet || {}).forEach(([userId, userCourses]) => {
      merged.lessonNotes[userId] = merged.lessonNotes[userId] || {};
      Object.entries(userCourses || {}).forEach(([courseId, lessonNotes]) => {
        merged.lessonNotes[userId][courseId] = {...(merged.lessonNotes[userId][courseId] || {}), ...(lessonNotes || {})};
      });
    });
  });

  return merged;
}

export default async function handler(request, response) {
  if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
    return sendJson(response, 503, {
      error: 'Database is not configured. Add a Postgres/Neon database URL in Vercel environment variables.'
    });
  }

  try {
    await ensureTable();

    if (request.method === 'GET') {
      const result = await sql`SELECT data FROM nextskills_platform_state WHERE id = ${stateId}`;
      return sendJson(response, 200, {state: result.rows[0]?.data || null});
    }

    if (request.method === 'POST') {
      const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
      const state = body?.state;
      if (!state || typeof state !== 'object') {
        return sendJson(response, 400, {error: 'Missing state payload.'});
      }

      const shouldReplace = body?.replace === true;
      const current = shouldReplace ? {rows: []} : await sql`SELECT data FROM nextskills_platform_state WHERE id = ${stateId}`;
      const mergedState = shouldReplace ? state : mergeStates(current.rows[0]?.data || {}, state);

      await sql`
        INSERT INTO nextskills_platform_state (id, data, updated_at)
        VALUES (${stateId}, ${JSON.stringify(mergedState)}::jsonb, NOW())
        ON CONFLICT (id)
        DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()
      `;
      return sendJson(response, 200, {ok: true});
    }

    response.setHeader('Allow', 'GET, POST');
    return sendJson(response, 405, {error: 'Method not allowed.'});
  } catch (error) {
    return sendJson(response, 500, {error: error.message || 'Database error.'});
  }
}

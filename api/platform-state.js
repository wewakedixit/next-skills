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

      await sql`
        INSERT INTO nextskills_platform_state (id, data, updated_at)
        VALUES (${stateId}, ${JSON.stringify(state)}::jsonb, NOW())
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

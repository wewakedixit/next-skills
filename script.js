const storageKey = 'gsc-course-completed-lessons-v2';

const lessons = [
  {
    title: 'Search Console and SEO basics',
    duration: '60 minutes',
    goal: 'Understand what Google Search Console is, what SEO means, and why the tool matters for a website owner.',
    outcomes: [
      'Explain Google Search Console in simple words.',
      'Understand what organic search traffic means.',
      'Know what Search Console can and cannot do.',
      'Create a short list of pages you want Google users to find.'
    ],
    sections: {
      what: [
        'Google Search Console is a free tool from Google. It helps you understand how your website appears in Google Search.',
        'It shows search words people used, pages that received clicks, pages Google could or could not index, and warnings about important search issues.',
        'SEO means improving your website so the right people can find useful pages through search engines. Search Console does not do SEO for you; it gives you clues so you can make better decisions.'
      ],
      why: [
        'Without Search Console, you may only guess how Google sees your website. With it, you can see real search data from Google.',
        'A non-technical user can use it to answer practical questions: Are people finding us? Which pages work? Which pages need help? Did Google find a problem?',
        'It is especially useful after launching a new website, adding new service pages, publishing blogs, changing URLs, or noticing a traffic drop.'
      ],
      where: [
        'Use the Performance report to understand traffic from Google Search.',
        'Use Page indexing to see whether Google can include your pages in Search.',
        'Use URL Inspection when you want to check one specific page.',
        'Use Sitemaps when you want to help Google discover important URLs.'
      ],
      how: [
        'Start by adding your website property and verifying ownership.',
        'Wait for data to appear. New properties often need time before reports become useful.',
        'Check the account monthly and after major website changes. Google says you do not need to check it every day unless you are actively investigating an issue.',
        'Turn every report into a simple action: improve a title, fix a missing page, check an indexing issue, or write a better answer for searchers.'
      ]
    },
    glossary: [
      ['SEO', 'Search engine optimization. Improving your website so people can find helpful pages in unpaid search results.'],
      ['Organic traffic', 'Visitors who come from unpaid Google Search results, not ads.'],
      ['Property', 'The website or website section you add inside Search Console.'],
      ['Index', 'Google’s stored understanding of pages it may show in Search.'],
      ['Query', 'The words a person typed or spoke into Google Search.']
    ],
    examples: [
      {
        title: 'Local clinic owner',
        problem: 'A dental clinic owner wants to know if people find the site for “kids dentist near me.”',
        walkthrough: 'In Performance, they check Queries. If the query appears with impressions but few clicks, the page may be visible but not attractive enough. They can improve the title and page introduction.',
        takeaway: 'Search Console turns a vague question into a clear content improvement.'
      },
      {
        title: 'New blog publisher',
        problem: 'A school publishes a blog post but cannot find it on Google the next day.',
        walkthrough: 'They use URL Inspection to check whether Google knows the URL. If the live page is indexable, they can request indexing and then wait.',
        takeaway: 'Search Console helps you check status, but it does not guarantee instant ranking.'
      }
    ],
    practice: [
      'Write down your website’s main purpose in one sentence.',
      'List 5 pages that matter most to your business.',
      'For each page, write the search phrase you hope people use to find it.',
      'Mark which pages are business-critical, such as service, product, booking, or contact pages.'
    ],
    mistakes: [
      'Expecting Search Console to increase rankings automatically.',
      'Checking only total clicks and ignoring which pages or queries changed.',
      'Looking at one day of data and panicking instead of comparing longer periods.'
    ],
    quiz: [
      {
        question: 'What is the simplest description of Google Search Console?',
        options: [
          'A free Google tool that shows how your website performs in Google Search.',
          'A paid advertising platform for search ads.',
          'A tool that automatically writes SEO pages for you.'
        ],
        answer: 0
      },
      {
        question: 'What should a beginner do with Search Console data?',
        options: [
          'Use it as clues for improving pages and fixing issues.',
          'Refresh it every hour and change the site every time numbers move.',
          'Ignore pages and only look at the total clicks number.'
        ],
        answer: 0
      },
      {
        question: 'Which report is usually the best first place to understand search traffic?',
        options: ['Performance', 'Removals', 'Users and permissions'],
        answer: 0
      }
    ]
  },
  {
    title: 'Add your website and verify ownership',
    duration: '60 minutes',
    goal: 'Learn how website properties work and how to verify ownership without needing to understand code deeply.',
    outcomes: [
      'Choose between a Domain property and a URL-prefix property.',
      'Understand why Google requires verification.',
      'Know what to ask a developer, host, or domain provider.',
      'Avoid tracking the wrong website version.'
    ],
    sections: {
      what: [
        'Before Search Console shows private data, Google asks you to prove that you own or manage the website. This is called ownership verification.',
        'A property is the website version you add to Search Console. The property decides what data you see.',
        'A Domain property covers the full domain, including http, https, www, non-www, and subdomains. A URL-prefix property covers only the exact URL prefix you enter.'
      ],
      why: [
        'Search Console can reveal sensitive information, such as search queries, indexing problems, and actions that affect how the site appears on Google.',
        'Only a real owner or trusted manager should have high-level access.',
        'Choosing the right property prevents a common beginner problem: thinking traffic disappeared when you are simply looking at the wrong site version.'
      ],
      where: [
        'Add a property from the Search Console property selector.',
        'Use DNS settings at your domain provider for Domain property verification.',
        'Use an HTML file, HTML tag, Google Analytics, Google Tag Manager, or other supported methods for URL-prefix verification when available.'
      ],
      how: [
        'If you control the domain provider, choose Domain property and add the DNS TXT record Google gives you.',
        'If you only manage one version of the site or need a simpler route, choose URL-prefix and enter the exact live address, such as https://www.example.com/.',
        'After adding the verification record or tag, return to Search Console and click Verify.',
        'If verification fails, wait and try again. DNS changes can take time.'
      ]
    },
    glossary: [
      ['Domain property', 'A property that includes all versions of a domain and usually uses DNS verification.'],
      ['URL-prefix property', 'A property that includes only URLs beginning with the exact address you enter.'],
      ['DNS', 'Domain Name System. The domain settings area where ownership records can be added.'],
      ['Verification token', 'A unique code Google uses to confirm ownership.'],
      ['Protocol', 'The start of a URL, such as http or https.']
    ],
    examples: [
      {
        title: 'Wrong property confusion',
        problem: 'A business adds http://example.com but the real website is https://www.example.com.',
        walkthrough: 'The Performance report may look empty or incomplete because Search Console is showing a different version. A Domain property would include all versions.',
        takeaway: 'If you are unsure, Domain property is usually the fuller view.'
      },
      {
        title: 'Non-technical owner asking for help',
        problem: 'The owner cannot find DNS settings.',
        walkthrough: 'They send the DNS TXT record to the person who manages the domain and ask them to add it exactly. After it is saved, they return to Search Console and verify.',
        takeaway: 'You do not need to understand DNS deeply, but you must know who controls it.'
      }
    ],
    practice: [
      'Write your exact live website address.',
      'Check whether your site uses www or non-www.',
      'Check whether it uses https.',
      'Identify who controls your domain provider account.',
      'Decide whether Domain property or URL-prefix property is better for your situation.'
    ],
    mistakes: [
      'Adding only one URL version and forgetting the real site uses another version.',
      'Removing verification files or DNS records after verification.',
      'Giving owner access to people who only need to view reports.'
    ],
    quiz: [
      {
        question: 'Why does Google require ownership verification?',
        options: [
          'Because Search Console contains sensitive site data and powerful controls.',
          'Because Google charges for Search Console.',
          'Because verification improves rankings automatically.'
        ],
        answer: 0
      },
      {
        question: 'Which property usually gives the broadest view of a whole domain?',
        options: ['Domain property', 'URL-prefix property', 'A single blog post URL'],
        answer: 0
      },
      {
        question: 'What should you do if DNS verification does not work immediately?',
        options: ['Wait and try again because DNS can take time.', 'Delete your website.', 'Change every page title.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Read the Performance report',
    duration: '60 minutes',
    goal: 'Understand clicks, impressions, CTR, position, filters, dates, pages, and queries.',
    outcomes: [
      'Explain the four main Performance metrics.',
      'Compare data by date range without overreacting.',
      'Find your top pages and queries.',
      'Spot opportunities from high impressions and low CTR.'
    ],
    sections: {
      what: [
        'The Performance report shows how people find your website in Google Search. It includes clicks, impressions, click-through rate, and average position.',
        'You can break the data down by queries, pages, countries, devices, search appearance, and dates.',
        'For most beginners, Performance is the report they will use most often.'
      ],
      why: [
        'Clicks show actual visits from Search. Impressions show visibility. CTR shows whether people chose your result. Average position gives a general ranking signal.',
        'Looking at all four together prevents wrong conclusions. A page can have many impressions but low clicks. Another page can have few impressions but a strong CTR.',
        'The report helps you choose work that matters instead of guessing what content to improve.'
      ],
      where: [
        'Open Search Console and choose your property.',
        'Select Performance, then Search results.',
        'Use tabs like Queries and Pages to understand what is driving the totals.',
        'Use filters when you want to focus on one page, one country, one device, or one query.'
      ],
      how: [
        'Start with a 3-month date range so you have enough data.',
        'Turn on all four metric boxes: clicks, impressions, CTR, and average position.',
        'Open the Pages tab and sort by clicks to find pages already bringing traffic.',
        'Open the Queries tab and sort by impressions to find topics where Google already shows you.',
        'Look for a page or query with high impressions, low CTR, and a position that is not too far away from page one.'
      ]
    },
    glossary: [
      ['Click', 'A person clicked your website result in Google Search.'],
      ['Impression', 'Your result appeared for a searcher.'],
      ['CTR', 'Click-through rate. Clicks divided by impressions.'],
      ['Average position', 'The average position of your top result for a query or page.'],
      ['Filter', 'A way to narrow the report to specific data, such as one page or country.']
    ],
    examples: [
      {
        title: 'High impressions, low clicks',
        problem: 'A preschool page has 12,000 impressions for “best preschool admission age” but only 72 clicks.',
        walkthrough: 'The page appears often, but the search result is not earning many clicks. The owner checks the page title and description. They rewrite the title to “Preschool Admission Age Guide: Simple Parent Checklist.”',
        takeaway: 'High impressions with low CTR often means the search result needs to look more relevant.'
      },
      {
        title: 'Clicks dropped but impressions stayed stable',
        problem: 'A service page still appears often, but clicks are down.',
        walkthrough: 'This can happen if competitors write more attractive titles, if the search result layout changes, or if the page title no longer matches searcher intent.',
        takeaway: 'Do not only ask “Did rankings drop?” Ask whether people still want to click your result.'
      }
    ],
    practice: [
      'Set the date range to last 3 months.',
      'Write down the top 5 pages by clicks.',
      'Write down the top 10 queries by impressions.',
      'Choose one query with many impressions and low CTR.',
      'Write a better page title for the page that appears for that query.'
    ],
    mistakes: [
      'Thinking average position is the exact same ranking every user sees.',
      'Judging performance from one day of data.',
      'Ignoring impressions because clicks feel more exciting.'
    ],
    quiz: [
      {
        question: 'What does CTR mean in Search Console?',
        options: ['Clicks divided by impressions.', 'Total ranking score.', 'The number of indexed pages.'],
        answer: 0
      },
      {
        question: 'A page has many impressions but few clicks. What is a likely opportunity?',
        options: ['Improve the title, description, or page relevance.', 'Delete Search Console.', 'Assume Google has banned the site.'],
        answer: 0
      },
      {
        question: 'Why should you use date ranges carefully?',
        options: ['Short periods can look noisy and misleading.', 'Date ranges change the website code.', 'Google only stores one day of data.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Use queries to plan better content',
    duration: '60 minutes',
    goal: 'Turn search queries into page improvements, blog ideas, and clearer answers for users.',
    outcomes: [
      'Understand search intent in simple language.',
      'Group similar queries into topics.',
      'Choose which content to improve first.',
      'Write page sections that answer real searches.'
    ],
    sections: {
      what: [
        'A query is what someone searched on Google before seeing or clicking your website.',
        'Queries are not just keywords. They are clues about people’s questions, problems, locations, and buying stage.',
        'The same page can appear for many related queries.'
      ],
      why: [
        'Queries tell you what real people want. This is more useful than guessing topics in a meeting.',
        'You can use queries to improve existing pages before creating new pages.',
        'A beginner can use queries to write clearer headings, FAQs, service explanations, and blog topics.'
      ],
      where: [
        'Find queries in the Performance report under the Queries tab.',
        'Click a page first, then check Queries to see which searches lead to that page.',
        'Export data if you want to group topics in a spreadsheet.'
      ],
      how: [
        'Sort queries by impressions to find where your site already appears.',
        'Group similar queries, such as cost, location, comparison, how-to, and best options.',
        'Match each group to an existing page or a new content idea.',
        'Improve the page by adding direct answers, examples, headings, and helpful next steps.',
        'Review the same query group again after a few weeks.'
      ]
    },
    glossary: [
      ['Search intent', 'The reason behind a search, such as learning, comparing, buying, or finding a local service.'],
      ['Query group', 'Similar searches grouped together so you can plan content better.'],
      ['Long-tail query', 'A longer, more specific search phrase.'],
      ['Content gap', 'A useful topic people search for that your site does not answer well yet.'],
      ['Landing page', 'A page where visitors arrive from Search or another channel.']
    ],
    examples: [
      {
        title: 'Dental implant cost queries',
        problem: 'Queries include “dental implant cost,” “single tooth implant price,” and “is implant painful.”',
        walkthrough: 'These are not all the same. Some ask about price, some about procedure fear. The clinic adds two sections: pricing factors and pain/comfort explanation.',
        takeaway: 'One page can become stronger by answering multiple related concerns.'
      },
      {
        title: 'Travel blog query grouping',
        problem: 'A Himachal travel site sees queries about “best time,” “road condition,” “hotel booking,” and “itinerary.”',
        walkthrough: 'The writer groups them into planning, safety, stay, and route. Then they update the guide with separate headings for each group.',
        takeaway: 'Grouping queries makes content easier for readers and easier for Google to understand.'
      }
    ],
    practice: [
      'Pick one important page in Performance.',
      'Open the Queries tab for only that page.',
      'Copy 15 queries into a note.',
      'Group them into 3 to 5 themes.',
      'Write one new heading and one FAQ answer for each theme.'
    ],
    mistakes: [
      'Creating a new page for every tiny query.',
      'Stuffing repeated keywords unnaturally into the page.',
      'Ignoring queries that reveal user worries, such as cost, safety, time, or comparison.'
    ],
    quiz: [
      {
        question: 'What is search intent?',
        options: ['The reason behind a person’s search.', 'The number of website owners.', 'A DNS setting.'],
        answer: 0
      },
      {
        question: 'Why group similar queries?',
        options: ['To plan better page sections and content ideas.', 'To hide data from Search Console.', 'To make every query a separate website.'],
        answer: 0
      },
      {
        question: 'What is a content gap?',
        options: ['A useful search topic your site does not answer well.', 'A broken computer screen.', 'A paid ad budget.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Understand Page indexing',
    duration: '60 minutes',
    goal: 'Learn how to check whether Google can include your pages in Search and what common indexing statuses mean.',
    outcomes: [
      'Explain indexing in non-technical language.',
      'Know which pages should and should not be indexed.',
      'Read common Page indexing reasons calmly.',
      'Create an important-page indexing checklist.'
    ],
    sections: {
      what: [
        'Indexing means Google has stored a page in its search system and may show it in results.',
        'The Page indexing report shows indexed and not indexed URLs Google knows about for your property.',
        'Not every non-indexed URL is a problem. Some pages are intentionally not shown in Search.'
      ],
      why: [
        'If an important service page is not indexed, it cannot bring organic search traffic from Google.',
        'If low-value pages are indexed, they may distract from better pages or create quality problems.',
        'The report helps you separate real issues from normal exclusions.'
      ],
      where: [
        'Open Indexing, then Pages inside Search Console.',
        'Review reasons under why pages are not indexed.',
        'Click a reason to see examples of affected URLs.',
        'Use URL Inspection for a single important URL.'
      ],
      how: [
        'Make a list of your most important URLs first. Do not start by trying to fix every URL in the report.',
        'Check whether each important URL is indexed.',
        'If not indexed, read the reason and inspect the URL.',
        'Improve weak pages, fix accidental noindex settings, repair broken links, or ask a developer for technical issues.',
        'After fixing, use validation only when you have actually fixed the issue.'
      ]
    },
    glossary: [
      ['Indexed', 'Google has stored the page and may show it in Search.'],
      ['Not indexed', 'Google knows about the URL but is not showing it in Search.'],
      ['Crawl', 'Google visits a page to read it.'],
      ['Noindex', 'A signal that tells Google not to index a page.'],
      ['Duplicate', 'A page that is very similar to another page.']
    ],
    examples: [
      {
        title: 'Important service page missing',
        problem: 'A “Root Canal Treatment” page is not indexed.',
        walkthrough: 'The owner inspects the URL. If Search Console says a noindex tag is present, they ask the developer to remove it from that service page.',
        takeaway: 'Important business pages should usually be indexable unless there is a clear reason.'
      },
      {
        title: 'Thank-you page not indexed',
        problem: 'A form thank-you page appears as not indexed.',
        walkthrough: 'This is usually fine because users do not need to find a thank-you page from Google Search.',
        takeaway: 'Not indexed is not automatically bad. Judge by page purpose.'
      }
    ],
    practice: [
      'Create a list of 10 important URLs.',
      'Check each URL in Search Console.',
      'Mark each as indexed, not indexed, or needs investigation.',
      'For not indexed pages, write the reason shown by Google.',
      'Choose the top 3 pages to fix first based on business importance.'
    ],
    mistakes: [
      'Trying to index every URL on the website.',
      'Ignoring important pages because the total indexed count looks fine.',
      'Using request indexing before fixing the actual problem.'
    ],
    quiz: [
      {
        question: 'What does indexed mean?',
        options: ['Google has stored the page and may show it in Search.', 'The page must rank number one.', 'The page has paid ads.'],
        answer: 0
      },
      {
        question: 'Is every not indexed page a problem?',
        options: ['No. Some pages should not appear in Google Search.', 'Yes. Every URL must be indexed.', 'Only if the page is blue.'],
        answer: 0
      },
      {
        question: 'What should you check first when working on indexing?',
        options: ['Your most important business pages.', 'Every random URL equally.', 'Only image file names.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Use URL Inspection like a page detective',
    duration: '60 minutes',
    goal: 'Learn how to investigate one URL and decide what action to take.',
    outcomes: [
      'Inspect a specific URL.',
      'Understand indexed result versus live test.',
      'Know when to request indexing.',
      'Explain canonical and crawl status in simple words.'
    ],
    sections: {
      what: [
        'URL Inspection gives information about one page. It can show Google’s indexed version and test the live version.',
        'The indexed result is what Google currently knows from its stored data. The live test checks the page as it exists now.',
        'The tool can help you troubleshoot missing pages, recent updates, indexing status, canonical choices, and page availability.'
      ],
      why: [
        'Page-level investigation is better than guessing. If one important page is not performing, inspect that URL directly.',
        'It helps you separate “Google has not visited yet” from “Google visited but found a problem.”',
        'It is useful after publishing or updating important pages.'
      ],
      where: [
        'Use the inspection search bar at the top of Search Console.',
        'Enter the complete URL from your website.',
        'You can also inspect URLs from many Search Console reports.'
      ],
      how: [
        'Copy the exact URL from your browser.',
        'Paste it into the URL Inspection bar.',
        'Read the main status first: whether the URL is on Google or not.',
        'Run a live test if you recently changed the page.',
        'Request indexing only after the page is ready, indexable, useful, and not blocked.'
      ]
    },
    glossary: [
      ['Live URL', 'The page as it exists right now.'],
      ['Indexed URL', 'The version Google currently has stored.'],
      ['Canonical', 'The main version Google chooses when similar URLs exist.'],
      ['Request indexing', 'A request for Google to crawl a URL. It is not a ranking guarantee.'],
      ['Crawl allowed', 'Google is allowed to visit the page.']
    ],
    examples: [
      {
        title: 'Updated service page',
        problem: 'A clinic changed prices and service details but Google still shows the old result.',
        walkthrough: 'The owner inspects the URL, runs a live test, confirms the page is available, then requests indexing.',
        takeaway: 'Request indexing is useful after meaningful updates, not as a daily habit.'
      },
      {
        title: 'Wrong canonical selected',
        problem: 'A page for “Delhi dental implants” appears to be treated like another similar page.',
        walkthrough: 'URL Inspection shows Google-selected canonical. If Google chose a different URL, the pages may be too similar or internal links may point inconsistently.',
        takeaway: 'Canonical issues often mean your pages need clearer purpose and cleaner internal linking.'
      }
    ],
    practice: [
      'Pick one important page that was recently updated.',
      'Inspect the exact URL.',
      'Write down whether it is on Google.',
      'Run a live test.',
      'If the live test is successful and the page is important, request indexing.',
      'Write one sentence explaining the result in plain English.'
    ],
    mistakes: [
      'Requesting indexing many times without improving the page.',
      'Inspecting the wrong URL version.',
      'Assuming live test success means the page will rank high.'
    ],
    quiz: [
      {
        question: 'What is the difference between indexed result and live test?',
        options: ['Indexed result is Google’s stored data; live test checks the page now.', 'They are always identical.', 'Live test buys ads.'],
        answer: 0
      },
      {
        question: 'When should you request indexing?',
        options: ['After a useful page is ready and available to Google.', 'Before creating the page.', 'Every hour for rankings.'],
        answer: 0
      },
      {
        question: 'What does canonical mean in simple terms?',
        options: ['The main version of similar pages.', 'A website password.', 'A social media post.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Submit and monitor sitemaps',
    duration: '60 minutes',
    goal: 'Understand what sitemaps do, where to find them, and how to use the Sitemaps report.',
    outcomes: [
      'Explain a sitemap in plain English.',
      'Know when submitting a sitemap helps.',
      'Find common sitemap URLs.',
      'Read basic sitemap status and errors.'
    ],
    sections: {
      what: [
        'A sitemap is a file on your website that lists URLs you want Google to know about.',
        'Search Console’s Sitemaps report lets you submit a sitemap and see whether Google could read it.',
        'A sitemap helps discovery, but it does not force Google to index every listed URL.'
      ],
      why: [
        'Sitemaps are useful for large sites, new sites, sites with many pages, or sites where some pages are not strongly linked.',
        'They help Google discover your important content faster.',
        'The report can alert you if Google cannot read the sitemap.'
      ],
      where: [
        'Many WordPress sites use /sitemap.xml or /sitemap_index.xml.',
        'Shopify, Webflow, Wix, and other platforms often create sitemaps automatically.',
        'Submit the sitemap in Search Console under Indexing, then Sitemaps.'
      ],
      how: [
        'Find your sitemap URL by checking your website platform or asking your developer.',
        'Open the sitemap in a browser to confirm it loads.',
        'In Search Console, enter only the sitemap path if the domain is already shown.',
        'Submit it and check whether the status is successful.',
        'Review errors if Google could not fetch or read it.'
      ]
    },
    glossary: [
      ['Sitemap', 'A file listing important URLs on your website.'],
      ['Sitemap index', 'A sitemap that links to other sitemaps.'],
      ['Submitted URL', 'A URL included in a sitemap you submitted.'],
      ['Fetch', 'Google trying to access the file.'],
      ['XML', 'A structured file format commonly used for sitemaps.']
    ],
    examples: [
      {
        title: 'WordPress site',
        problem: 'A business uses WordPress and Yoast SEO.',
        walkthrough: 'They check /sitemap_index.xml, confirm it opens, then submit sitemap_index.xml in Search Console.',
        takeaway: 'Most common platforms generate sitemaps automatically.'
      },
      {
        title: 'Sitemap contains old URLs',
        problem: 'The sitemap lists pages that were deleted months ago.',
        walkthrough: 'The owner asks the developer or platform admin to regenerate the sitemap so it only includes current useful pages.',
        takeaway: 'A sitemap should reflect the pages you actually want Google to discover.'
      }
    ],
    practice: [
      'Find your sitemap URL.',
      'Open it in your browser.',
      'Check whether it includes important pages.',
      'Submit it in Search Console if not already submitted.',
      'Record the status and any errors.'
    ],
    mistakes: [
      'Thinking sitemap submission guarantees indexing.',
      'Submitting broken or outdated sitemaps.',
      'Ignoring internal links because a sitemap exists.'
    ],
    quiz: [
      {
        question: 'What does a sitemap help Google do?',
        options: ['Discover important URLs.', 'Automatically rank every page first.', 'Create your website design.'],
        answer: 0
      },
      {
        question: 'Does submitting a sitemap guarantee indexing?',
        options: ['No.', 'Yes, always.', 'Only for paid accounts.'],
        answer: 0
      },
      {
        question: 'Where do you submit a sitemap in Search Console?',
        options: ['Indexing > Sitemaps.', 'Settings > Users only.', 'Google Ads billing.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Diagnose traffic drops without panic',
    duration: '60 minutes',
    goal: 'Learn a calm process for understanding drops in clicks, impressions, CTR, or position.',
    outcomes: [
      'Separate real drops from reporting confusion.',
      'Compare date ranges correctly.',
      'Find whether a drop is site-wide, page-specific, or query-specific.',
      'Build a simple investigation checklist.'
    ],
    sections: {
      what: [
        'A traffic drop means one or more Performance metrics decreased. It could be clicks, impressions, CTR, average position, or a mix.',
        'Drops can happen because of website changes, seasonality, search demand changes, Google crawling delays, technical issues, or competitors.',
        'Google’s own guidance starts with checking whether your property definition matches your real site URL.'
      ],
      why: [
        'Beginners often panic and make many changes at once. That makes the problem harder to understand.',
        'A calm diagnosis helps you find whether the issue is tracking, indexing, demand, ranking, or content relevance.',
        'The goal is not to blame one thing quickly. The goal is to narrow the problem.'
      ],
      where: [
        'Use Performance to compare dates and isolate pages or queries.',
        'Use Page indexing to check whether important pages became not indexed.',
        'Use URL Inspection for specific pages that dropped.',
        'Use Manual actions and Security issues for serious warnings.'
      ],
      how: [
        'First check the property. Make sure you are looking at the correct http/https and www/non-www version or a Domain property.',
        'Compare last 28 days to previous 28 days, or the same period last year if the business is seasonal.',
        'Check whether impressions dropped. If impressions dropped, visibility or demand may have changed.',
        'Check whether impressions stayed but clicks dropped. If so, CTR or search result attractiveness may be the issue.',
        'Filter by page and query to find where the drop is concentrated.',
        'Write one likely cause and one next action before changing the site.'
      ]
    },
    glossary: [
      ['Traffic drop', 'A decrease in visits or search performance.'],
      ['Seasonality', 'Normal changes caused by time of year, holidays, weather, admissions cycles, and similar patterns.'],
      ['Manual action', 'A serious Google action when a site violates search policies.'],
      ['Security issue', 'A warning about hacked content, malware, or unsafe behavior.'],
      ['Comparison period', 'The previous date range you compare against.']
    ],
    examples: [
      {
        title: 'HTTPS migration confusion',
        problem: 'Clicks look like they vanished after a site moved from http to https.',
        walkthrough: 'The owner checks the property and realizes they are still viewing the old http URL-prefix property. The data is in the https property or Domain property.',
        takeaway: 'Sometimes traffic did not drop; you are looking in the wrong place.'
      },
      {
        title: 'Seasonal admissions drop',
        problem: 'A preschool website gets fewer clicks in July than March.',
        walkthrough: 'The owner compares with the same period last year and sees the pattern is normal after admission season.',
        takeaway: 'Always compare with business context, not just yesterday.'
      }
    ],
    practice: [
      'Open Performance and compare last 28 days with previous 28 days.',
      'Write whether clicks, impressions, CTR, and position changed.',
      'Find the top 3 pages that lost clicks.',
      'For each page, inspect whether impressions also dropped.',
      'Choose one page to investigate with URL Inspection.'
    ],
    mistakes: [
      'Changing many pages before finding the cause.',
      'Ignoring property mismatch after a website migration.',
      'Assuming every drop is a penalty.'
    ],
    quiz: [
      {
        question: 'What should you check first when Search Console traffic looks missing?',
        options: ['Whether the property matches the live site URL.', 'Whether your logo is large enough.', 'Whether your laptop is charging.'],
        answer: 0
      },
      {
        question: 'If impressions stay stable but clicks drop, what should you investigate?',
        options: ['CTR, title relevance, and search result appeal.', 'Only DNS records.', 'Only sitemap file size.'],
        answer: 0
      },
      {
        question: 'Why compare with the same season last year?',
        options: ['Some businesses naturally rise and fall by season.', 'It changes Google’s algorithm.', 'It deletes old data.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Owners, users, permissions, and safety',
    duration: '60 minutes',
    goal: 'Know how to share Search Console access safely with employees, freelancers, agencies, and developers.',
    outcomes: [
      'Understand owner and user roles.',
      'Choose the right permission level.',
      'Review access safely.',
      'Know why old verification tokens matter.'
    ],
    sections: {
      what: [
        'Search Console has owners and users. Owners have the most control. Users have more limited access depending on permission level.',
        'A verified owner proved ownership. A delegated owner was given owner access by another owner.',
        'Permissions matter because people with access can see sensitive data and sometimes take actions that affect search appearance.'
      ],
      why: [
        'Businesses often give agencies, freelancers, or employees access and forget to remove it later.',
        'Too much access creates risk. Too little access slows work. The right level protects the business while allowing useful work.',
        'Old verification tokens can allow someone to re-verify if not removed properly.'
      ],
      where: [
        'Open Settings, then Users and permissions.',
        'Review all listed owners and users.',
        'Check ownership verification details if removing an owner.'
      ],
      how: [
        'Give owner access only to trusted people who truly need control.',
        'Give full user access to people who need reports and some actions.',
        'Give restricted access when someone only needs limited report visibility.',
        'Remove users when work ends.',
        'When removing an owner, also remove their verification token from the website, DNS, Analytics, or Tag Manager if applicable.'
      ]
    },
    glossary: [
      ['Verified owner', 'A person who proved ownership of the property.'],
      ['Delegated owner', 'A person granted owner access by another owner.'],
      ['Full user', 'A user who can view all data and take some actions.'],
      ['Restricted user', 'A user with limited viewing access.'],
      ['Verification token', 'The ownership proof that may remain after a user is removed.']
    ],
    examples: [
      {
        title: 'Agency access',
        problem: 'A marketing agency asks for owner access to review Performance reports.',
        walkthrough: 'The business gives full user access instead because the agency does not need ownership control.',
        takeaway: 'Match permission level to the job.'
      },
      {
        title: 'Former developer',
        problem: 'A developer left the project but still appears as an owner.',
        walkthrough: 'The owner removes the user and asks the current developer to remove old verification files, tags, or DNS records.',
        takeaway: 'Removing access may require removing the old proof of ownership too.'
      }
    ],
    practice: [
      'Open Users and permissions.',
      'List every person or account with access.',
      'Mark who still needs access.',
      'Decide whether each person needs owner, full, or restricted access.',
      'Create a reminder to review access every quarter.'
    ],
    mistakes: [
      'Giving owner access to everyone.',
      'Removing a user but leaving their verification token in place.',
      'Using one shared login instead of individual user access.'
    ],
    quiz: [
      {
        question: 'Who has the highest level of control in Search Console?',
        options: ['Owner', 'Restricted user', 'Anonymous visitor'],
        answer: 0
      },
      {
        question: 'What should you do when an agency only needs reports?',
        options: ['Avoid owner access and choose a lower suitable permission.', 'Give every password.', 'Delete Search Console.'],
        answer: 0
      },
      {
        question: 'Why can old verification tokens matter?',
        options: ['They may allow re-verification if left in place.', 'They improve page speed.', 'They create blog posts.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Monthly workflow and SEO action plan',
    duration: '60 minutes',
    goal: 'Build a repeatable monthly process that turns Search Console data into practical improvements.',
    outcomes: [
      'Run a 60-minute monthly Search Console review.',
      'Prioritize pages and queries.',
      'Create simple tasks for content, technical fixes, and reporting.',
      'Explain progress to a client or manager.'
    ],
    sections: {
      what: [
        'A monthly workflow is a repeatable review you do to understand what improved, what dropped, and what to improve next.',
        'The purpose is not to collect data for its own sake. The purpose is to choose better actions.',
        'For non-technical users, the best workflow combines Performance, Page indexing, URL Inspection, and a simple task list.'
      ],
      why: [
        'Checking Search Console randomly makes it hard to learn patterns.',
        'A monthly rhythm gives enough time for content and indexing changes to show early signals.',
        'A clear report helps teams understand SEO without technical confusion.'
      ],
      where: [
        'Use Performance for traffic and query insights.',
        'Use Page indexing for important page availability.',
        'Use URL Inspection for pages you changed or pages that concern you.',
        'Use your own notes, spreadsheet, or project tool to track actions.'
      ],
      how: [
        'Spend 10 minutes reviewing total clicks, impressions, CTR, and average position.',
        'Spend 10 minutes finding winning pages and declining pages.',
        'Spend 10 minutes finding query opportunities.',
        'Spend 10 minutes checking indexing for important pages.',
        'Spend 10 minutes choosing content improvements.',
        'Spend 10 minutes writing a plain-English summary and next tasks.'
      ]
    },
    glossary: [
      ['SEO action plan', 'A short list of improvements based on search data.'],
      ['Priority page', 'A page that matters strongly to business results.'],
      ['Opportunity query', 'A search where you already appear but can improve clicks or ranking.'],
      ['Baseline', 'The starting numbers you compare future results against.'],
      ['Monthly report', 'A short summary of results, learnings, and next actions.']
    ],
    examples: [
      {
        title: 'Small business monthly report',
        problem: 'The owner needs a simple SEO update for the month.',
        walkthrough: 'They report: clicks up 12%, impressions up 20%, CTR down slightly. Three pages improved. One service page has high impressions and low CTR, so next month’s task is title and intro improvement.',
        takeaway: 'A good report explains what happened and what will be done next.'
      },
      {
        title: 'Content update plan',
        problem: 'A blog has many impressions for comparison queries but few clicks.',
        walkthrough: 'The writer creates a task: update the blog with a comparison table, clearer title, and FAQ answers from the query list.',
        takeaway: 'Search Console should lead to visible page improvements.'
      }
    ],
    practice: [
      'Create a monthly Search Console review document.',
      'Add sections: Wins, Drops, Opportunities, Indexing issues, Next actions.',
      'Choose 3 pages to improve this month.',
      'For each page, write one query target and one content change.',
      'Schedule the next review date.'
    ],
    mistakes: [
      'Sending only screenshots without interpretation.',
      'Choosing too many tasks and finishing none.',
      'Measuring success only by rankings instead of useful traffic and page quality.'
    ],
    quiz: [
      {
        question: 'What is the main purpose of a monthly Search Console workflow?',
        options: ['Turn data into practical website improvements.', 'Collect screenshots only.', 'Avoid looking at pages.'],
        answer: 0
      },
      {
        question: 'What should a useful SEO report include?',
        options: ['What changed, what it means, and next actions.', 'Only a random graph.', 'Only technical words.'],
        answer: 0
      },
      {
        question: 'How many priority actions are usually better for a beginner monthly plan?',
        options: ['A small focused list, such as three actions.', 'Hundreds of unrelated tasks.', 'No actions at all.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Final case study: run Search Console for a real website',
    duration: '60 minutes',
    goal: 'Combine every lesson into a complete beginner-friendly Search Console audit and action plan.',
    outcomes: [
      'Review setup, performance, queries, indexing, and page issues.',
      'Make decisions from examples instead of memorizing reports.',
      'Prepare a simple action plan for a real or sample website.',
      'Finish the course with a reusable audit template.'
    ],
    sections: {
      what: [
        'The final lesson is a complete workflow. You will act like a Search Console manager for a website.',
        'You will check whether the account is set up correctly, understand search performance, find query opportunities, check important pages, and create actions.',
        'This is the difference between learning reports and using reports.'
      ],
      why: [
        'A paid course should end with confidence. You should know where to click, what each report means, and what to do next.',
        'The final case study trains you to think in plain English: What happened? Why might it happen? Where do I check? How do I improve it?',
        'This approach works for clinics, schools, travel websites, local services, ecommerce stores, blogs, and small business websites.'
      ],
      where: [
        'Use Search Console for the website property.',
        'Use your website pages in a browser to compare data with real content.',
        'Use a note or spreadsheet to create the final action plan.'
      ],
      how: [
        'Step 1: Confirm property and verification.',
        'Step 2: Review Performance for 3 months.',
        'Step 3: Find top pages, top queries, and opportunity queries.',
        'Step 4: Check Page indexing for important pages.',
        'Step 5: Inspect one newly updated page and one missing or weak page.',
        'Step 6: Write a 30-day action plan with owners and due dates.',
        'Step 7: Schedule the next monthly review.'
      ]
    },
    glossary: [
      ['Audit', 'A structured review that finds issues and opportunities.'],
      ['Action owner', 'The person responsible for completing a task.'],
      ['Due date', 'The date a task should be completed.'],
      ['Business impact', 'How much a page or issue matters to leads, sales, bookings, or trust.'],
      ['Next review', 'The planned date to check results again.']
    ],
    examples: [
      {
        title: 'Clinic case study',
        problem: 'A clinic wants more bookings from Google Search.',
        walkthrough: 'The audit finds that treatment pages get impressions but low CTR. Some pages are indexed, but one important page is missing. The plan is to improve titles, add patient-friendly FAQs, inspect the missing URL, and review results next month.',
        takeaway: 'Good Search Console work connects search data to business pages.'
      },
      {
        title: 'Travel blog case study',
        problem: 'A travel blog has many impressions but traffic is flat.',
        walkthrough: 'The audit finds query groups around weather, routes, permits, and budget. The plan is to update old guides with clearer sections and add internal links between related guides.',
        takeaway: 'Query data can become an editorial calendar.'
      }
    ],
    practice: [
      'Complete the full audit checklist on a real website or sample website.',
      'Write a one-page summary in plain English.',
      'Choose 5 action items: 2 content, 1 indexing, 1 title/CTR, 1 access or setup.',
      'Assign an owner and due date to each action.',
      'Set the next review date 30 days later.'
    ],
    mistakes: [
      'Finishing the audit without assigning next actions.',
      'Using technical language that a client or owner cannot understand.',
      'Forgetting to re-check whether changes helped.'
    ],
    quiz: [
      {
        question: 'What should the final audit produce?',
        options: ['A plain-English action plan.', 'Only a list of confusing terms.', 'A new domain name.'],
        answer: 0
      },
      {
        question: 'Why assign owners and due dates?',
        options: ['So the plan becomes real work, not just notes.', 'To change Google’s logo.', 'To hide Search Console data.'],
        answer: 0
      },
      {
        question: 'What is the best final mindset?',
        options: ['Use data to improve useful pages for real searchers.', 'Chase every number every hour.', 'Only focus on one keyword forever.'],
        answer: 0
      }
    ]
  }
];

const lessonVisuals = [
  {
    title: 'Training screenshot: the beginner Search Console map',
    caption: 'Use this map to remember where the main beginner reports live. Start with Performance, then check Indexing, then inspect individual URLs when needed.',
    mode: 'dashboard',
    metrics: [
      ['Performance', 'Clicks, impressions, CTR, position'],
      ['Indexing', 'Pages Google can or cannot show'],
      ['URL Inspection', 'One-page investigation'],
      ['Sitemaps', 'Help Google discover URLs']
    ],
    rows: [
      ['Question', 'Where to look'],
      ['Are people finding us?', 'Performance'],
      ['Is this page on Google?', 'URL Inspection'],
      ['Can Google read important pages?', 'Page indexing']
    ]
  },
  {
    title: 'Animated walkthrough: choosing the right property',
    caption: 'The safest beginner route is usually a Domain property because it includes the common website versions under one view.',
    mode: 'flow',
    steps: ['Enter domain', 'Add DNS record', 'Verify ownership', 'Start collecting data'],
    callout: 'Example: example.com includes http, https, www, and subdomains.'
  },
  {
    title: 'Training screenshot: Performance report reading order',
    caption: 'Read the four numbers together. One number alone can mislead you.',
    mode: 'chart',
    metrics: [
      ['Clicks', '1,248'],
      ['Impressions', '54K'],
      ['CTR', '2.3%'],
      ['Position', '8.7']
    ],
    rows: [
      ['Query', 'Clicks', 'Impressions', 'CTR'],
      ['kids dentist near me', '42', '1,900', '2.2%'],
      ['dental implants cost', '18', '2,800', '0.6%'],
      ['root canal price', '31', '940', '3.3%']
    ]
  },
  {
    title: 'Mini GIF-style animation: query to content idea',
    caption: 'A query is not just a keyword. It is a clue about the person’s question.',
    mode: 'flow',
    steps: ['Find query', 'Group intent', 'Update page', 'Review results'],
    callout: 'Query: “dental implant cost” becomes sections about price factors, process, comfort, and consultation.'
  },
  {
    title: 'Training screenshot: Page indexing priority view',
    caption: 'Do not try to fix every URL first. Start with the pages that matter most to the business.',
    mode: 'status',
    metrics: [
      ['Indexed', '126'],
      ['Not indexed', '48'],
      ['Needs review', '7'],
      ['Important missing', '1']
    ],
    rows: [
      ['URL type', 'Status', 'Action'],
      ['Service page', 'Not indexed', 'Inspect now'],
      ['Thank-you page', 'Not indexed', 'Usually okay'],
      ['Old tag page', 'Duplicate', 'Low priority']
    ]
  },
  {
    title: 'Animated walkthrough: URL Inspection decision path',
    caption: 'Inspect one page, test the live URL, then request indexing only when the page is ready.',
    mode: 'flow',
    steps: ['Paste full URL', 'Read status', 'Test live URL', 'Request indexing'],
    callout: 'Request indexing is a crawl request, not a ranking guarantee.'
  },
  {
    title: 'Training screenshot: Sitemap submission',
    caption: 'A sitemap helps Google discover important URLs, but it does not force indexing.',
    mode: 'sitemap',
    metrics: [
      ['Submitted', 'sitemap.xml'],
      ['Status', 'Success'],
      ['Discovered URLs', '183'],
      ['Last read', 'Today']
    ],
    rows: [
      ['Sitemap item', 'Meaning'],
      ['Status success', 'Google could read it'],
      ['Could not fetch', 'Google could not access it'],
      ['Discovered URLs', 'URLs found in the file']
    ]
  },
  {
    title: 'Training screenshot: traffic drop diagnosis',
    caption: 'A calm diagnosis starts by asking which metric changed and where the drop happened.',
    mode: 'chart',
    metrics: [
      ['Clicks', '-32%'],
      ['Impressions', '-4%'],
      ['CTR', '-29%'],
      ['Position', 'Stable']
    ],
    rows: [
      ['Signal', 'Likely meaning'],
      ['Impressions down', 'Visibility or demand changed'],
      ['CTR down', 'Result may look less attractive'],
      ['One page down', 'Inspect that page first']
    ]
  },
  {
    title: 'Training screenshot: safe access review',
    caption: 'Give people the lowest access level that still lets them do their work.',
    mode: 'permissions',
    metrics: [
      ['Owners', '2'],
      ['Full users', '3'],
      ['Restricted', '1'],
      ['Review cycle', 'Quarterly']
    ],
    rows: [
      ['Person', 'Role', 'Decision'],
      ['Owner', 'Verified owner', 'Keep'],
      ['Agency', 'Full user', 'Review monthly'],
      ['Old developer', 'Owner', 'Remove token']
    ]
  },
  {
    title: 'Animated workflow: monthly Search Console review',
    caption: 'A monthly review should end with a short action plan, not just screenshots.',
    mode: 'flow',
    steps: ['Review metrics', 'Find pages', 'Check indexing', 'Choose actions'],
    callout: 'Best output: 3 focused improvements for the next 30 days.'
  },
  {
    title: 'Training screenshot: final audit board',
    caption: 'The capstone turns Search Console findings into a clear 30-day action plan with owners and due dates.',
    mode: 'permissions',
    metrics: [
      ['Setup', 'Checked'],
      ['Performance', 'Reviewed'],
      ['Indexing', 'Prioritized'],
      ['Actions', '5 tasks']
    ],
    rows: [
      ['Action', 'Owner', 'Due'],
      ['Rewrite service page title', 'Marketing', '7 days'],
      ['Inspect missing URL', 'Developer', '3 days'],
      ['Add FAQ from queries', 'Content', '14 days']
    ]
  }
];

const app = document.querySelector('#app');
const googleSearchAdsLessons = [
  {
    title: 'Google Search Ads fundamentals',
    duration: '60 minutes',
    goal: 'Understand what Google Search Ads are, when to use them, and how they differ from SEO.',
    outcomes: [
      'Explain paid search clearly.',
      'Understand where search ads appear.',
      'Know the difference between SEO clicks and ad clicks.',
      'Identify the business goal before creating a campaign.'
    ],
    sections: {
      what: [
        'Google Search Ads are paid text ads that can appear on Google Search when people search for words related to your offer.',
        'Unlike SEO, where you earn unpaid visibility over time, search ads let you pay to appear for selected searches.',
        'A search ad campaign usually includes a goal, budget, keywords, ads, landing pages, and conversion tracking.'
      ],
      why: [
        'Search Ads are useful when people already have intent. Someone searching “emergency dentist near me” is much closer to action than someone casually scrolling social media.',
        'They can bring leads quickly, test new services, and support important business periods.',
        'They can also waste money quickly if the keywords, landing page, tracking, and negatives are weak.'
      ],
      where: [
        'Use Google Ads to create campaigns, ad groups, keywords, ads, assets, budgets, and conversion goals.',
        'Use Google Analytics or website forms/call tracking to understand what happens after the click.',
        'Use Search Terms, Ads, Keywords, and Recommendations reports to improve performance.'
      ],
      how: [
        'Start with one clear business goal, such as calls, form leads, bookings, purchases, or quote requests.',
        'Choose a campaign type focused on Search.',
        'Create tightly themed ad groups around one intent cluster.',
        'Write ads that match the searcher’s intent and point to the most relevant landing page.',
        'Review search terms and add negative keywords regularly.'
      ]
    },
    glossary: [
      ['Paid search', 'Ads shown in search results when advertisers pay for clicks or conversion opportunities.'],
      ['Campaign', 'The main container for budget, targeting, and settings.'],
      ['Ad group', 'A smaller group inside a campaign that holds related keywords and ads.'],
      ['Landing page', 'The page people visit after clicking an ad.'],
      ['Conversion', 'A valuable action, such as a call, form submission, purchase, or booking.']
    ],
    examples: [
      {
        title: 'Local service lead campaign',
        problem: 'A plumbing company wants calls for emergency repairs.',
        walkthrough: 'They create a Search campaign for high-intent searches like “emergency plumber near me,” send traffic to an emergency plumbing page, and track calls.',
        takeaway: 'Search Ads work best when search intent, ad copy, and landing page all match.'
      },
      {
        title: 'Wrong goal problem',
        problem: 'A business starts ads without deciding whether success means calls, forms, or sales.',
        walkthrough: 'The campaign gets clicks but nobody knows if it worked. The owner sets conversion tracking before judging performance.',
        takeaway: 'Clicks are not the goal. Business outcomes are the goal.'
      }
    ],
    practice: [
      'Write your campaign goal in one sentence.',
      'List your top 3 services or products.',
      'Write 5 searches a ready-to-buy customer might use.',
      'Choose the best landing page for each search group.'
    ],
    mistakes: [
      'Starting ads before defining conversions.',
      'Sending every ad to the homepage.',
      'Judging success only by clicks.',
      'Using broad keywords without negative keywords.'
    ],
    quiz: [
      {
        question: 'What is the main purpose of Google Search Ads?',
        options: ['Show paid ads to people searching for related terms.', 'Replace every website page.', 'Automatically improve SEO rankings.'],
        answer: 0
      },
      {
        question: 'What should you define before launching a campaign?',
        options: ['The business goal and conversion action.', 'Only the logo color.', 'The number of blog posts.'],
        answer: 0
      },
      {
        question: 'Why does landing page relevance matter?',
        options: ['It helps visitors find exactly what the ad promised.', 'It changes the weather.', 'It removes the need for tracking.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Campaign structure and settings',
    duration: '60 minutes',
    goal: 'Learn how campaign, ad group, location, budget, and bidding settings work together.',
    outcomes: [
      'Understand the account structure.',
      'Choose practical campaign settings for a beginner.',
      'Separate services into useful ad groups.',
      'Avoid common budget and location mistakes.'
    ],
    sections: {
      what: [
        'A Google Ads account contains campaigns. Campaigns contain ad groups. Ad groups contain keywords and ads.',
        'Campaign settings control budget, locations, bidding, networks, schedule, and campaign goal.',
        'Ad groups should be tightly themed so the ad text can match the keywords.'
      ],
      why: [
        'Good structure makes performance easier to understand and improve.',
        'If all services are mixed in one ad group, the ads become generic and the landing pages may not match well.',
        'Settings like location and budget can waste money if they are too broad.'
      ],
      where: [
        'Campaign settings live inside each campaign in Google Ads.',
        'Ad groups, keywords, and ads live under the campaign.',
        'Budget and bidding reports help you see whether spend is limited or inefficient.'
      ],
      how: [
        'Create one campaign for one broad business goal or service category.',
        'Create ad groups by intent, such as “emergency plumber,” “blocked drain,” or “water heater repair.”',
        'Choose only locations you can serve.',
        'Start with a budget you can evaluate for enough clicks and conversions.',
        'Turn off settings you do not understand until you have a reason to use them.'
      ]
    },
    glossary: [
      ['Daily budget', 'The average amount you are willing to spend per day.'],
      ['Bidding strategy', 'How Google decides what to bid in each auction.'],
      ['Location targeting', 'The places where your ads are eligible to show.'],
      ['Ad schedule', 'The days and times ads can run.'],
      ['Network', 'Where ads can appear, such as Google Search and search partners.']
    ],
    examples: [
      {
        title: 'Clinic campaign structure',
        problem: 'A clinic advertises dental implants, braces, and emergency dental care in one ad group.',
        walkthrough: 'They split these into separate ad groups so each ad and landing page matches the service.',
        takeaway: 'Better structure improves clarity and control.'
      },
      {
        title: 'Location targeting waste',
        problem: 'A local business accidentally targets the whole country.',
        walkthrough: 'They narrow targeting to the cities they can serve and exclude areas outside their service zone.',
        takeaway: 'Location settings can protect budget.'
      }
    ],
    practice: [
      'Create a campaign map with 1 campaign and 3 ad groups.',
      'Write the location you want to target.',
      'Choose a realistic daily budget.',
      'Write one reason for your chosen ad schedule.'
    ],
    mistakes: [
      'Putting unrelated services in one ad group.',
      'Targeting locations the business cannot serve.',
      'Changing bidding strategy too often.',
      'Setting a budget without knowing the value of a lead.'
    ],
    quiz: [
      {
        question: 'What does a campaign contain?',
        options: ['Ad groups, settings, and budget.', 'Only invoices.', 'Only website images.'],
        answer: 0
      },
      {
        question: 'Why use tightly themed ad groups?',
        options: ['So keywords, ads, and landing pages match better.', 'So ads stop showing forever.', 'So no keywords are needed.'],
        answer: 0
      },
      {
        question: 'What can poor location targeting cause?',
        options: ['Wasted spend in places you cannot serve.', 'Better tracking automatically.', 'Free clicks.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Keywords and match types',
    duration: '60 minutes',
    goal: 'Understand how keywords trigger ads and how match types control reach.',
    outcomes: [
      'Explain broad, phrase, and exact match.',
      'Choose keywords based on intent.',
      'Group keywords into useful themes.',
      'Know why search terms are different from keywords.'
    ],
    sections: {
      what: [
        'Keywords are words or phrases you add to tell Google which searches may trigger your ads.',
        'Match types control how close the user’s search needs to be to your keyword.',
        'Search terms are the actual searches people typed. Keywords are what you chose to target.'
      ],
      why: [
        'The right keywords bring people who are more likely to convert.',
        'Too-broad keywords can bring irrelevant clicks.',
        'Too-narrow keywords can limit volume and learning.'
      ],
      where: [
        'Keywords are managed inside each ad group.',
        'Search terms are reviewed in the Search terms report.',
        'Negative keywords can be added at campaign or ad group level.'
      ],
      how: [
        'Start by writing the services people buy, not just broad topics.',
        'Use phrase and exact match for tighter control.',
        'Use broad match carefully, usually with strong conversion tracking and smart bidding.',
        'Review the Search terms report to find wasted searches and new opportunities.',
        'Add negative keywords for irrelevant searches.'
      ]
    },
    glossary: [
      ['Broad match', 'A flexible match type that can show ads for related searches.'],
      ['Phrase match', 'A match type that keeps closer meaning to the keyword phrase.'],
      ['Exact match', 'A tighter match type for searches with the same meaning or intent.'],
      ['Search term', 'The actual query a user searched.'],
      ['Negative keyword', 'A word or phrase that prevents ads from showing for unwanted searches.']
    ],
    examples: [
      {
        title: 'Emergency dentist keyword',
        problem: 'A clinic wants emergency dental leads.',
        walkthrough: 'They use phrase and exact terms like “emergency dentist near me” and [emergency dentist], then add negatives like jobs, salary, free course.',
        takeaway: 'Intent matters more than volume.'
      },
      {
        title: 'Broad match surprise',
        problem: 'A broad keyword “dentist” brings searches for dentist jobs.',
        walkthrough: 'The advertiser adds job-related negatives and narrows the ad group around service intent.',
        takeaway: 'Search terms must be reviewed often.'
      }
    ],
    practice: [
      'Write 10 high-intent keywords.',
      'Label each as broad, phrase, or exact.',
      'Write 10 negative keywords.',
      'Group keywords into 2 or 3 ad groups.'
    ],
    mistakes: [
      'Using only broad keywords from day one.',
      'Never checking search terms.',
      'Choosing keywords that are informational instead of buying-focused.',
      'Forgetting negative keywords.'
    ],
    quiz: [
      {
        question: 'What is a search term?',
        options: ['The actual words a person searched.', 'The advertiser’s billing address.', 'The landing page title.'],
        answer: 0
      },
      {
        question: 'What do negative keywords do?',
        options: ['Stop ads from showing for unwanted searches.', 'Increase every bid automatically.', 'Delete campaigns.'],
        answer: 0
      },
      {
        question: 'Which match type usually gives tighter control?',
        options: ['Exact match', 'No match', 'Random match'],
        answer: 0
      }
    ]
  },
  {
    title: 'Search ad copy and assets',
    duration: '60 minutes',
    goal: 'Write search ads that match intent and use assets to improve usefulness.',
    outcomes: [
      'Understand responsive search ads.',
      'Write headlines and descriptions.',
      'Use benefits, proof, and calls to action.',
      'Know common ad assets like sitelinks and callouts.'
    ],
    sections: {
      what: [
        'Search ads contain headlines, descriptions, display paths, and assets.',
        'Responsive search ads let you provide multiple headlines and descriptions. Google combines them in different ways.',
        'Assets add extra information such as sitelinks, callouts, calls, locations, and structured snippets.'
      ],
      why: [
        'Good ad copy helps the right person click and the wrong person self-filter.',
        'Ads should match the keyword and landing page so the whole journey feels consistent.',
        'Assets can improve visibility and help users choose the right page or action.'
      ],
      where: [
        'Create ads inside each ad group.',
        'Add assets at account, campaign, or ad group level depending on relevance.',
        'Review ad strength and asset performance inside Google Ads.'
      ],
      how: [
        'Include the main service or keyword idea in some headlines.',
        'Write benefits, trust signals, and clear calls to action.',
        'Avoid repeating the same idea in every headline.',
        'Use sitelinks for important pages such as pricing, booking, services, or contact.',
        'Use callouts for short trust points like “Same-Day Appointments” or “Free Quote.”'
      ]
    },
    glossary: [
      ['Responsive search ad', 'An ad format where Google combines multiple headlines and descriptions.'],
      ['Headline', 'The main clickable text in a search ad.'],
      ['Description', 'Supporting text below the headline.'],
      ['Sitelink', 'An asset linking to another useful page.'],
      ['Callout', 'A short text asset highlighting a feature or benefit.']
    ],
    examples: [
      {
        title: 'Weak versus strong ad',
        problem: 'A weak ad says “Best Services Available.”',
        walkthrough: 'A stronger ad says “Emergency Dentist Near You,” “Same-Day Appointments,” and “Call To Book Today.”',
        takeaway: 'Specific and relevant beats generic.'
      },
      {
        title: 'Sitelink use',
        problem: 'Users need pricing, locations, and booking information.',
        walkthrough: 'The advertiser adds sitelinks for Pricing, Book Appointment, Services, and Contact.',
        takeaway: 'Assets help users move faster.'
      }
    ],
    practice: [
      'Write 10 headlines for one ad group.',
      'Write 4 descriptions.',
      'Create 4 sitelinks.',
      'Create 6 callouts.',
      'Check that every line matches the landing page.'
    ],
    mistakes: [
      'Writing vague headlines.',
      'Repeating the same phrase too many times.',
      'Sending ads to an unrelated page.',
      'Ignoring assets.'
    ],
    quiz: [
      {
        question: 'What is a responsive search ad?',
        options: ['An ad using multiple headlines and descriptions that Google can combine.', 'A banner only shown on websites.', 'A report about invoices.'],
        answer: 0
      },
      {
        question: 'What should ad copy match?',
        options: ['Keyword intent and landing page content.', 'Only the business owner’s favorite word.', 'Nothing.'],
        answer: 0
      },
      {
        question: 'What is a sitelink?',
        options: ['An ad asset linking to a useful page.', 'A negative keyword.', 'A billing method.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Landing pages and Quality Score',
    duration: '60 minutes',
    goal: 'Understand why the page after the click affects lead quality, cost, and conversion rate.',
    outcomes: [
      'Explain landing page relevance.',
      'Understand Quality Score components in simple language.',
      'Know what makes a useful ad landing page.',
      'Create a landing page improvement checklist.'
    ],
    sections: {
      what: [
        'A landing page is the page someone reaches after clicking your ad.',
        'Quality Score is a diagnostic metric that reflects expected CTR, ad relevance, and landing page experience.',
        'A relevant landing page answers the searcher’s need quickly and makes the next action easy.'
      ],
      why: [
        'Even strong ads can fail if the landing page is confusing, slow, or unrelated.',
        'Better relevance can improve user experience and may help ad efficiency.',
        'A page should continue the promise made in the ad.'
      ],
      where: [
        'Landing page URLs are set inside ads or keyword final URLs.',
        'Quality Score can be viewed in keyword columns.',
        'Conversion data shows whether the page turns clicks into actions.'
      ],
      how: [
        'Use a landing page that matches the ad group topic.',
        'Put the main service and location clearly near the top.',
        'Add proof, benefits, FAQs, and a strong call to action.',
        'Make forms and phone buttons easy to use.',
        'Check mobile speed and readability.'
      ]
    },
    glossary: [
      ['Quality Score', 'A diagnostic score based on expected CTR, ad relevance, and landing page experience.'],
      ['Expected CTR', 'Google’s estimate of how likely the ad is to get clicked.'],
      ['Ad relevance', 'How closely the ad matches the search intent.'],
      ['Landing page experience', 'How useful and relevant the page is after the click.'],
      ['Final URL', 'The real landing page URL used by the ad.']
    ],
    examples: [
      {
        title: 'Homepage problem',
        problem: 'An ad for dental implants sends users to the homepage.',
        walkthrough: 'Users must hunt for implant information. The advertiser switches to a dental implants page with pricing factors, process, FAQs, and booking CTA.',
        takeaway: 'Specific landing pages usually convert better.'
      },
      {
        title: 'Mobile form friction',
        problem: 'A page has a long form that is hard to fill on a phone.',
        walkthrough: 'The business shortens the form and adds click-to-call.',
        takeaway: 'Mobile experience matters for paid search.'
      }
    ],
    practice: [
      'Review one landing page on mobile.',
      'Check if the headline matches the ad intent.',
      'Write 3 missing FAQs.',
      'Check whether the CTA is visible without scrolling too much.',
      'List 3 page improvements.'
    ],
    mistakes: [
      'Using the homepage for every ad.',
      'Hiding the contact form or phone number.',
      'Making claims in ads that the page does not support.',
      'Ignoring mobile users.'
    ],
    quiz: [
      {
        question: 'What is landing page relevance?',
        options: ['How well the page matches the ad and search intent.', 'The color of the browser tab.', 'The number of admin users.'],
        answer: 0
      },
      {
        question: 'What are Quality Score components?',
        options: ['Expected CTR, ad relevance, and landing page experience.', 'Weather, logo, and font size.', 'Only budget.'],
        answer: 0
      },
      {
        question: 'Why avoid sending every ad to the homepage?',
        options: ['It may be less relevant than a specific service page.', 'Google does not allow homepages.', 'It always costs double.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Conversions, budgets, and bidding',
    duration: '60 minutes',
    goal: 'Learn how to measure valuable actions and make budget decisions with less guesswork.',
    outcomes: [
      'Define useful conversions.',
      'Understand cost per conversion.',
      'Know basic bidding strategy choices.',
      'Read budget performance more calmly.'
    ],
    sections: {
      what: [
        'A conversion is a valuable action, such as a lead form, call, purchase, signup, or booking.',
        'Budget controls average daily spend. Bidding tells Google how to compete in auctions.',
        'Cost per conversion shows how much you paid for each recorded valuable action.'
      ],
      why: [
        'Without conversion tracking, you only know clicks and spend, not business results.',
        'Smart bidding depends on good conversion data.',
        'Budget decisions should be connected to lead value and sales value.'
      ],
      where: [
        'Conversions are configured in Google Ads or imported from analytics tools.',
        'Budget and bidding are set at campaign level.',
        'Conversion columns can be added to campaign, ad group, keyword, and ad reports.'
      ],
      how: [
        'Choose primary conversions that match business value.',
        'Avoid counting weak actions as primary conversions.',
        'Start with bidding that matches available data and your comfort level.',
        'Review cost per conversion, conversion rate, and search terms before increasing budget.',
        'Do not judge a campaign before it has enough data.'
      ]
    },
    glossary: [
      ['Conversion rate', 'The percentage of clicks that become conversions.'],
      ['Cost per conversion', 'Ad spend divided by conversions.'],
      ['Smart bidding', 'Automated bidding that uses signals to optimize for goals.'],
      ['Primary conversion', 'A main action used for campaign optimization.'],
      ['ROAS', 'Return on ad spend. Revenue divided by ad cost.']
    ],
    examples: [
      {
        title: 'Lead value decision',
        problem: 'A business pays $40 per lead but does not know if that is good.',
        walkthrough: 'They calculate how many leads become customers and average profit per customer. Then they decide if $40 is acceptable.',
        takeaway: 'Cost per lead only makes sense with business value.'
      },
      {
        title: 'Bad conversion setup',
        problem: 'A campaign counts page views as conversions.',
        walkthrough: 'The account looks successful but leads are weak. The business switches primary conversion to form submissions and calls.',
        takeaway: 'Track meaningful actions.'
      }
    ],
    practice: [
      'List your top 3 conversion actions.',
      'Mark which should be primary.',
      'Estimate the value of one lead or sale.',
      'Write the maximum cost per conversion you can accept.',
      'Choose which reports you will check weekly.'
    ],
    mistakes: [
      'Running ads without conversion tracking.',
      'Counting weak actions as main goals.',
      'Raising budget before reviewing search terms and conversions.',
      'Changing bidding strategy too frequently.'
    ],
    quiz: [
      {
        question: 'What is a conversion?',
        options: ['A valuable action like a call, form, purchase, or booking.', 'Any page color change.', 'A keyword match type.'],
        answer: 0
      },
      {
        question: 'Why is conversion tracking important?',
        options: ['It connects ad spend to business results.', 'It removes the need for ads.', 'It blocks all competitors.'],
        answer: 0
      },
      {
        question: 'What does cost per conversion mean?',
        options: ['Spend divided by conversions.', 'Clicks divided by impressions.', 'The website hosting bill.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Optimization routine and reporting',
    duration: '60 minutes',
    goal: 'Build a simple weekly routine to improve campaigns without making random changes.',
    outcomes: [
      'Review search terms and negatives.',
      'Judge keywords, ads, and landing pages.',
      'Create a weekly optimization checklist.',
      'Write a plain-English report.'
    ],
    sections: {
      what: [
        'Optimization means improving campaign performance over time based on data.',
        'Good optimization is focused. You review the biggest spend areas, strongest intent, and weakest leaks.',
        'A weekly routine prevents panic changes and helps learning.'
      ],
      why: [
        'Search behavior changes, competitors change, and campaigns collect new data.',
        'Small regular improvements are safer than random large changes.',
        'Reports should explain what changed, what it means, and what action comes next.'
      ],
      where: [
        'Use Search terms, Keywords, Ads, Assets, Landing pages, and Conversions reports.',
        'Use campaign and ad group views to compare performance.',
        'Use notes or a spreadsheet for action tracking.'
      ],
      how: [
        'Check spend and conversions by campaign.',
        'Review search terms and add negatives.',
        'Pause or adjust weak keywords only after enough data.',
        'Improve ads with low CTR or weak relevance.',
        'Review landing pages with clicks but few conversions.',
        'Write next actions and review them next week.'
      ]
    },
    glossary: [
      ['Optimization', 'Improving campaigns using data and planned actions.'],
      ['Search terms report', 'A report showing actual searches that triggered ads.'],
      ['CTR', 'Click-through rate. Clicks divided by impressions.'],
      ['Conversion rate', 'Conversions divided by clicks.'],
      ['Wasted spend', 'Money spent on clicks unlikely to become valuable actions.']
    ],
    examples: [
      {
        title: 'Weekly negative keyword update',
        problem: 'Search terms include “free dental course” and “dentist jobs.”',
        walkthrough: 'The advertiser adds free, course, jobs, hiring, and salary as negatives where appropriate.',
        takeaway: 'Negatives protect budget.'
      },
      {
        title: 'Landing page leak',
        problem: 'A keyword has many clicks but almost no conversions.',
        walkthrough: 'The advertiser checks the landing page and finds the form is hard to use on mobile.',
        takeaway: 'Optimization is not only inside Google Ads.'
      }
    ],
    practice: [
      'Create a weekly optimization checklist.',
      'Review top spending search terms.',
      'Add 5 negative keywords.',
      'Choose one ad to improve.',
      'Write a 5-line campaign report.'
    ],
    mistakes: [
      'Changing everything at once.',
      'Ignoring search terms.',
      'Only looking at clicks, not conversions.',
      'Reporting numbers without explaining next steps.'
    ],
    quiz: [
      {
        question: 'What is optimization?',
        options: ['Improving campaigns using data and planned actions.', 'Deleting all ads weekly.', 'Only increasing budget.'],
        answer: 0
      },
      {
        question: 'Which report helps find irrelevant searches?',
        options: ['Search terms report', 'Invoice report', 'Profile report'],
        answer: 0
      },
      {
        question: 'What should a plain-English report include?',
        options: ['What changed, what it means, and next actions.', 'Only screenshots.', 'Only technical abbreviations.'],
        answer: 0
      }
    ]
  }
];

const googleAdsVisuals = lessonVisuals.slice(0, googleSearchAdsLessons.length).map((visual, index) => ({
  ...visual,
  title: [
    'Training screenshot: Search Ads account map',
    'Training screenshot: campaign structure',
    'Mini animation: keyword to search term',
    'Training screenshot: responsive search ad builder',
    'Training screenshot: landing page relevance',
    'Training screenshot: conversion and bidding dashboard',
    'Animated workflow: weekly optimization'
  ][index],
  caption: [
    'See how goal, campaign, ad group, keyword, ad, landing page, and conversion connect.',
    'A clean campaign structure makes reporting and optimization much easier.',
    'Keywords are what you target; search terms are what people actually type.',
    'Ads work better when headlines, descriptions, assets, and landing pages match search intent.',
    'The click is only the beginning. The landing page must complete the promise.',
    'Budget and bidding decisions need conversion data, not only clicks.',
    'Optimization is a calm weekly routine, not random daily changes.'
  ][index]
}));

const courses = [
  {
    id: 'learn-google-search-console',
    title: 'Learn Google Search Console',
    subtitle: 'A practical Search Console course for non-technical users.',
    lessons,
    visuals: lessonVisuals
  },
  {
    id: 'google-search-ads',
    title: 'Google Search Ads',
    subtitle: 'Learn search campaign structure, keywords, ads, landing pages, conversions, and optimization.',
    lessons: googleSearchAdsLessons,
    visuals: googleAdsVisuals
  }
];

let course = courses[0];

const appKey = 'nextskills-platform-v1';
const sessionKey = 'nextskills-session-v1';
const testMinutes = 5;
let route = {view: 'login'};
let activeLesson = 0;
let activeStudentId = null;
let lessonTimer = null;
let testTimer = null;
let activeTest = null;
let dashboardCourseTab = 'all';
let dashboardStatsPeriod = 'weekly';
let courseDetailTab = 'description';
let adminStudentSearch = '';
let adminStatusFilter = 'all';

function routeFromPath() {
  const segments = window.location.pathname.split('/').filter(Boolean).map(decodeURIComponent);
  if (!segments.length) return {view: 'login'};
  if (segments[0] === 'login') return {view: 'login'};
  if (segments[0] === 'dashboard') return {view: 'dashboard'};
  if (segments[0] === 'profile') return {view: 'profile'};
  if (segments[0] === 'admin' && segments[1] === 'students' && segments[2]) {
    activeStudentId = segments[2];
    return {view: 'student-report', studentId: segments[2]};
  }
  if (segments[0] === 'admin') return {view: 'admin'};
  if (segments[0] === 'course' && segments[1]) {
    return {
      view: 'course',
      courseId: segments[1],
      lesson: Math.max(0, Number(segments[3] || 1) - 1)
    };
  }
  return {view: 'login'};
}

function pathFromRoute(nextRoute) {
  if (!nextRoute || nextRoute.view === 'login') return '/login';
  if (nextRoute.view === 'dashboard') return '/dashboard';
  if (nextRoute.view === 'profile') return '/profile';
  if (nextRoute.view === 'admin') return '/admin';
  if (nextRoute.view === 'student-report') return `/admin/students/${encodeURIComponent(nextRoute.studentId || activeStudentId || '')}`;
  if (nextRoute.view === 'course') {
    const targetCourse = encodeURIComponent(nextRoute.courseId || course.id);
    const lessonNumber = Math.max(1, Number(nextRoute.lesson || 0) + 1);
    return `/course/${targetCourse}/lesson/${lessonNumber}`;
  }
  return '/dashboard';
}

function navigate(nextRoute, options = {}) {
  stopLessonTimer();
  route = {...nextRoute};
  if (route.view === 'student-report') activeStudentId = route.studentId || activeStudentId;
  const nextPath = pathFromRoute(route);
  if (window.location.pathname !== nextPath) {
    const method = options.replace ? 'replaceState' : 'pushState';
    window.history[method]({}, '', nextPath);
  }
  render();
}

const seedState = {
  users: [
    {
      id: 'admin-1',
      name: 'NextSkills Admin',
      email: 'admin@nextskills.local',
      password: 'admin123',
      role: 'admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 'student-1',
      name: 'Demo Student',
      email: 'student@nextskills.local',
      password: 'student123',
      role: 'student',
      createdAt: new Date().toISOString()
    }
  ],
  assignments: {
    'student-1': [courses[0].id, courses[1].id]
  },
  progress: {},
  attempts: [],
  lessonTime: {},
  lessonNotes: {},
  unlockRequests: [],
  notificationReads: {},
  currentSession: null
};

function mergeState(saved) {
  saved = saved || {};
  return {
    ...structuredClone(seedState),
    ...(saved || {}),
    users: saved.users || seedState.users,
    assignments: saved.assignments || seedState.assignments,
    progress: saved.progress || {},
    attempts: saved.attempts || [],
    lessonTime: saved.lessonTime || {},
    lessonNotes: saved.lessonNotes || {},
    unlockRequests: saved.unlockRequests || [],
    notificationReads: saved.notificationReads || {}
  };
}

function loadState() {
  const saved = JSON.parse(localStorage.getItem(appKey) || 'null');
  if (!saved) {
    localStorage.setItem(appKey, JSON.stringify(seedState));
    return structuredClone(seedState);
  }
  return mergeState(saved);
}

let state = loadState();
let remoteStateEnabled = false;
let saveStateDebounce = null;

function ensureSeedAssignments() {
  let changed = false;
  if (!state.users.some((user) => user.id === 'student-1')) return changed;
  state.assignments['student-1'] = state.assignments['student-1'] || [];
  courses.forEach((item) => {
    if (!state.assignments['student-1'].includes(item.id)) {
      state.assignments['student-1'].push(item.id);
      changed = true;
    }
  });
  return changed;
}

function saveState() {
  localStorage.setItem(appKey, JSON.stringify(state));
  if (!remoteStateEnabled) return;
  clearTimeout(saveStateDebounce);
  saveStateDebounce = setTimeout(() => {
    fetch('/api/platform-state', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({state})
    }).catch(() => {
      remoteStateEnabled = false;
    });
  }, 250);
}

async function bootstrapApp() {
  try {
    const response = await fetch('/api/platform-state', {cache: 'no-store'});
    if (response.ok) {
      const payload = await response.json();
      remoteStateEnabled = true;
      if (payload.state) {
        state = mergeState(payload.state);
      } else {
        state = mergeState(state);
      }
    }
  } catch {
    remoteStateEnabled = false;
  }

  const changed = ensureSeedAssignments();
  if (remoteStateEnabled || changed) saveState();
  route = routeFromPath();
  render();
}

function getSessionUser() {
  const userId = localStorage.getItem(sessionKey);
  return state.users.find((user) => user.id === userId) || null;
}

function setSession(user) {
  localStorage.setItem(sessionKey, user.id);
}

function clearSession() {
  localStorage.removeItem(sessionKey);
}

function getCourse(courseId) {
  return courses.find((item) => item.id === courseId) || courses[0];
}

function setActiveCourse(courseId) {
  course = getCourse(courseId || route.courseId || course.id);
  route.courseId = course.id;
  return course;
}

function userProgress(userId, courseId = course.id) {
  if (!state.progress[userId]) {
    state.progress[userId] = {};
  }
  if (!state.progress[userId][courseId]) {
    state.progress[userId][courseId] = {completedLessons: []};
  }
  return state.progress[userId][courseId];
}

function userLessonTime(userId, courseId = course.id) {
  if (!state.lessonTime[userId]) {
    state.lessonTime[userId] = {};
  }
  if (!state.lessonTime[userId][courseId]) {
    state.lessonTime[userId][courseId] = {};
  }
  return state.lessonTime[userId][courseId];
}

function userLessonNotes(userId, courseId = course.id) {
  if (!state.lessonNotes) state.lessonNotes = {};
  if (!state.lessonNotes[userId]) state.lessonNotes[userId] = {};
  if (!state.lessonNotes[userId][courseId]) state.lessonNotes[userId][courseId] = {};
  return state.lessonNotes[userId][courseId];
}

function isLessonUnlocked(userId, lessonIndex) {
  const completed = userProgress(userId).completedLessons;
  return lessonIndex === 0 || completed.includes(lessonIndex - 1);
}

function secondsToClock(totalSeconds = 0) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function courseStudySeconds(userId, courseId) {
  return Object.values(userLessonTime(userId, courseId)).reduce((sum, value) => sum + value, 0);
}

function courseProgressPercent(userId, targetCourse) {
  const completed = userProgress(userId, targetCourse.id).completedLessons.length;
  return Math.round((completed / targetCourse.lessons.length) * 100);
}

function courseLogo(item) {
  const src = item.id === 'google-search-ads' ? '/google-ads-logo.svg' : '/search-console-logo.svg';
  return `<div class="course-icon"><img src="${src}" alt="${escapeHtml(item.title)} logo" /></div>`;
}

function courseSourceLinks(targetCourse) {
  if (targetCourse.id === 'google-search-ads') {
    return [
      ['Google Ads Help', 'About Search campaigns', 'https://support.google.com/google-ads/answer/1722047'],
      ['Google Ads Help', 'Choose the right keywords', 'https://support.google.com/google-ads/answer/2453981'],
      ['Google Ads Help', 'About keyword matching options', 'https://support.google.com/google-ads/answer/7478529'],
      ['Google Ads Help', 'Use Keyword Planner', 'https://support.google.com/google-ads/answer/7337243'],
      ['Google Ads Help', 'Create effective Search ads', 'https://support.google.com/google-ads/answer/6167122']
    ];
  }
  return [
    ['Google Search Central', 'Search Console overview', 'https://developers.google.com/search/docs/monitor-debug/search-console-start'],
    ['Search Console Help', 'Performance report', 'https://support.google.com/webmasters/answer/7576553'],
    ['Search Console Help', 'URL Inspection tool', 'https://support.google.com/webmasters/answer/9012289'],
    ['Search Console Help', 'Page indexing report', 'https://support.google.com/webmasters/answer/7440203'],
    ['Search Console Help', 'Sitemaps report', 'https://support.google.com/webmasters/answer/7451001']
  ];
}

function isCourseCompleted(userId, targetCourse) {
  return userProgress(userId, targetCourse.id).completedLessons.length === targetCourse.lessons.length;
}

function isCourseInProgress(userId, targetCourse) {
  const completed = userProgress(userId, targetCourse.id).completedLessons.length;
  return completed > 0 && completed < targetCourse.lessons.length;
}

function dashboardCourseRows(user, assignedIds) {
  const assignedSet = new Set(assignedIds);
  if (dashboardCourseTab === 'assigned') {
    return courses.filter((item) => assignedSet.has(item.id));
  }
  if (dashboardCourseTab === 'completed') {
    return courses.filter((item) => assignedSet.has(item.id) && isCourseCompleted(user.id, item));
  }
  return courses;
}

function dashboardStudySeries(userId, assignedCourses, period) {
  const totalHours = assignedCourses.reduce((sum, item) => sum + (courseStudySeconds(userId, item.id) / 3600), 0);
  const base = Math.max(totalHours, 0.2);
  const seriesByPeriod = {
    day: {
      labels: ['8a', '10a', '12p', '2p', '4p', '6p'],
      values: [0, base * 0.25, base * 0.1, base * 0.3, base * 0.2, base * 0.15]
    },
    weekly: {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      values: [base * 0.1, base * 0.2, base * 0.25, base * 0.08, base * 0.32, base * 0.22, base * 0.16]
    },
    monthly: {
      labels: ['wk 1', 'wk 2', 'wk 3', 'wk 4'],
      values: [base * 0.55, base * 0.8, base * 0.45, base]
    },
    quarterly: {
      labels: ['month 1', 'month 2', 'month 3'],
      values: [base * 0.75, base, base * 0.6]
    }
  };
  const selected = seriesByPeriod[period] || seriesByPeriod.weekly;
  const max = Math.max(...selected.values, 1);
  return {
    labels: selected.labels,
    values: selected.values.map((value) => Number(value.toFixed(1))),
    heights: selected.values.map((value) => Math.max(8, Math.round((value / max) * 78)))
  };
}

function dashboardNotifications(user, assignedCourses) {
  const assigned = assignedCourses.map((item) => ({
    id: `assigned-${item.id}`,
    type: 'Course assigned',
    text: `${item.title} is available on your dashboard.`
  }));
  const completed = assignedCourses
    .filter((item) => isCourseCompleted(user.id, item))
    .map((item) => ({
      id: `completed-${item.id}`,
      type: 'Course completed',
      text: `Your ${item.title} certificate is ready.`
    }));
  const retakes = state.attempts
    .filter((attempt) => attempt.userId === user.id && !attempt.passed)
    .slice(-3)
    .reverse()
    .map((attempt) => ({
      id: `retake-${attempt.id}`,
      type: 'Retake test',
      text: `${getCourse(attempt.courseId).title}, lesson ${attempt.lessonIndex + 1} needs another attempt.`
    }));
  return [...retakes, ...completed, ...assigned].slice(0, 6);
}

function unreadNotifications(userId, notifications) {
  const read = state.notificationReads[userId] || [];
  return notifications.filter((item) => !read.includes(item.id));
}

function markNotificationsRead(userId, notifications) {
  state.notificationReads[userId] = Array.from(new Set([...(state.notificationReads[userId] || []), ...notifications.map((item) => item.id)]));
  saveState();
}

function escapePdfText(value) {
  return String(value).replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
}

function createPdfBlob(lines) {
  const body = [
    'BT',
    '/F1 34 Tf',
    '72 720 Td',
    `(${escapePdfText(lines[0])}) Tj`,
    '/F1 18 Tf',
    '0 -58 Td',
    `(${escapePdfText(lines[1])}) Tj`,
    '0 -34 Td',
    `(${escapePdfText(lines[2])}) Tj`,
    '0 -34 Td',
    `(${escapePdfText(lines[3])}) Tj`,
    '0 -70 Td',
    '/F1 14 Tf',
    `(${escapePdfText(lines[4])}) Tj`,
    'ET'
  ].join('\n');
  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n',
    '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n',
    `5 0 obj\n<< /Length ${body.length} >>\nstream\n${body}\nendstream\nendobj\n`
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object) => {
    offsets.push(pdf.length);
    pdf += object;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return new Blob([pdf], {type: 'application/pdf'});
}

function downloadCertificate(user, targetCourse) {
  const date = new Date().toLocaleDateString();
  const blob = createPdfBlob([
    'Certificate of Completion',
    `This certifies that ${user.name}`,
    `completed ${targetCourse.title}`,
    `Issued by NextSkills on ${date}`,
    'Generated from the NextSkills learning dashboard.'
  ]);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${targetCourse.title.replaceAll(' ', '-')}-${user.name.replaceAll(' ', '-')}-certificate.pdf`;
  link.click();
  URL.revokeObjectURL(url);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function ensureTenQuestions(lesson) {
  const questions = lesson.quiz.map((item) => ({
    question: item.question,
    options: item.options,
    answerText: item.options[item.answer]
  }));
  const glossaryDefinitions = lesson.glossary.map((item) => item[1]);

  lesson.glossary.forEach(([term, definition], index) => {
    if (questions.length >= 10) return;
    const distractors = shuffle(glossaryDefinitions.filter((item) => item !== definition)).slice(0, 2);
    questions.push({
      question: `What does “${term}” mean in this lesson?`,
      options: shuffle([definition, ...distractors]),
      answerText: definition
    });
  });

  lesson.outcomes.forEach((outcome) => {
    if (questions.length >= 10) return;
    const wrong = shuffle([
      'Change Google rankings instantly without improving pages.',
      'Ignore Search Console reports after setup.',
      'Use paid ads instead of checking organic search data.'
    ]).slice(0, 2);
    questions.push({
      question: 'Which statement is a real learning outcome from this lesson?',
      options: shuffle([outcome, ...wrong]),
      answerText: outcome
    });
  });

  const conceptPrompts = [
    ['What is the best beginner mindset for this lesson?', 'Use the report as clues for practical next actions.'],
    ['What should you do before making big website changes?', 'Understand the data and identify the likely cause.'],
    ['What should a non-technical user focus on?', 'Plain-English decisions, important pages, and useful improvements.'],
    ['What is a good output after reviewing this lesson?', 'A short action list connected to real pages.']
  ];

  conceptPrompts.forEach(([question, answer]) => {
    if (questions.length >= 10) return;
    questions.push({
      question,
      options: shuffle([answer, 'Change everything immediately.', 'Only memorize technical words.']),
      answerText: answer
    });
  });

  return shuffle(questions).slice(0, 10).map((item) => {
    const randomizedOptions = shuffle(item.options);
    return {
      question: item.question,
      options: randomizedOptions,
      answer: randomizedOptions.indexOf(item.answerText)
    };
  });
}

function renderShell(user, content) {
  const nav = user
    ? `
      <nav class="platform-nav">
        <button class="${route.view === 'dashboard' ? 'active' : ''}" data-route="dashboard">Dashboard</button>
        ${user.role === 'admin' ? `<button class="${route.view === 'admin' || route.view === 'student-report' ? 'active' : ''}" data-route="admin">Admin</button>` : ''}
        <button class="${route.view === 'profile' ? 'active' : ''}" data-route="profile">My profile</button>
        <button data-action="logout">Logout</button>
      </nav>
    `
    : '';

  app.innerHTML = `
    <header class="platform-header ${user?.role === 'student' && route.view === 'dashboard' ? 'student-dashboard-header' : ''} ${user?.role === 'admin' && (route.view === 'admin' || route.view === 'student-report') ? 'admin-dashboard-header' : ''}">
      <a class="platform-brand" href="#" data-route="dashboard">
        <img class="platform-logo" src="/nextskills-logo.png" alt="NextSkills" />
      </a>
      ${nav}
    </header>
    <main class="platform-main ${user?.role === 'student' && route.view === 'dashboard' ? 'student-dashboard-main' : ''} ${user?.role === 'admin' && (route.view === 'admin' || route.view === 'student-report') ? 'admin-dashboard-main' : ''}">${content}</main>
  `;
  bindGlobalActions();
}

function bindGlobalActions() {
  document.querySelectorAll('[data-route]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const user = getSessionUser();
      if (!user) return renderLogin();
      navigate({view: button.dataset.route});
    });
  });
  document.querySelectorAll('[data-action="logout"]').forEach((button) => {
    button.addEventListener('click', () => {
      stopLessonTimer();
      clearSession();
      navigate({view: 'login'}, {replace: true});
    });
  });
}

function renderLogin() {
  stopLessonTimer();
  renderShell(null, `
    <section class="login-page">
      <div class="login-copy">
        <p class="eyebrow">NextSkills learning platform</p>
        <h1>Skill courses with controlled access.</h1>
        <p>Admins add students and assign courses. Students log in, study assigned lessons, complete timed tests, and build progress records.</p>
        <div class="demo-credentials">
          <strong>Demo logins</strong>
          <span>Admin: admin@nextskills.local / admin123</span>
          <span>Student: student@nextskills.local / student123</span>
        </div>
      </div>
      <form class="login-card" id="login-form">
        <h2>Login</h2>
        <label>Email<input name="email" type="email" required /></label>
        <label>Password<input name="password" type="password" required /></label>
        <button class="button primary" type="submit">Login</button>
        <p id="login-error" class="form-error"></p>
      </form>
    </section>
  `);
  document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email')).trim().toLowerCase();
    const password = String(form.get('password'));
    const user = state.users.find((item) => item.email.toLowerCase() === email && item.password === password);
    if (!user) {
      document.querySelector('#login-error').textContent = 'Invalid email or password.';
      return;
    }
    setSession(user);
    navigate({view: user.role === 'admin' ? 'admin' : 'dashboard'}, {replace: true});
  });
}

function renderDashboard(user) {
  const assigned = state.assignments[user.id] || [];
  const assignedCourses = courses.filter((item) => assigned.includes(item.id));
  const assignedSet = new Set(assigned);
  const completedLessons = assignedCourses.reduce((sum, item) => sum + userProgress(user.id, item.id).completedLessons.length, 0);
  const totalLessons = assignedCourses.reduce((sum, item) => sum + item.lessons.length, 0) || 1;
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);
  const latestAttempt = state.attempts.filter((attempt) => attempt.userId === user.id).at(-1);
  const now = new Date();
  const activeCourse = assignedCourses.find((item) => isCourseInProgress(user.id, item)) || assignedCourses.find((item) => !isCourseCompleted(user.id, item));
  const activeCompleted = activeCourse ? userProgress(user.id, activeCourse.id).completedLessons.length : 0;
  const activeProgress = activeCourse ? courseProgressPercent(user.id, activeCourse) : 0;
  const completedCourses = assignedCourses.filter((item) => isCourseCompleted(user.id, item)).length;
  const inProgressCourses = assignedCourses.filter((item) => isCourseInProgress(user.id, item)).length;
  const courseRows = dashboardCourseRows(user, assigned);
  const notifications = dashboardNotifications(user, assignedCourses);
  const unreadCount = unreadNotifications(user.id, notifications).length;
  const stats = dashboardStudySeries(user.id, assignedCourses, dashboardStatsPeriod);
  const maxChartIndex = Math.max(stats.values.length - 1, 1);
  const chartPoints = stats.values.map((_, index) => {
    const x = 8 + ((index / maxChartIndex) * 84);
    const y = 88 - stats.heights[index];
    return {x: Number(x.toFixed(2)), y: Number(y.toFixed(2))};
  });
  const chartPolyline = chartPoints.map((point) => `${point.x},${point.y}`).join(' ');
  renderShell(user, `
    <section class="learning-dashboard">
      <div class="learning-main">
        <section class="welcome-card">
          <div>
            <h1>Hello ${escapeHtml(user.name.split(' ')[0] || user.name)}!</h1>
            <p>It’s good to see you again. Continue your assigned courses from here.</p>
          </div>
          <img class="student-illustration-img" src="/hello-user.png" alt="" />
        </section>

        <section class="dashboard-course-section">
          <div class="section-row">
            <h2>In Progress</h2>
            ${activeCourse ? `<span class="status-pill">${activeProgress}% covered</span>` : ''}
          </div>
          ${activeCourse ? `
            <section class="continue-card">
              ${courseLogo(activeCourse)}
              <div>
                <h2>${activeCourse.title}</h2>
                <p>${activeCompleted}/${activeCourse.lessons.length} lessons complete • ${secondsToClock(courseStudySeconds(user.id, activeCourse.id))} studied</p>
                <div class="inline-progress"><span style="width:${activeProgress}%"></span></div>
              </div>
              <div class="mini-progress" style="--progress:${activeProgress}%"><span>${activeProgress}%</span></div>
              <button class="button primary" data-open-course="${activeCourse.id}">Continue</button>
            </section>
          ` : '<article class="empty-card">No course is in progress yet. Start an assigned course to see it here.</article>'}
        </section>

        <section class="dashboard-course-section">
          <div class="section-row">
            <h2>Courses</h2>
            <div class="course-tabs" role="tablist" aria-label="Course filters">
              <button class="${dashboardCourseTab === 'all' ? 'active' : ''}" data-dashboard-tab="all">All Courses</button>
              <button class="${dashboardCourseTab === 'assigned' ? 'active' : ''}" data-dashboard-tab="assigned">Assigned</button>
              <button class="${dashboardCourseTab === 'completed' ? 'active' : ''}" data-dashboard-tab="completed">Completed</button>
            </div>
          </div>
          <div class="course-list learning-course-list">
            ${courseRows.length
              ? courseRows.map((item) => {
                const isAssigned = assignedSet.has(item.id);
                const itemCompleted = userProgress(user.id, item.id).completedLessons.length;
                const itemTime = Object.values(userLessonTime(user.id, item.id)).reduce((sum, value) => sum + value, 0);
                const itemAttempts = state.attempts.filter((attempt) => attempt.userId === user.id && attempt.courseId === item.id);
                const itemProgress = courseProgressPercent(user.id, item);
                const completedCourse = isAssigned && isCourseCompleted(user.id, item);
                return `
                  <article class="course-card learning-course-card">
                    ${courseLogo(item)}
                    <div>
                      <h3>${item.title}</h3>
                      <p>${item.subtitle}</p>
                      <small>${isAssigned ? `${itemCompleted}/${item.lessons.length} complete • ${itemProgress}% covered • ${secondsToClock(itemTime)} study • ${itemAttempts.length} attempts` : `${item.lessons.length} lessons • Not assigned yet`}</small>
                    </div>
                    <span class="course-rating">★ ${Math.max(4.6, 5 - (itemAttempts.length * 0.1)).toFixed(1)}</span>
                    ${completedCourse && dashboardCourseTab === 'completed'
                      ? `<button class="button primary" data-certificate-course="${item.id}">View Certificate</button>`
                      : isAssigned
                        ? `<button class="button primary" data-open-course="${item.id}">View course</button>`
                        : `<button class="button secondary" data-request-course="${item.id}">Request course</button>`}
                  </article>
                `;
              }).join('')
              : `<article class="empty-card">${dashboardCourseTab === 'completed' ? 'No completed courses yet. Finish every lesson test in a course to unlock its certificate.' : 'No courses found for this filter.'}</article>`}
          </div>
        </section>
      </div>

      <aside class="learning-side">
        <div class="top-tools">
          <div class="notification-wrap">
            <button class="notification" data-toggle-notifications aria-label="Notifications">
              <svg class="bell-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
                <path d="M10 21h4"></path>
              </svg>
              ${unreadCount ? `<span class="notification-count">${unreadCount}</span>` : ''}
            </button>
            <div class="notification-panel" hidden>
              <h3>Notifications</h3>
              ${notifications.length ? notifications.map((item) => `
                <article>
                  <strong>${item.type}</strong>
                  <p>${escapeHtml(item.text)}</p>
                </article>
              `).join('') : '<p>No notifications yet.</p>'}
            </div>
          </div>
          <div class="account-wrap">
            <button class="avatar" data-toggle-account aria-label="Account menu">${escapeHtml((user.name[0] || 'S').toUpperCase())}</button>
            <div class="account-panel" hidden>
              <strong>${escapeHtml(user.name)}</strong>
              <span>${escapeHtml(user.email)}</span>
              <button data-route="profile">My profile</button>
              <button data-action="logout">Logout</button>
            </div>
          </div>
        </div>

        <div class="summary-cards">
          <article><strong>${completedCourses}</strong><span>Courses<br/>completed</span></article>
          <article><strong>${inProgressCourses}</strong><span>Courses<br/>in progress</span></article>
        </div>

        <section class="stats-panel">
          <div class="section-row">
            <h2>Your statistics</h2>
            <select class="week-pill" data-stats-period aria-label="Statistics period">
              <option value="day" ${dashboardStatsPeriod === 'day' ? 'selected' : ''}>Day</option>
              <option value="weekly" ${dashboardStatsPeriod === 'weekly' ? 'selected' : ''}>Weekly</option>
              <option value="monthly" ${dashboardStatsPeriod === 'monthly' ? 'selected' : ''}>Monthly</option>
              <option value="quarterly" ${dashboardStatsPeriod === 'quarterly' ? 'selected' : ''}>Quarterly</option>
            </select>
          </div>
          <div class="stats-tabs"><span>Learning Hours</span></div>
          <div class="learning-chart" style="--chart-count:${stats.values.length}">
            <svg class="chart-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polyline points="${chartPolyline}"></polyline>
            </svg>
            ${stats.values.map((hour, index) => `
              <div class="chart-point" style="--x:${chartPoints[index].x};--h:${100 - chartPoints[index].y};"><span>${String(hour).replace('.5', ',5')}h</span></div>
            `).join('')}
            <div class="chart-days">${stats.labels.map((label) => `<span>${label}</span>`).join('')}</div>
          </div>
        </section>

        <section class="mini-analytics">
          <article><strong>${now.toLocaleDateString()}</strong><span>Date</span></article>
          <article><strong>${now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</strong><span>Time</span></article>
          <article><strong>${progressPercent}%</strong><span>Progress</span></article>
          <article><strong>${latestAttempt ? `${latestAttempt.correct}/10` : '-'}</strong><span>Latest score</span></article>
        </section>
      </aside>
    </section>
  `);
  document.querySelectorAll('[data-dashboard-tab]').forEach((button) => button.addEventListener('click', () => {
    dashboardCourseTab = button.dataset.dashboardTab;
    renderDashboard(user);
  }));
  document.querySelector('[data-stats-period]')?.addEventListener('change', (event) => {
    dashboardStatsPeriod = event.currentTarget.value;
    renderDashboard(user);
  });
  document.querySelector('[data-toggle-notifications]')?.addEventListener('click', () => {
    const panel = document.querySelector('.notification-panel');
    if (panel) panel.hidden = !panel.hidden;
    const accountPanel = document.querySelector('.account-panel');
    if (accountPanel) accountPanel.hidden = true;
    markNotificationsRead(user.id, notifications);
    document.querySelector('[data-toggle-notifications] span')?.remove();
  });
  document.querySelector('[data-toggle-account]')?.addEventListener('click', () => {
    const panel = document.querySelector('.account-panel');
    if (panel) panel.hidden = !panel.hidden;
    const notificationPanel = document.querySelector('.notification-panel');
    if (notificationPanel) notificationPanel.hidden = true;
  });
  document.querySelectorAll('[data-open-course]').forEach((button) => button.addEventListener('click', () => {
    navigate({view: 'course', courseId: button.dataset.openCourse, lesson: 0});
  }));
  document.querySelectorAll('[data-request-course]').forEach((button) => button.addEventListener('click', () => {
    const requestedCourse = getCourse(button.dataset.requestCourse);
    state.unlockRequests = state.unlockRequests || [];
    const exists = state.unlockRequests.some((request) => request.userId === user.id && request.courseId === requestedCourse.id && request.status === 'pending');
    if (!exists) {
      state.unlockRequests.push({
        id: `request-${Date.now()}`,
        userId: user.id,
        courseId: requestedCourse.id,
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      saveState();
    }
    alert(`Request sent for ${requestedCourse.title}. Your admin can assign it from the backend.`);
  }));
  document.querySelectorAll('[data-certificate-course]').forEach((button) => button.addEventListener('click', () => {
    downloadCertificate(user, getCourse(button.dataset.certificateCourse));
  }));
}

function bindXoGame() {
  const cells = [...document.querySelectorAll('[data-xo-cell]')];
  const status = document.querySelector('#xo-status');
  let board = Array(9).fill('');
  let gameOver = false;
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const winner = () => wins.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
  const drawBoard = () => {
    cells.forEach((cell, index) => {
      cell.textContent = board[index];
      cell.classList.toggle('filled', Boolean(board[index]));
    });
  };
  const finishIfDone = () => {
    const line = winner();
    if (line) {
      gameOver = true;
      line.forEach((index) => cells[index].classList.add('win'));
      status.textContent = `${board[line[0]] === 'X' ? 'You win' : 'Computer wins'}. Reset to play again.`;
      return true;
    }
    if (board.every(Boolean)) {
      gameOver = true;
      status.textContent = 'Draw. Reset to play again.';
      return true;
    }
    return false;
  };
  const computerMove = () => {
    const empty = board.map((value, index) => (value ? null : index)).filter((value) => value !== null);
    const choice = empty[Math.floor(Math.random() * empty.length)];
    if (choice !== undefined) board[choice] = 'O';
  };

  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      if (gameOver || board[index]) return;
      board[index] = 'X';
      drawBoard();
      if (finishIfDone()) return;
      computerMove();
      drawBoard();
      if (!finishIfDone()) status.textContent = 'Your turn. You are X.';
    });
  });

  document.querySelector('[data-reset-xo]')?.addEventListener('click', () => {
    board = Array(9).fill('');
    gameOver = false;
    cells.forEach((cell) => cell.classList.remove('win'));
    status.textContent = 'Your turn. You are X.';
    drawBoard();
  });
}

function renderAdmin(user) {
  const students = state.users.filter((item) => item.role === 'student');
  const pendingRequests = (state.unlockRequests || []).filter((request) => request.status === 'pending');
  const selectedStudent = students.find((student) => student.id === activeStudentId) || students[0] || null;
  if (selectedStudent) activeStudentId = selectedStudent.id;
  const activeStudents = students.filter((student) => courses.some((item) => userProgress(student.id, item.id).completedLessons.length > 0)).length;
  const rows = students.filter((student) => {
    const assignedTitles = courses.filter((item) => (state.assignments[student.id] || []).includes(item.id)).map((item) => item.title).join(' ');
    const haystack = `${student.name} ${student.email} ${assignedTitles}`.toLowerCase();
    const matchesSearch = haystack.includes(adminStudentSearch.toLowerCase());
    const hasPending = pendingRequests.some((request) => request.userId === student.id);
    const isActive = courses.some((item) => userProgress(student.id, item.id).completedLessons.length > 0);
    const matchesFilter = adminStatusFilter === 'all' || (adminStatusFilter === 'active' && isActive) || (adminStatusFilter === 'inactive' && !isActive) || (adminStatusFilter === 'pending' && hasPending);
    return matchesSearch && matchesFilter;
  });

  renderShell(user, `
    <section class="admin-dashboard">
      <div class="admin-topbar">
        <a class="admin-brand admin-wordmark" href="#" data-route="admin">NextSkills</a>
        <nav class="admin-nav-links" aria-label="Admin navigation">
          <a href="#admin-overview">Dashboard</a>
          <a href="#admin-students">Students</a>
          <a href="#admin-requests">Requests</a>
        </nav>
        <div class="admin-top-actions">
          <button class="notification admin-bell" aria-label="Requests">
            <svg class="bell-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
              <path d="M10 21h4"></path>
            </svg>
            ${pendingRequests.length ? `<strong>${pendingRequests.length}</strong>` : ''}
          </button>
          <button class="avatar" aria-label="Admin profile">AD</button>
        </div>
      </div>

      <section id="admin-overview" class="admin-hero-card">
        <div>
          <p class="eyebrow">Backend control center</p>
          <h1>Admin Dashboard</h1>
          <p>Manage students, course access, progress, and learning activity from one place.</p>
        </div>
      </section>

      <section class="admin-stat-grid" aria-label="Admin quick stats">
        <article><strong>${students.length}</strong><span>Total Students</span></article>
        <article><strong>${activeStudents}</strong><span>Active Students</span></article>
        <article><strong>${courses.length}</strong><span>Total Active Courses</span></article>
        <article><strong>${pendingRequests.length}</strong><span>Pending Unlock Requests</span></article>
      </section>

      <section id="admin-students" class="admin-main-grid">
        <div class="admin-card admin-student-card">
          <div class="admin-section-head">
            <div><h2>Students</h2><p>Search, filter, and open detailed learning profiles.</p></div>
            <button class="button primary" data-open-add-student>Add New Student</button>
          </div>
          <div class="admin-tools-row">
            <input id="admin-student-search" value="${escapeHtml(adminStudentSearch)}" placeholder="Search student by name, email, or course" />
            <select id="admin-status-filter">
              <option value="all" ${adminStatusFilter === 'all' ? 'selected' : ''}>All</option>
              <option value="active" ${adminStatusFilter === 'active' ? 'selected' : ''}>Active</option>
              <option value="inactive" ${adminStatusFilter === 'inactive' ? 'selected' : ''}>Inactive</option>
              <option value="pending" ${adminStatusFilter === 'pending' ? 'selected' : ''}>Pending Requests</option>
            </select>
          </div>
          <form id="add-user-form" class="admin-add-form" hidden>
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Password<input name="password" required /></label>
            <button class="button primary" type="submit">Add student</button>
          </form>
          <div class="admin-student-table">
            <div class="admin-table-head"><span>Name</span><span>Email</span><span>Status</span><span>Action</span></div>
            ${rows.map((student) => {
              const assigned = courses.filter((item) => (state.assignments[student.id] || []).includes(item.id));
              const completed = assigned.reduce((sum, item) => sum + userProgress(student.id, item.id).completedLessons.length, 0);
              const totalLessons = assigned.reduce((sum, item) => sum + item.lessons.length, 0) || 0;
              const progress = totalLessons ? Math.round((completed / totalLessons) * 100) : 0;
              const latest = state.attempts.filter((attempt) => attempt.userId === student.id).at(-1);
              const hasPending = pendingRequests.some((request) => request.userId === student.id);
              const isActive = progress > 0;
              return `
                <article class="admin-table-row ${selectedStudent?.id === student.id ? 'selected' : ''}">
                  <strong>${escapeHtml(student.name)}</strong>
                  <span>${escapeHtml(student.email)}</span>
                  <span><mark class="${hasPending ? 'pending' : isActive ? 'active' : ''}">${hasPending ? 'Pending' : isActive ? 'Active' : 'Inactive'}</mark></span>
                  <button class="button secondary" data-view-student="${student.id}">View Profile</button>
                </article>
              `;
            }).join('') || '<article class="admin-empty">No students match this filter.</article>'}
          </div>
        </div>
      </section>

      <section id="admin-requests" class="admin-card">
        <div class="admin-section-head"><div><h2>Course Unlock Requests</h2><p>Approve or reject student access requests.</p></div></div>
        <div class="admin-request-list">
          ${pendingRequests.length ? pendingRequests.map((request) => {
            const requestStudent = state.users.find((item) => item.id === request.userId);
            const requestCourse = getCourse(request.courseId);
            return `
              <article>
                <strong>${escapeHtml(requestStudent?.name || 'Unknown student')}</strong>
                <span>${requestCourse.title}</span>
                <button class="button primary" data-approve-request="${request.id}" aria-label="Approve request">Approve</button>
                <button class="button secondary" data-reject-request="${request.id}" aria-label="Reject request">Reject</button>
              </article>
            `;
          }).join('') : '<article class="admin-empty">No pending unlock requests.</article>'}
        </div>
      </section>

    </section>
  `);

  document.querySelector('[data-open-add-student]')?.addEventListener('click', () => {
    const form = document.querySelector('#add-user-form');
    if (form) form.hidden = !form.hidden;
  });
  document.querySelector('#admin-student-search')?.addEventListener('input', (event) => {
    adminStudentSearch = event.currentTarget.value;
    renderAdmin(user);
  });
  document.querySelector('#admin-status-filter')?.addEventListener('change', (event) => {
    adminStatusFilter = event.currentTarget.value;
    renderAdmin(user);
  });
  document.querySelector('#add-user-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email')).trim().toLowerCase();
    if (state.users.some((item) => item.email.toLowerCase() === email)) {
      alert('A user with this email already exists.');
      return;
    }
    const newUser = {id: `student-${Date.now()}`, name: String(form.get('name')).trim(), email, password: String(form.get('password')), role: 'student', createdAt: new Date().toISOString()};
    state.users.push(newUser);
    state.assignments[newUser.id] = [];
    activeStudentId = newUser.id;
    saveState();
    renderAdmin(user);
  });
  document.querySelectorAll('[data-approve-request]').forEach((button) => button.addEventListener('click', () => {
    const request = (state.unlockRequests || []).find((item) => item.id === button.dataset.approveRequest);
    if (!request) return;
    state.assignments[request.userId] = state.assignments[request.userId] || [];
    if (!state.assignments[request.userId].includes(request.courseId)) state.assignments[request.userId].push(request.courseId);
    request.status = 'approved';
    saveState();
    renderAdmin(user);
  }));
  document.querySelectorAll('[data-reject-request]').forEach((button) => button.addEventListener('click', () => {
    const request = (state.unlockRequests || []).find((item) => item.id === button.dataset.rejectRequest);
    if (!request) return;
    request.status = 'rejected';
    saveState();
    renderAdmin(user);
  }));
  document.querySelectorAll('[data-view-student]').forEach((button) => button.addEventListener('click', () => {
    activeStudentId = button.dataset.viewStudent;
    navigate({view: 'student-report', studentId: activeStudentId});
  }));
}

function renderStudentReport(adminUser) {
  activeStudentId = route.studentId || activeStudentId;
  const student = state.users.find((user) => user.id === activeStudentId);
  if (!student) return renderAdmin(adminUser);
  const attempts = state.attempts.filter((attempt) => attempt.userId === student.id);
  const assignedCourses = courses.filter((item) => (state.assignments[student.id] || []).includes(item.id));
  const completed = assignedCourses.reduce((sum, item) => sum + userProgress(student.id, item.id).completedLessons.length, 0);
  const totalAssignedLessons = assignedCourses.reduce((sum, item) => sum + item.lessons.length, 0) || 0;
  const progress = totalAssignedLessons ? Math.round((completed / totalAssignedLessons) * 100) : 0;
  const totalTime = assignedCourses.reduce((sum, item) => sum + courseStudySeconds(student.id, item.id), 0);
  const latestAttempt = attempts.at(-1);
  const passedTests = attempts.filter((attempt) => attempt.passed).length;
  const failedTests = attempts.filter((attempt) => !attempt.passed).length;
  const averageScore = attempts.length ? Math.round((attempts.reduce((sum, attempt) => sum + attempt.correct, 0) / (attempts.length * 10)) * 100) : 0;
  const status = (state.unlockRequests || []).some((request) => request.userId === student.id && request.status === 'pending') ? 'Pending Request' : progress > 0 ? 'Active' : 'Inactive';
  const bioItems = [
    ['Phone', student.phone || 'Not added'],
    ['College / University', student.college || 'Not added'],
    ['LinkedIn', student.linkedin || 'Not added'],
    ['Instagram', student.instagram || 'Not added'],
    ['Website', student.website || 'Not added']
  ];

  renderShell(adminUser, `
    <section class="admin-dashboard admin-student-detail-page">
      <div class="admin-topbar">
        <a class="admin-brand admin-wordmark" href="#" data-route="admin">NextSkills</a>
        <nav class="admin-nav-links" aria-label="Admin navigation">
          <button class="button secondary" data-route="admin">Back to Admin Dashboard</button>
        </nav>
        <div class="admin-top-actions"><button class="avatar" aria-label="Admin profile">AD</button></div>
      </div>

      <section class="admin-card student-detail-hero">
        <div class="admin-profile-top">
          <div class="admin-avatar-large">${escapeHtml(student.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase())}</div>
          <div>
            <p class="eyebrow">Student profile</p>
            <h1>${escapeHtml(student.name)}</h1>
            <p>${escapeHtml(student.email)}</p>
            <span>${student.bio || 'Student bio and submitted profile details are shown below.'}</span>
          </div>
        </div>
        <mark class="student-detail-status ${status === 'Active' ? 'active' : status === 'Pending Request' ? 'pending' : ''}">${status}</mark>
      </section>

      <section class="admin-stat-grid">
        <article><strong>${progress}%</strong><span>Overall Progress</span></article>
        <article><strong>${secondsToClock(totalTime)}</strong><span>Learning Hours</span></article>
        <article><strong>${attempts.length}</strong><span>Test Attempts</span></article>
        <article><strong>${latestAttempt ? `${latestAttempt.correct}/10` : '-'}</strong><span>Latest Score</span></article>
      </section>

      <section class="admin-grid-two student-detail-grid">
        <div class="admin-card">
          <div class="admin-section-head"><div><h2>Complete Bio</h2><p>Details submitted by the student from My Profile.</p></div></div>
          <div class="student-bio-grid">
            ${bioItems.map(([label, value]) => `<article><span>${label}</span><strong>${escapeHtml(value)}</strong></article>`).join('')}
            <article><span>Joined date</span><strong>${new Date(student.createdAt).toLocaleDateString()}</strong></article>
          </div>
        </div>

        <div class="admin-card">
          <div class="admin-section-head"><div><h2>Assign Courses</h2><p>Select courses from the dropdown list and save access.</p></div></div>
          <label class="student-course-select-label">Courses
            <select id="student-course-multiselect" multiple size="${Math.min(courses.length, 5)}">
              ${courses.map((item) => `<option value="${item.id}" ${(state.assignments[student.id] || []).includes(item.id) ? 'selected' : ''}>${item.title} (${item.lessons.length} lessons)</option>`).join('')}
            </select>
          </label>
          <button class="button primary" data-save-student-courses>Assign Selected Courses</button>
        </div>
      </section>

      <section class="admin-grid-two student-detail-grid">
        <div class="admin-card">
          <div class="admin-section-head"><div><h2>Course Completion Status</h2><p>Assigned course progress overview.</p></div></div>
          <div class="admin-chart-card">
            ${assignedCourses.length ? assignedCourses.map((item) => {
              const itemProgress = courseProgressPercent(student.id, item);
              return `<div class="admin-bar-row"><span>${item.title}</span><strong>${itemProgress}%</strong><i><em style="width:${itemProgress}%"></em></i></div>`;
            }).join('') : '<article class="admin-empty">No courses assigned.</article>'}
          </div>
        </div>

        <div class="admin-card">
          <div class="admin-section-head"><div><h2>Course Progress & Test Stats</h2><p>Assessment and activity summary for this student.</p></div></div>
          <div class="admin-mini-report">
            <article><strong>${passedTests}</strong><span>Passed tests</span></article>
            <article><strong>${failedTests}</strong><span>Failed tests</span></article>
            <article><strong>${averageScore}%</strong><span>Average score</span></article>
            <article><strong>${completed}/${totalAssignedLessons}</strong><span>Lessons complete</span></article>
          </div>
        </div>
      </section>

      <section class="admin-card">
        <div class="admin-section-head"><div><h2>Test Attempt History</h2><p>Scores, time spent, warnings, and pass/retake status.</p></div></div>
        <div class="student-attempt-list">
          ${attempts.length ? attempts.slice().reverse().map((attempt) => `
            <article>
              <strong>${getCourse(attempt.courseId).title} • Lesson ${attempt.lessonIndex + 1}</strong>
              <span>Score ${attempt.correct}/10 • Wrong ${attempt.wrong} • ${secondsToClock(attempt.timeSpent)} • ${attempt.violations} warning${attempt.violations === 1 ? '' : 's'} • ${attempt.passed ? 'Pass' : 'Retake'}</span>
              <small>${new Date(attempt.createdAt).toLocaleString()}</small>
            </article>
          `).join('') : '<article class="admin-empty">No attempts yet.</article>'}
        </div>
      </section>
    </section>
  `);

  document.querySelector('[data-save-student-courses]')?.addEventListener('click', () => {
    const select = document.querySelector('#student-course-multiselect');
    if (!select) return;
    state.assignments[student.id] = Array.from(select.selectedOptions).map((option) => option.value);
    saveState();
    renderStudentReport(adminUser);
  });
}

function renderProfile(user) {
  const attempts = state.attempts.filter((attempt) => attempt.userId === user.id);
  const assignedCourses = courses.filter((item) => (state.assignments[user.id] || []).includes(item.id));
  const completed = user.role === 'student' ? assignedCourses.reduce((sum, item) => sum + userProgress(user.id, item.id).completedLessons.length, 0) : 0;
  const totalLessons = assignedCourses.reduce((sum, item) => sum + item.lessons.length, 0) || 0;
  const progressPercent = totalLessons ? Math.round((completed / totalLessons) * 100) : 0;
  const recentAttempts = attempts.slice(-4).reverse();
  renderShell(user, `
    <section class="profile-page profile-redesign">
      <header class="profile-hero">
        <h1>${escapeHtml(user.name)}</h1>
        <p>${escapeHtml(user.email)} • ${user.role}</p>
      </header>

      ${user.role === 'student' ? `
        <section class="profile-progress-card">
          <div>
            <strong>Overall Progress</strong>
            <div class="profile-progress-track" aria-label="${progressPercent}% complete"><span style="width:${progressPercent}%"></span></div>
          </div>
          <div class="profile-progress-meta">
            <strong>${completed}/${totalLessons} lessons completed</strong>
          </div>
        </section>
      ` : ''}

      <div class="profile-grid profile-redesign-grid">
        <form id="profile-details-form" class="stack-form profile-card profile-details-card">
          <h2>Profile details</h2>
          <div class="profile-fields">
            <label>Phone number<input name="phone" value="${escapeHtml(user.phone || '')}" placeholder="+1 (555) 000-0000" /></label>
            <label>College or university<input name="college" value="${escapeHtml(user.college || '')}" placeholder="Global Tech University" /></label>
            <label class="profile-wide">LinkedIn Profile<span class="profile-input-icon"><span>↗</span><input name="linkedin" type="url" value="${escapeHtml(user.linkedin || '')}" placeholder="https://linkedin.com/in/..." /></span></label>
            <label class="profile-wide">Instagram<span class="profile-input-icon"><span>@</span><input name="instagram" type="url" value="${escapeHtml(user.instagram || '')}" placeholder="https://instagram.com/..." /></span></label>
            <label class="profile-wide">Website<input name="website" type="url" value="${escapeHtml(user.website || '')}" placeholder="https://example.com" /></label>
          </div>
          <div class="profile-form-footer">
            <p id="profile-message" class="form-error"></p>
            <button class="button primary" type="submit">Save profile</button>
          </div>
        </form>
        <form id="password-form" class="stack-form profile-card profile-password-card">
          <h2>Change password</h2>
          <label>Existing password<input name="existingPassword" type="password" required /></label>
          <label>New password<input name="newPassword" type="password" minlength="6" maxlength="10" required /></label>
          <label>Confirm new password<input name="confirmPassword" type="password" minlength="6" maxlength="10" required /></label>
          <button class="button primary" type="submit">Update password</button>
          <p id="password-message" class="form-error"></p>
        </form>
      </div>

      <section class="profile-activity-section">
        <div class="profile-section-row">
          <h2>Recent test activity</h2>
          <span>View all activity →</span>
        </div>
        <div class="profile-activity-list">
          ${recentAttempts.length ? recentAttempts.map((attempt) => {
            const item = getCourse(attempt.courseId);
            const scoreLabel = attempt.correct >= 9 ? 'Perfect' : attempt.passed ? 'Passed' : 'Retake';
            return `
              <article class="profile-attempt-row">
                ${courseLogo(item)}
                <div>
                  <strong>${item.title} • Lesson ${attempt.lessonIndex + 1}: ${attempt.passed ? 'Passed' : 'Retake needed'}</strong>
                  <span>${attempt.correct}/10 correct • ${secondsToClock(attempt.timeSpent)}</span>
                </div>
                <span class="profile-score-pill ${attempt.passed ? 'success' : 'warning'}">${scoreLabel}</span>
                <span class="profile-row-arrow">›</span>
              </article>
            `;
          }).join('') : '<article class="profile-empty-activity">No student test activity yet.</article>'}
        </div>
      </section>
    </section>
  `);
  document.querySelector('#profile-details-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    Object.assign(user, {
      phone: String(form.get('phone')).trim(),
      college: String(form.get('college')).trim(),
      linkedin: String(form.get('linkedin')).trim(),
      instagram: String(form.get('instagram')).trim(),
      website: String(form.get('website')).trim()
    });
    saveState();
    const message = document.querySelector('#profile-message');
    if (message) {
      message.classList.add('success-message');
      message.textContent = 'Profile saved.';
    }
  });
  document.querySelector('#password-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const existingPassword = String(form.get('existingPassword'));
    const newPassword = String(form.get('newPassword'));
    const confirmPassword = String(form.get('confirmPassword'));
    const message = document.querySelector('#password-message');
    const fail = (text) => {
      if (!message) return;
      message.classList.remove('success-message');
      message.textContent = text;
    };
    if (existingPassword !== user.password) return fail('Existing password is not correct.');
    if (newPassword.length < 6 || newPassword.length > 10) return fail('New password must be 6 to 10 characters.');
    if (!/[A-Za-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) return fail('New password must include alphabets and numbers.');
    if (newPassword !== confirmPassword) return fail('New passwords do not match.');
    user.password = newPassword;
    saveState();
    event.currentTarget.reset();
    if (message) {
      message.classList.add('success-message');
      message.textContent = 'Password updated.';
    }
  });
}

function renderLessonVisual(index) {
  const visual = course.visuals[index];
  if (!visual) return '';
  const metricCards = (visual.metrics || []).map(([label, value]) => `<div class="visual-metric"><strong>${label}</strong><span>${value}</span></div>`).join('');
  const tableRows = (visual.rows || []).map((row, rowIndex) => `<tr>${row.map((cell) => `<${rowIndex === 0 ? 'th' : 'td'}>${cell}</${rowIndex === 0 ? 'th' : 'td'}>`).join('')}</tr>`).join('');
  const flowSteps = (visual.steps || []).map((step, stepIndex) => `<li style="--step-index: ${stepIndex}"><span>${stepIndex + 1}</span>${step}</li>`).join('');
  const chartBars = [42, 58, 46, 76, 68, 90, 74].map((height, index) => `<span style="height:${height}%;--bar-index:${index}"></span>`).join('');
  const bodyByMode = {
    dashboard: `<div class="visual-sidebar"><span></span><span></span><span></span><span></span></div><div class="visual-main"><div class="visual-metrics">${metricCards}</div><table>${tableRows}</table></div>`,
    flow: `<ol class="visual-flow">${flowSteps}</ol><p class="visual-callout">${visual.callout}</p>`,
    chart: `<div class="visual-metrics">${metricCards}</div><div class="visual-chart">${chartBars}</div><table>${tableRows}</table>`,
    status: `<div class="visual-metrics">${metricCards}</div><div class="status-stack"><div class="status-line good"><strong>Indexed</strong><span>Ready for Search</span></div><div class="status-line warning"><strong>Not indexed</strong><span>Needs judgment</span></div><div class="status-line danger"><strong>Important missing</strong><span>Inspect first</span></div></div><table>${tableRows}</table>`,
    sitemap: `<div class="visual-metrics">${metricCards}</div><div class="sitemap-box"><code>https://example.com/sitemap.xml</code><button type="button">Submit</button></div><table>${tableRows}</table>`,
    permissions: `<div class="visual-metrics">${metricCards}</div><table>${tableRows}</table>`
  };
  return `
    <section class="lesson-section">
      <h4>Visual walkthrough</h4>
      <figure class="visual-demo visual-${visual.mode}">
        <figcaption><strong>${visual.title}</strong><span>${visual.caption}</span></figcaption>
        <div class="visual-window">
          <div class="visual-window-bar" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="visual-body">${bodyByMode[visual.mode] || bodyByMode.dashboard}</div>
        </div>
      </figure>
    </section>
  `;
}

function listItems(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function renderCourseDetailTab(user, lesson, lessonIndex) {
  if (courseDetailTab === 'resources') {
    return `
      <section class="course-source-panel">
        <h4>Official sources used for this course</h4>
        <p>These links point to Google’s official documentation and help pages used while preparing this lesson content.</p>
        <div class="source-link-list">
          ${courseSourceLinks(course).map(([source, title, url]) => `
            <a href="${url}" target="_blank" rel="noopener noreferrer">
              <span>${source}</span>
              <strong>${title}</strong>
              <em>${url}</em>
            </a>
          `).join('')}
        </div>
      </section>
    `;
  }

  if (courseDetailTab === 'notes') {
    const notes = userLessonNotes(user.id)[lessonIndex] || '';
    return `
      <section class="course-notes-panel">
        <h4>My notes</h4>
        <p>Write your own pointers, examples, reminders, or questions from this lesson. Notes are saved to your account progress.</p>
        <div class="notes-toolbar" aria-label="Notes formatting tools">
          <button type="button" data-note-wrap="**">B</button>
          <button type="button" data-note-wrap="_">I</button>
          <button type="button" data-note-prefix="- ">• List</button>
          <button type="button" data-note-prefix="Next action: ">Action</button>
        </div>
        <textarea id="lesson-notes-editor" rows="14" placeholder="Example: Check Performance report every Monday and note top queries...">${escapeHtml(notes)}</textarea>
        <div class="notes-actions">
          <button class="button primary" data-save-notes>Save notes</button>
          <span id="notes-save-message"></span>
        </div>
      </section>
    `;
  }

  if (courseDetailTab === 'assessment') {
    const attempts = state.attempts
      .filter((attempt) => attempt.userId === user.id && attempt.courseId === course.id)
      .slice()
      .reverse();
    return `
      <section class="course-assessment-panel">
        <h4>Assessment history</h4>
        <p>Your main test and retest attempts for this course are listed here. Correct answers remain hidden.</p>
        ${attempts.length ? `
          <div class="assessment-table">
            ${attempts.map((attempt, index) => `
              <article>
                <span>${index === attempts.length - 1 ? 'Main test' : 'Retest'}</span>
                <strong>Lesson ${attempt.lessonIndex + 1}: ${attempt.correct}/10</strong>
                <small>${attempt.passed ? 'Passed' : 'Retake needed'} • ${secondsToClock(attempt.timeSpent)} • ${attempt.violations} warning${attempt.violations === 1 ? '' : 's'} • ${new Date(attempt.createdAt).toLocaleString()}</small>
              </article>
            `).join('')}
          </div>
        ` : '<div class="empty-card">No assessment attempts yet. Start the lesson test when you are ready.</div>'}
      </section>
    `;
  }

  return `
    <section class="lesson-intro">
      <p>${lesson.goal}</p>
      <h4>Learning Objectives:</h4>
      ${listItems(lesson.outcomes)}
    </section>
    ${renderLessonVisual(lessonIndex)}
    <section class="lesson-section"><h4>What this means</h4>${lesson.sections.what.map((item) => `<p>${item}</p>`).join('')}</section>
    <section class="lesson-section"><h4>Why this matters</h4>${lesson.sections.why.map((item) => `<p>${item}</p>`).join('')}</section>
    <section class="lesson-section"><h4>Where you use it</h4>${lesson.sections.where.map((item) => `<p>${item}</p>`).join('')}</section>
    <section class="lesson-section"><h4>How to do it</h4>${listItems(lesson.sections.how)}</section>
    <section class="lesson-section"><h4>Terminology and glossary</h4><div class="lesson-term-grid">${lesson.glossary.map(([term, definition]) => `<article><h5>${term}</h5><p>${definition}</p></article>`).join('')}</div></section>
    <section class="lesson-section"><h4>Examples</h4><div class="lesson-example-grid">${lesson.examples.map((example) => `<article class="lesson-example"><h5>${example.title}</h5><p><strong>Problem:</strong> ${example.problem}</p><p><strong>Walkthrough:</strong> ${example.walkthrough}</p><p><strong>Takeaway:</strong> ${example.takeaway}</p></article>`).join('')}</div></section>
    <section class="lesson-section"><h4>Hands-on practice</h4><div class="practice">${listItems(lesson.practice)}</div></section>
    <section class="lesson-section"><h4>Lesson test</h4><p>You have 5 minutes. Questions and options are randomized. You may get up to 3 answers wrong. If 4 or more are wrong, you must retake the test.</p><button class="button primary" data-start-test>Start 5-minute test</button></section>
  `;
}

function renderLesson(user) {
  setActiveCourse(route.courseId);
  const lessonIndex = Math.max(0, Math.min(route.lesson || 0, course.lessons.length - 1));
  route.lesson = lessonIndex;
  activeLesson = lessonIndex;
  const lesson = course.lessons[lessonIndex];
  if (!isLessonUnlocked(user.id, lessonIndex)) {
    return navigate({view: 'course', courseId: course.id, lesson: 0}, {replace: true});
  }
  startLessonTimer(user.id, lessonIndex);
  const completed = userProgress(user.id).completedLessons;
  const coursePercent = Math.round((completed.length / course.lessons.length) * 100);
  const nextLessonIndex = Math.min(course.lessons.length - 1, lessonIndex + 1);
  const canOpenNext = lessonIndex < course.lessons.length - 1 && isLessonUnlocked(user.id, nextLessonIndex);
  renderShell(user, `
    <section class="course-player platform-course">
      <main class="course-player-main">
        <div class="course-sticky-head">
          <button class="button secondary course-back-button" data-route="dashboard">Back to dashboard</button>
          <div class="course-player-header">
            <div>
              <h1>Lesson ${lessonIndex + 1}: ${lesson.title}</h1>
              <p>${course.title} • Module ${lessonIndex + 1}</p>
            </div>
            <div class="course-player-actions">
              <button class="button secondary" data-start-test>Start test</button>
              <button class="button primary" data-next-lesson ${canOpenNext ? '' : 'disabled'}>Next lesson</button>
            </div>
          </div>
          <div class="course-detail-tabs" role="tablist" aria-label="Lesson details">
            <button class="${courseDetailTab === 'description' ? 'active' : ''}" data-course-tab="description">Description</button>
            <button class="${courseDetailTab === 'resources' ? 'active' : ''}" data-course-tab="resources">Resources (${courseSourceLinks(course).length})</button>
            <button class="${courseDetailTab === 'notes' ? 'active' : ''}" data-course-tab="notes">Notes</button>
            <button class="${courseDetailTab === 'assessment' ? 'active' : ''}" data-course-tab="assessment">Assessment</button>
          </div>
        </div>

        <article class="lesson-card course-detail-card">
          <div class="course-detail-body">
            ${renderCourseDetailTab(user, lesson, lessonIndex)}
          </div>
        </article>
      </main>

      <aside class="course-content-panel">
        <div class="course-content-head">
          <h2>Course Content</h2>
          <span>${coursePercent}% Complete</span>
        </div>
        <div class="course-content-list">
          ${course.lessons.map((item, index) => {
            const unlocked = isLessonUnlocked(user.id, index);
            const done = completed.includes(index);
            return `
              <button class="course-content-item ${index === lessonIndex ? 'active' : ''} ${done ? 'completed' : ''}" data-lesson-nav="${index}" ${unlocked ? '' : 'disabled'}>
                <span class="course-content-index">${done ? '✓' : index + 1}</span>
                <span><strong>${index + 1}. ${item.title}</strong><small>${index === lessonIndex ? 'Now Playing' : done ? 'Completed' : unlocked ? 'Available' : 'Locked'}</small></span>
                <em>${item.duration.replace(' minutes', ':00')}</em>
              </button>
            `;
          }).join('')}
        </div>
      </aside>
    </section>
  `);
  document.querySelectorAll('[data-lesson-nav]').forEach((button) => {
    button.addEventListener('click', () => {
      navigate({view: 'course', courseId: course.id, lesson: Number(button.dataset.lessonNav)});
    });
  });
  document.querySelectorAll('[data-course-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      courseDetailTab = button.dataset.courseTab;
      renderLesson(user);
    });
  });
  document.querySelectorAll('[data-start-test]').forEach((button) => button.addEventListener('click', () => startTest(user, lessonIndex)));
  document.querySelector('[data-next-lesson]')?.addEventListener('click', () => {
    if (canOpenNext) navigate({view: 'course', courseId: course.id, lesson: nextLessonIndex});
  });
  document.querySelectorAll('[data-note-wrap], [data-note-prefix]').forEach((button) => {
    button.addEventListener('click', () => {
      const editor = document.querySelector('#lesson-notes-editor');
      if (!editor) return;
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      const selected = editor.value.slice(start, end);
      const before = editor.value.slice(0, start);
      const after = editor.value.slice(end);
      if (button.dataset.noteWrap) {
        editor.value = `${before}${button.dataset.noteWrap}${selected || 'note'}${button.dataset.noteWrap}${after}`;
      } else {
        editor.value = `${before}${button.dataset.notePrefix}${selected}${after}`;
      }
      editor.focus();
    });
  });
  document.querySelector('[data-save-notes]')?.addEventListener('click', () => {
    const editor = document.querySelector('#lesson-notes-editor');
    if (!editor) return;
    userLessonNotes(user.id)[lessonIndex] = editor.value;
    saveState();
    const message = document.querySelector('#notes-save-message');
    if (message) message.textContent = 'Saved';
  });
}

function startLessonTimer(userId, lessonIndex) {
  stopLessonTimer();
  lessonTimer = setInterval(() => {
    const times = userLessonTime(userId);
    times[lessonIndex] = (times[lessonIndex] || 0) + 1;
    saveState();
  }, 1000);
}

function stopLessonTimer() {
  if (lessonTimer) {
    clearInterval(lessonTimer);
    lessonTimer = null;
  }
}

function startTest(user, lessonIndex) {
  stopLessonTimer();
  const questions = ensureTenQuestions(course.lessons[lessonIndex]);
  activeTest = {
    userId: user.id,
    lessonIndex,
    questions,
    answers: {},
    startedAt: Date.now(),
    remaining: testMinutes * 60,
    violations: 0,
    lastViolationAt: 0,
    closed: false,
    submitted: false
  };
  document.body.classList.add('test-mode');
  renderTest(user);
}

function renderTest(user) {
  renderShell(user, `
    <section class="test-screen" oncopy="return false" oncut="return false" onpaste="return false" oncontextmenu="return false">
      <div class="test-top">
        <div><p class="test-pill">Timed test</p><h1>${course.lessons[activeTest.lessonIndex].title}</h1></div>
        <div class="timer"><span>Time left</span><strong id="test-timer">${secondsToClock(activeTest.remaining)}</strong></div>
      </div>
      <div class="security-note test-security-card">
        <span class="security-icon">◇</span>
        <p><strong>Test security:</strong> copy and right-click are blocked where possible. Switching tabs/windows gives one warning. A second switch closes the test and requires a retake. Focus tracking is active.</p>
      </div>
      <div id="focus-warning" class="focus-warning" hidden></div>
      <form id="test-form" class="test-form">
        ${activeTest.questions.map((question, questionIndex) => `
          <fieldset>
            <legend>${questionIndex + 1}. ${question.question}</legend>
            ${question.options.map((option, optionIndex) => `
              <label><input type="radio" name="q-${questionIndex}" value="${optionIndex}" /> ${option}</label>
            `).join('')}
          </fieldset>
        `).join('')}
        <button class="button primary" type="submit">Submit test</button>
      </form>
      <div id="test-result"></div>
      <div id="test-blackout" class="test-blackout"><strong>Test paused</strong><span>Focus changed. Return to the test window.</span></div>
    </section>
  `);
  installTestSecurity(user);
  document.querySelector('#test-form').addEventListener('submit', (event) => {
    event.preventDefault();
    submitTest(user, false);
  });
  tickTest(user);
}

function installTestSecurity(user) {
  document.addEventListener('keydown', blockCopyKeys, true);
  document.addEventListener('visibilitychange', () => handleVisibilityViolation(user), {once: false});
  window.addEventListener('blur', () => handleVisibilityViolation(user), {once: false});
}

function blockCopyKeys(event) {
  const key = event.key.toLowerCase();
  if ((event.ctrlKey || event.metaKey) && ['c', 'x', 'p', 's'].includes(key)) {
    event.preventDefault();
  }
  if (key === 'printscreen') {
    event.preventDefault();
  }
}

function handleVisibilityViolation(user) {
  if (!activeTest || activeTest.submitted || activeTest.closed) return;
  if (document.visibilityState && document.visibilityState !== 'hidden' && document.hasFocus()) return;
  const now = Date.now();
  if (now - activeTest.lastViolationAt < 1800) return;
  activeTest.lastViolationAt = now;
  activeTest.violations += 1;
  const blackout = document.querySelector('#test-blackout');
  const warning = document.querySelector('#focus-warning');
  blackout?.classList.add('visible');
  setTimeout(() => blackout?.classList.remove('visible'), 1600);
  if (activeTest.violations === 1) {
    if (warning) {
      warning.hidden = false;
      warning.textContent = 'Warning 1 of 2: stay on this test window. The next tab/window switch will close this attempt.';
    }
  } else {
    if (warning) {
      warning.hidden = false;
      warning.textContent = 'Second focus warning detected. This attempt is closed and must be retaken.';
    }
    activeTest.closed = true;
    submitTest(user, true);
  }
}

function tickTest(user) {
  clearInterval(testTimer);
  testTimer = setInterval(() => {
    if (!activeTest || activeTest.submitted) return clearInterval(testTimer);
    activeTest.remaining -= 1;
    const timer = document.querySelector('#test-timer');
    if (timer) timer.textContent = secondsToClock(Math.max(activeTest.remaining, 0));
    if (activeTest.remaining <= 0) {
      submitTest(user, true);
    }
  }, 1000);
}

function submitTest(user, forced) {
  if (!activeTest || activeTest.submitted) return;
  activeTest.submitted = true;
  clearInterval(testTimer);
  document.removeEventListener('keydown', blockCopyKeys, true);
  document.body.classList.remove('test-mode');
  const form = document.querySelector('#test-form');
  const data = form ? new FormData(form) : new FormData();
  let correct = 0;
  activeTest.questions.forEach((question, index) => {
    if (Number(data.get(`q-${index}`)) === question.answer) correct += 1;
  });
  const wrong = activeTest.questions.length - correct;
  const passed = !forced && wrong <= 3;
  const attempt = {
    id: `attempt-${Date.now()}`,
    userId: user.id,
    courseId: course.id,
    lessonIndex: activeTest.lessonIndex,
    correct,
    wrong,
    passed,
    forced,
    violations: activeTest.violations,
    timeSpent: testMinutes * 60 - Math.max(activeTest.remaining, 0),
    createdAt: new Date().toISOString()
  };
  state.attempts.push(attempt);
  if (passed) {
    const progress = userProgress(user.id);
    if (!progress.completedLessons.includes(activeTest.lessonIndex)) {
      progress.completedLessons.push(activeTest.lessonIndex);
      progress.completedLessons.sort((a, b) => a - b);
    }
  }
  saveState();
  document.querySelector('#test-form')?.remove();
  document.querySelector('.test-screen')?.classList.add('test-result-screen');
  document.querySelector('.security-note')?.classList.add('result-security-panel');
  document.querySelector('.security-note')?.classList.remove('test-security-card');
  document.querySelector('#test-result').innerHTML = `
    <div class="result-card">
      <div class="result-submit-row">
        <div>
          <h2>Test submitted</h2>
          <p>Click the button below to view your result summary. Correct answers are not shown.</p>
        </div>
        <button class="button secondary" data-view-result>View results</button>
      </div>
      <div id="result-summary"></div>
    </div>
  `;
  document.querySelector('[data-view-result]').addEventListener('click', () => {
    const scorePercent = Math.round((correct / 10) * 100);
    document.querySelector('#result-summary').innerHTML = `
      <div class="interactive-result ${passed ? 'passed' : 'failed'}">
        <div class="score-ring" style="--score:${scorePercent}%"><strong>${correct}/10</strong><span>${scorePercent}%</span></div>
        <div>
          <h3>${passed ? 'Passed' : 'Retake required'}</h3>
          <p>${passed ? 'Good work. You can continue to the next lesson.' : 'More than 3 answers were wrong, or the attempt was automatically closed due to focus violations. Please retake the test after reviewing the material.'}</p>
        </div>
      </div>
      <div class="result-metrics">
        <article><strong>${wrong}</strong><span>wrong answers</span></article>
        <article><strong>${secondsToClock(attempt.timeSpent)}</strong><span>time spent</span></article>
        <article><strong>${attempt.violations}</strong><span>focus warnings</span></article>
        <article><strong>${forced ? 'Closed' : 'Submitted'}</strong><span>attempt type</span></article>
      </div>
      <p class="result-note">ⓘ Correct answers are intentionally hidden. Review the lesson and retake if needed.</p>
      <button class="button primary" data-return-course>${passed ? 'Continue course' : 'Retake lesson test'}</button>
    `;
    document.querySelector('[data-return-course]').addEventListener('click', () => {
      activeTest = null;
      const nextLesson = Math.min(course.lessons.length - 1, attempt.lessonIndex + (passed ? 1 : 0));
      navigate({view: 'course', courseId: attempt.courseId, lesson: nextLesson});
    });
  });
}

function render() {
  const user = getSessionUser();
  if (!user) return renderLogin();
  if (route.view === 'login') {
    return navigate({view: user.role === 'admin' ? 'admin' : 'dashboard'}, {replace: true});
  }
  if (route.view === 'admin') return user.role === 'admin' ? renderAdmin(user) : renderDashboard(user);
  if (route.view === 'student-report') return user.role === 'admin' ? renderStudentReport(user) : renderDashboard(user);
  if (route.view === 'profile') return renderProfile(user);
  if (route.view === 'course') return renderLesson(user);
  return user.role === 'admin' ? renderAdmin(user) : renderDashboard(user);
}

document.addEventListener('contextmenu', (event) => {
  if (document.body.classList.contains('test-mode')) event.preventDefault();
});

window.addEventListener('pagehide', () => {
  if (!remoteStateEnabled || !navigator.sendBeacon) return;
  const payload = new Blob([JSON.stringify({state})], {type: 'application/json'});
  navigator.sendBeacon('/api/platform-state', payload);
});

window.addEventListener('popstate', () => {
  stopLessonTimer();
  route = routeFromPath();
  render();
});

document.querySelector('#app').innerHTML = '<main class="platform-main"><section class="empty-card">Loading NextSkills...</section></main>';
bootstrapApp();

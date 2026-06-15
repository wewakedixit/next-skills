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
      'Sending only notes without interpretation.',
      'Choosing too many tasks and finishing none.',
      'Measuring success only by rankings instead of useful traffic and page quality.'
    ],
    quiz: [
      {
        question: 'What is the main purpose of a monthly Search Console workflow?',
        options: ['Turn data into practical website improvements.', 'Collect notes only.', 'Avoid looking at pages.'],
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
    title: 'Training view: the beginner Search Console map',
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
    title: 'Training view: Performance report reading order',
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
    title: 'Training view: Page indexing priority view',
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
    title: 'Training view: Sitemap submission',
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
    title: 'Training view: traffic drop diagnosis',
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
    title: 'Training view: safe access review',
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
    caption: 'A monthly review should end with a short action plan, not just notes.',
    mode: 'flow',
    steps: ['Review metrics', 'Find pages', 'Check indexing', 'Choose actions'],
    callout: 'Best output: 3 focused improvements for the next 30 days.'
  },
  {
    title: 'Training view: final audit board',
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
        options: ['What changed, what it means, and next actions.', 'Only notes.', 'Only technical abbreviations.'],
        answer: 0
      }
    ]
  }
];

const googleAdsVisuals = lessonVisuals.slice(0, googleSearchAdsLessons.length).map((visual, index) => ({
  ...visual,
  title: [
    'Training view: Search Ads account map',
    'Training view: campaign structure',
    'Mini animation: keyword to search term',
    'Training view: responsive search ad builder',
    'Training view: landing page relevance',
    'Training view: conversion and bidding dashboard',
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

const seoCourseLessons = [
  {
    title: 'SEO Course basics',
    duration: '60 minutes',
    goal: 'Understand what SEO is, how search engines work, and how to think like a helpful SEO learner instead of a shortcut hunter.',
    outcomes: [
      'Explain SEO in simple words.',
      'Understand crawling, indexing, ranking, and search intent.',
      'Know why helpful pages win more trust than trick pages.',
      'Create a simple SEO mission for one website.'
    ],
    sections: {
      what: [
        'SEO means improving your website so people can find useful pages through unpaid search results.',
        'Search engines first discover pages, then understand them, then decide when they are useful for a search.',
        'Your SEO job is not to fool Google. Your job is to make helpful pages easier for people and search engines to understand.'
      ],
      why: [
        'SEO can bring steady visitors without paying for every click.',
        'Good SEO also improves the website for real users: clearer pages, faster answers, better structure, and more trust.',
        'A beginner should focus on usefulness first, then clarity, then technical health.'
      ],
      where: [
        'Use Google Search to understand what people already see.',
        'Use Google Search Console to check performance, indexing, and page issues.',
        'Use your website pages, blog posts, product pages, service pages, and local pages as your SEO playground.'
      ],
      how: [
        'Pick one important page.',
        'Write down who the page helps and what question it answers.',
        'Check whether the title, headings, first paragraph, images, and links all support that answer.',
        'Measure progress with clicks, impressions, rankings, leads, and user actions, not only one keyword position.'
      ]
    },
    glossary: [
      ['SEO', 'Improving a website so people can find helpful pages in unpaid search results.'],
      ['Crawling', 'When a search engine discovers or revisits a page.'],
      ['Indexing', 'When a search engine stores information about a page so it may appear in results.'],
      ['Ranking', 'The order search results appear for a query.'],
      ['Search intent', 'The reason behind a search, such as learning, comparing, buying, or finding a place.']
    ],
    examples: [
      {
        title: 'Bakery website',
        problem: 'A bakery wants people to find “custom birthday cakes in Pune.”',
        walkthrough: 'The SEO learner checks if there is a clear birthday cake page, real photos, pricing guidance, location details, FAQs, and a simple enquiry button.',
        takeaway: 'Good SEO starts by making the best answer for the real searcher.'
      },
      {
        title: 'Coaching institute',
        problem: 'The institute writes blogs but gets no leads.',
        walkthrough: 'They map each blog to a student question and link useful blogs to course enquiry pages.',
        takeaway: 'Traffic is useful when it connects to the learner’s next step.'
      }
    ],
    practice: [
      'Project business: SmileCare Dental Clinic, a local clinic in Pune offering dental checkups, teeth cleaning, teeth whitening, braces, root canal treatment, and emergency dental care.',
      'Write the SEO mission in one sentence: “Help people in Pune find clear, trustworthy dental treatment information and book an appointment with SmileCare.”',
      'List 5 searches patients may type, such as “dentist near me,” “teeth cleaning cost in Pune,” “root canal treatment Pune,” “braces dentist Pune,” and “emergency dentist Pune.”',
      'Mark the intent for each search: local, price research, treatment information, comparison, or urgent booking.',
      'Choose the most important page to improve first: a “Dental Clinic in Pune” service page or a “Book Dental Appointment” page.'
    ],
    mistakes: [
      'Thinking SEO is only keywords.',
      'Trying to rank every page for every topic.',
      'Ignoring the real person behind the search.'
    ],
    quiz: [
      {
        question: 'What is the best beginner-friendly meaning of SEO?',
        options: ['Making helpful pages easier to find in unpaid search.', 'Buying ads for every keyword.', 'Hiding text so Google sees more words.'],
        answer: 0
      },
      {
        question: 'What does search intent mean?',
        options: ['The reason someone searched.', 'The color of a website button.', 'The amount paid for a click.'],
        answer: 0
      },
      {
        question: 'What should an SEO learner focus on first?',
        options: ['Helping users with clear, useful pages.', 'Tricking search engines quickly.', 'Copying competitors word for word.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Keyword research and content planning',
    duration: '60 minutes',
    goal: 'Learn how to find useful search topics and turn them into a clear content plan without getting lost in tools.',
    outcomes: [
      'Group keywords by topic and intent.',
      'Choose keywords that match business goals.',
      'Understand short-tail and long-tail keywords.',
      'Build a simple content map for important pages.'
    ],
    sections: {
      what: [
        'Keyword research means understanding the words people use when they search for your topic, product, service, or problem.',
        'A keyword is not just a word. It is a clue about what someone wants.',
        'A content plan connects search topics to the right page type: homepage, service page, product page, blog, comparison page, or FAQ.'
      ],
      why: [
        'Without keyword research, you may write pages nobody searches for or target searches that do not fit your offer.',
        'Good research helps you avoid duplicate pages that compete with each other.',
        'It helps non-technical teams decide what to write, improve, and measure.'
      ],
      where: [
        'Use Google autocomplete, People Also Ask, competitor pages, customer questions, Search Console, and keyword tools.',
        'Use sales calls, WhatsApp chats, reviews, and support questions to discover real language.',
        'Use a spreadsheet to group searches by theme and intent.'
      ],
      how: [
        'Start with 5 seed topics around your business.',
        'Collect related searches and customer questions.',
        'Group similar searches into clusters.',
        'Assign each cluster to one page, so each page has a clear job.',
        'Choose beginner-friendly wins: specific searches with clear intent.'
      ]
    },
    glossary: [
      ['Keyword', 'A word or phrase people search for.'],
      ['Topic cluster', 'A group of related searches that belong together.'],
      ['Long-tail keyword', 'A longer, more specific search phrase.'],
      ['Search volume', 'An estimate of how often people search a phrase.'],
      ['Content map', 'A plan that matches topics and keywords to pages.']
    ],
    examples: [
      {
        title: 'Yoga studio',
        problem: 'The studio wants more beginners but only targets “yoga.”',
        walkthrough: 'They find specific searches like “beginner yoga classes near me,” “yoga for back pain,” and “morning yoga batch.” Each search gets mapped to a useful page or section.',
        takeaway: 'Specific searches often reveal clearer needs.'
      },
      {
        title: 'Software training institute',
        problem: 'The institute writes random blogs about every tool.',
        walkthrough: 'They group topics into Python course, data analytics course, career questions, fees, syllabus, and placement support.',
        takeaway: 'Clusters make content easier to plan and easier for learners to navigate.'
      }
    ],
    practice: [
      'For SmileCare Dental Clinic, write 12 patient questions, such as “Is teeth cleaning painful?”, “How much does root canal cost?”, and “How long do braces take?”',
      'Group the questions into 4 clusters: dental checkup, teeth cleaning/whitening, braces, and root canal/emergency care.',
      'Choose one main page for each cluster, such as “Teeth Cleaning in Pune” or “Root Canal Treatment in Pune.”',
      'Mark the intent for each cluster: learn, compare cost, choose a clinic, or book quickly.',
      'Create a simple content map showing which keyword cluster belongs to which SmileCare page.'
    ],
    mistakes: [
      'Choosing only high-volume keywords with unclear intent.',
      'Making many pages for almost the same keyword.',
      'Ignoring customer language and only trusting tools.'
    ],
    quiz: [
      {
        question: 'What is keyword research mainly used for?',
        options: ['Understanding what people search and planning useful pages.', 'Adding the same word 100 times.', 'Choosing website colors.'],
        answer: 0
      },
      {
        question: 'Why can long-tail keywords be useful?',
        options: ['They are often more specific and easier to match with a helpful answer.', 'They always have the highest volume.', 'They do not need content.'],
        answer: 0
      },
      {
        question: 'What is a content map?',
        options: ['A plan matching topics and keywords to pages.', 'A website password list.', 'A report of paid ad budgets.'],
        answer: 0
      }
    ]
  },
  {
    title: 'On-page SEO: titles, headings, and helpful content',
    duration: '60 minutes',
    goal: 'Learn how to improve a page so users and search engines can quickly understand its topic, value, and next step.',
    outcomes: [
      'Write clear title tags and meta descriptions.',
      'Use headings to organize a page.',
      'Make content helpful, complete, and easy to scan.',
      'Avoid keyword stuffing and thin content.'
    ],
    sections: {
      what: [
        'On-page SEO means improving the visible and hidden parts of a page: title, description, headings, paragraphs, images, links, and calls to action.',
        'A title tag is often used as the clickable blue headline in search results.',
        'Headings help readers scan the page and help search engines understand the page structure.'
      ],
      why: [
        'A clear page earns more trust because users instantly know they are in the right place.',
        'Better titles and descriptions can improve clicks from search results.',
        'Helpful content reduces confusion and supports leads, sales, bookings, or learning.'
      ],
      where: [
        'Edit title tags and meta descriptions in your CMS or SEO plugin.',
        'Use H1 for the main page topic and H2/H3 for sections.',
        'Use the first screen of the page to confirm the promise made in search results.'
      ],
      how: [
        'Write one clear title that includes the main topic and value.',
        'Write a meta description that tells people what they will get.',
        'Use headings like signboards: clear, short, and helpful.',
        'Answer the main question early, then add details, examples, FAQs, and next steps.',
        'Use keywords naturally, like a helpful teacher, not like a robot.'
      ]
    },
    glossary: [
      ['Title tag', 'The page title search engines may show as the result headline.'],
      ['Meta description', 'A short page summary search engines may use as a snippet.'],
      ['Heading', 'A page section title, such as H1, H2, or H3.'],
      ['Thin content', 'Content that gives too little useful information.'],
      ['Keyword stuffing', 'Repeating keywords unnaturally to manipulate rankings.']
    ],
    examples: [
      {
        title: 'Weak service page',
        problem: 'A page title says “Home” and the first paragraph says only “We provide best services.”',
        walkthrough: 'The title becomes “AC Repair in Jaipur - Same-Day Service.” The page adds service areas, common issues, pricing guidance, reviews, and booking steps.',
        takeaway: 'Specific, helpful pages beat vague pages.'
      },
      {
        title: 'Blog post improvement',
        problem: 'A blog about “SEO tips” has one long block of text.',
        walkthrough: 'It is reorganized with headings, examples, checklist sections, and a short summary.',
        takeaway: 'Structure makes content easier to read and easier to understand.'
      }
    ],
    practice: [
      'Pick SmileCare’s “Teeth Cleaning in Pune” page as the practice page.',
      'Write a title tag: “Teeth Cleaning in Pune | SmileCare Dental Clinic.”',
      'Write a meta description under 160 characters explaining the benefit, location, and appointment option.',
      'Add 5 helpful H2 headings: What is teeth cleaning, benefits, cost, process, after-care, and FAQs.',
      'Write the first paragraph so a nervous patient quickly understands what teeth cleaning is, who needs it, and how to book.'
    ],
    mistakes: [
      'Using the same title on many pages.',
      'Writing for search engines but confusing humans.',
      'Adding keywords where they sound unnatural.'
    ],
    quiz: [
      {
        question: 'What is on-page SEO?',
        options: ['Improving page elements like titles, headings, content, images, and links.', 'Only building backlinks.', 'Only buying ads.'],
        answer: 0
      },
      {
        question: 'What is keyword stuffing?',
        options: ['Repeating keywords unnaturally to manipulate rankings.', 'Using one clear keyword naturally.', 'Writing helpful examples.'],
        answer: 0
      },
      {
        question: 'Why are headings useful?',
        options: ['They organize the page for readers and search engines.', 'They hide content from users.', 'They replace all paragraphs.'],
        answer: 0
      }
    ]
  },
  {
    title: 'On-page SEO: links, images, and trust signals',
    duration: '60 minutes',
    goal: 'Use internal links, image basics, FAQs, reviews, author information, and clear calls to action to make pages more useful.',
    outcomes: [
      'Add internal links that guide users.',
      'Write useful image alt text.',
      'Understand trust signals and E-E-A-T style thinking.',
      'Improve a page without making it cluttered.'
    ],
    sections: {
      what: [
        'Internal links connect pages within your own website.',
        'Image SEO means using relevant images, sensible filenames, alt text, and fast-loading image files.',
        'Trust signals are details that help users believe the page: real photos, experience, reviews, credentials, policies, contact details, and transparent information.'
      ],
      why: [
        'Internal links help users discover related pages and help search engines find important pages.',
        'Alt text helps explain images when they cannot be seen and can support accessibility.',
        'Trust signals matter because users hesitate when a page looks anonymous or unclear.'
      ],
      where: [
        'Add internal links inside paragraphs, related sections, menus, breadcrumbs, and FAQ answers.',
        'Add image alt text in your CMS image settings.',
        'Add trust details on service pages, product pages, author pages, about pages, and contact pages.'
      ],
      how: [
        'Link from helpful blog posts to relevant service or product pages.',
        'Use anchor text that describes the destination, such as “beginner SEO course,” not “click here.”',
        'Write alt text that explains the image when it adds meaning.',
        'Add proof: testimonials, results, photos, author details, process, guarantees, or clear contact options.'
      ]
    },
    glossary: [
      ['Internal link', 'A link from one page on your website to another page on your website.'],
      ['Anchor text', 'The clickable words in a link.'],
      ['Alt text', 'Text that describes an image for accessibility and context.'],
      ['Trust signal', 'A detail that makes users feel the page or business is reliable.'],
      ['Call to action', 'A clear next step, such as Call now, Book demo, or Download guide.']
    ],
    examples: [
      {
        title: 'College course page',
        problem: 'A digital marketing course page has no proof or related links.',
        walkthrough: 'The page adds student testimonials, trainer bio, syllabus link, fee FAQ, placement details, and links to SEO and Google Ads lesson pages.',
        takeaway: 'Trust and navigation help users move from curiosity to action.'
      },
      {
        title: 'Product image',
        problem: 'An ecommerce product image has alt text “image123.”',
        walkthrough: 'It changes to “blue cotton kurta with round neck and three-quarter sleeves.”',
        takeaway: 'Useful alt text describes what matters in the image.'
      }
    ],
    practice: [
      'Choose SmileCare’s “Root Canal Treatment in Pune” page as the main page for this lesson.',
      'Find 3 internal links to add: from the dental checkup page, tooth pain blog, and emergency dentist page.',
      'Write natural anchor text, such as “root canal treatment options” and “book a root canal consultation.”',
      'Write alt text for 5 clinic images, such as dentist checking patient teeth, SmileCare reception, and sterilized dental tools.',
      'Add 3 trust signals to the root canal page: dentist experience, real patient reviews, safety/sterilization process, or clinic address and phone number.'
    ],
    mistakes: [
      'Linking every keyword to the same page.',
      'Writing alt text stuffed with keywords.',
      'Hiding contact details or proof from important pages.'
    ],
    quiz: [
      {
        question: 'What is an internal link?',
        options: ['A link from one page on your site to another page on your site.', 'A paid ad link.', 'A link that only admins can see.'],
        answer: 0
      },
      {
        question: 'What makes good anchor text?',
        options: ['Words that describe the page being linked to.', 'Only “click here” everywhere.', 'A random emoji.'],
        answer: 0
      },
      {
        question: 'Why use trust signals?',
        options: ['To help users feel confident about the page or business.', 'To hide weak content.', 'To replace all SEO work.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Technical SEO for non-technical learners',
    duration: '60 minutes',
    goal: 'Understand technical SEO in plain English so you can spot issues, ask better questions, and work with developers confidently.',
    outcomes: [
      'Explain crawlability, indexability, mobile friendliness, speed, HTTPS, and structured data.',
      'Know which technical issues need urgent attention.',
      'Use simple tools to check page health.',
      'Create a developer-friendly issue note.'
    ],
    sections: {
      what: [
        'Technical SEO is about making sure search engines can access, understand, and show your important pages.',
        'It includes crawling, indexing, site structure, mobile usability, page speed, HTTPS, redirects, canonicals, sitemaps, robots.txt, and structured data.',
        'You do not need to code everything yourself, but you should understand the warning signs.'
      ],
      why: [
        'A beautiful page cannot perform in search if Google cannot access or index it.',
        'Slow, broken, or confusing pages can frustrate users.',
        'Clear technical notes help developers fix issues faster.'
      ],
      where: [
        'Use Search Console Page indexing, URL Inspection, Core Web Vitals, HTTPS, and Sitemaps reports.',
        'Use browser checks on mobile and desktop.',
        'Use page speed tools and structured data testing tools when needed.'
      ],
      how: [
        'Check if the page opens for users and search engines.',
        'Confirm the page is allowed to be indexed.',
        'Check whether important pages are linked in menus, footers, category pages, or related content.',
        'Write issues clearly: affected URL, problem, why it matters, evidence, and expected fix.'
      ]
    },
    glossary: [
      ['Crawlability', 'How easily search engines can discover and access pages.'],
      ['Indexability', 'Whether a page can be included in a search engine index.'],
      ['Canonical', 'A signal that tells search engines which version of similar pages is preferred.'],
      ['Redirect', 'Sending users and search engines from one URL to another.'],
      ['Structured data', 'Extra page information in a format search engines can understand.']
    ],
    examples: [
      {
        title: 'Noindex mistake',
        problem: 'A new service page is live but never appears in search.',
        walkthrough: 'URL Inspection shows a noindex tag. The SEO learner asks the developer to remove noindex from the live service page.',
        takeaway: 'Small technical settings can block big business pages.'
      },
      {
        title: 'Slow mobile page',
        problem: 'A page looks fine on laptop but takes too long on mobile.',
        walkthrough: 'The team compresses images, removes unused scripts, and checks Core Web Vitals.',
        takeaway: 'Technical SEO supports real user experience.'
      }
    ],
    practice: [
      'Use SmileCare’s “Book Appointment” page as the technical SEO practice URL.',
      'Check whether the page opens properly on mobile, whether the form is easy to use, and whether the call button works.',
      'Write 3 developer questions: Can Google index this page? Is the page fast on mobile? Are appointment form errors easy to understand?',
      'Draft one technical issue note: URL, problem, why it matters for patients, and expected fix.',
      'Create a small technical checklist for SmileCare: HTTPS, mobile friendly, fast images, sitemap submitted, important pages indexable, and no broken appointment links.'
    ],
    mistakes: [
      'Treating every warning as equally urgent.',
      'Making developer requests without a specific URL.',
      'Ignoring mobile users.'
    ],
    quiz: [
      {
        question: 'What is technical SEO mainly about?',
        options: ['Helping search engines access, understand, and show important pages.', 'Only writing blogs.', 'Only posting on social media.'],
        answer: 0
      },
      {
        question: 'What does noindex do?',
        options: ['It tells search engines not to index a page.', 'It makes a page load faster automatically.', 'It creates a backlink.'],
        answer: 0
      },
      {
        question: 'What makes a good developer issue note?',
        options: ['URL, problem, why it matters, evidence, and expected fix.', 'Only “SEO is broken.”', 'A list of random keywords.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Off-page SEO and reputation building',
    duration: '60 minutes',
    goal: 'Understand off-page SEO, backlinks, brand mentions, local reputation, and relationship-based promotion without spammy shortcuts.',
    outcomes: [
      'Explain backlinks and why quality matters.',
      'Understand brand mentions, reviews, PR, and local citations.',
      'Create safe promotion ideas for a website.',
      'Avoid paid link schemes and fake reputation tactics.'
    ],
    sections: {
      what: [
        'Off-page SEO includes actions outside your website that can improve reputation and discovery.',
        'Backlinks are links from other websites to your website.',
        'Good off-page SEO usually comes from being useful, trustworthy, newsworthy, local, or relationship-worthy.'
      ],
      why: [
        'Search engines and users use reputation clues to understand whether a site may be trustworthy.',
        'Helpful mentions and links can bring direct referral traffic too.',
        'For local businesses, reviews, maps, directories, and community presence can support discovery.'
      ],
      where: [
        'Look for opportunities in industry websites, partners, local associations, event pages, publications, podcasts, case studies, and community pages.',
        'Use Google Business Profile and reputable local directories for local businesses.',
        'Use reviews and testimonials ethically.'
      ],
      how: [
        'Create link-worthy assets: guides, tools, original photos, research, case studies, templates, or useful local resources.',
        'Build relationships with partners, educators, journalists, communities, and customers.',
        'Ask for links only when there is a real reason and value.',
        'Track links and mentions, but judge quality over quantity.'
      ]
    },
    glossary: [
      ['Backlink', 'A link from another website to your website.'],
      ['Referral traffic', 'Visitors who arrive through links from other websites.'],
      ['Citation', 'An online mention of a business name, address, phone, or website.'],
      ['Digital PR', 'Getting online attention through stories, data, expert comments, or useful resources.'],
      ['Link scheme', 'A manipulative link tactic that violates search engine guidelines.']
    ],
    examples: [
      {
        title: 'Local clinic reputation',
        problem: 'A clinic wants more local trust.',
        walkthrough: 'It improves Google Business Profile details, asks real patients for honest reviews, joins a local health event, and earns a link from the event page.',
        takeaway: 'Real-world reputation can create online signals.'
      },
      {
        title: 'Useful template',
        problem: 'A finance consultant wants links but has nothing worth linking to.',
        walkthrough: 'They publish a free budget calculator and explain it in a simple guide, then share it with community groups and bloggers.',
        takeaway: 'Useful assets earn better links than begging emails.'
      }
    ],
    practice: [
      'List 10 real places where SmileCare could build reputation: local health directories, Pune community websites, school health event pages, dental association pages, and local business listings.',
      'Create one link-worthy asset idea: “Free Dental Checkup Checklist for Families in Pune.”',
      'Check whether SmileCare’s name, address, phone number, and website are consistent across Google Business Profile and local directories.',
      'Draft one ethical outreach message to a local school or community group offering a useful dental awareness session.',
      'Write one review request message that asks real patients for honest feedback without pressuring them.'
    ],
    mistakes: [
      'Buying links that exist only to manipulate rankings.',
      'Posting low-quality comments for links.',
      'Ignoring reviews and brand reputation.'
    ],
    quiz: [
      {
        question: 'What is a backlink?',
        options: ['A link from another website to your website.', 'A page heading.', 'A password reset link.'],
        answer: 0
      },
      {
        question: 'What is safer off-page SEO?',
        options: ['Earning attention with useful resources and real relationships.', 'Buying hundreds of hidden links.', 'Using fake reviews.'],
        answer: 0
      },
      {
        question: 'Why do local citations matter?',
        options: ['They help people and platforms understand business details.', 'They replace the website.', 'They automatically guarantee ranking first.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Black Hat SEO: danger zone',
    duration: '60 minutes',
    goal: 'Learn what black hat SEO is, why it is risky, and how to protect a website from shortcuts that can damage trust and visibility.',
    outcomes: [
      'Recognize common black hat tactics.',
      'Understand search spam policies in simple language.',
      'Identify red flags in SEO offers.',
      'Choose safer alternatives to risky shortcuts.'
    ],
    sections: {
      what: [
        'Black hat SEO means using manipulative tactics to trick search engines instead of helping users.',
        'Examples include keyword stuffing, hidden text, doorway pages, cloaking, link schemes, scraped content, fake reviews, and mass AI pages with no real value.',
        'Some tricks may look like they work for a short time, but they can lead to ranking drops, manual actions, or lost trust.'
      ],
      why: [
        'A business website is an asset. Risky tactics can damage that asset.',
        'Black hat work often hides problems instead of building real value.',
        'Clients and teams need to know red flags before hiring or approving SEO work.'
      ],
      where: [
        'Watch for black hat risks in cheap SEO packages, suspicious backlink offers, copied content, automated page generation, and “guaranteed ranking” promises.',
        'Use Search Console messages to monitor manual actions or security issues.',
        'Review content and link-building work before publishing or approving it.'
      ],
      how: [
        'Ask every SEO tactic: Would this help a real user if search engines did not exist?',
        'Avoid paid links meant to manipulate ranking.',
        'Reject copied or auto-generated pages that add no original value.',
        'Document what was changed on the site so risky work can be reversed.'
      ]
    },
    glossary: [
      ['Black hat SEO', 'SEO tactics that try to manipulate search engines instead of helping users.'],
      ['Cloaking', 'Showing different content to users and search engines to mislead rankings.'],
      ['Doorway page', 'A low-value page made mainly to capture searches and send users elsewhere.'],
      ['Manual action', 'A penalty-like action when a reviewer finds a site violates spam policies.'],
      ['Link scheme', 'A manipulative practice to create links for ranking benefit.']
    ],
    examples: [
      {
        title: 'Guaranteed ranking offer',
        problem: 'An agency promises “1000 backlinks in 7 days and first rank guaranteed.”',
        walkthrough: 'The SEO learner asks where links will appear, whether they are paid, and whether they are useful for real users. The offer fails the trust test.',
        takeaway: 'If the promise sounds magical, check the risk.'
      },
      {
        title: 'Copied city pages',
        problem: 'A business creates 80 city pages with the same text and only city names changed.',
        walkthrough: 'They replace thin doorway-style pages with genuinely useful location pages for cities they actually serve.',
        takeaway: 'Scale without value can become spam.'
      }
    ],
    practice: [
      'Imagine SmileCare receives an SEO offer promising “500 backlinks in 3 days and guaranteed rank 1.” List why this is risky.',
      'Review the SmileCare “Braces in Pune” page and check whether any phrase is repeated unnaturally.',
      'Check whether SmileCare has copied city pages like “Dentist in Pune,” “Dentist in Mumbai,” and “Dentist in Delhi” with only city names changed.',
      'Write a safer alternative: create genuinely useful pages only for locations SmileCare actually serves.',
      'Create a “Do not approve” checklist for SmileCare: fake reviews, hidden text, copied content, bulk paid links, and doorway pages.'
    ],
    mistakes: [
      'Trusting guaranteed ranking promises.',
      'Approving paid links without understanding the risk.',
      'Creating pages for search engines that are useless to people.'
    ],
    quiz: [
      {
        question: 'What is black hat SEO?',
        options: ['Manipulative tactics that try to trick search engines.', 'Writing helpful content for users.', 'Making a website easier to navigate.'],
        answer: 0
      },
      {
        question: 'Which offer is a red flag?',
        options: ['Guaranteed first ranking with thousands of backlinks in days.', 'A content audit with clear recommendations.', 'Fixing broken internal links.'],
        answer: 0
      },
      {
        question: 'What is a safer SEO question to ask?',
        options: ['Would this help a real user if search engines did not exist?', 'Can we hide this from users?', 'Can we copy competitors quickly?'],
        answer: 0
      }
    ]
  },
  {
    title: 'AI SEO and generative search',
    duration: '60 minutes',
    goal: 'Understand AI SEO, AI Overviews, and how to create content that is useful, trustworthy, and easy for both people and AI systems to understand.',
    outcomes: [
      'Explain AI SEO in simple language.',
      'Understand how AI search experiences change user behavior.',
      'Use AI tools safely for research and structure.',
      'Create content with original value, clarity, and trustworthy details.'
    ],
    sections: {
      what: [
        'AI SEO means preparing your content for a search world where users may see AI-generated summaries, answer engines, and richer search experiences.',
        'The basics still matter: helpful content, clear structure, crawlable pages, trustworthy information, and real value.',
        'AI tools can help brainstorm, organize, summarize, and check clarity, but they should not replace expertise or original information.'
      ],
      why: [
        'Searchers may ask longer, conversational questions.',
        'AI features may summarize information, so pages need clear answers, strong examples, and trustworthy details.',
        'Generic AI content can look polished but still be weak if it adds no experience, data, opinion, or practical usefulness.'
      ],
      where: [
        'Use AI tools for outlines, question discovery, content gap checks, plain-English rewrites, and FAQ drafting.',
        'Use your real business knowledge, customer stories, product details, photos, data, and expert review to add originality.',
        'Use Search Console and analytics to understand what users still click and engage with.'
      ],
      how: [
        'Start with the user question and answer it clearly near the top.',
        'Add original experience: examples, notes, steps, comparisons, local details, expert notes, or data.',
        'Use clear sections, summaries, FAQs, and schema when appropriate.',
        'Review AI-assisted content for accuracy, usefulness, tone, and policy risk before publishing.'
      ]
    },
    glossary: [
      ['AI SEO', 'Optimizing content for search experiences that use AI summaries or conversational answers.'],
      ['AI Overview', 'An AI-generated summary that can appear in Google Search for some queries.'],
      ['Entity', 'A clearly identifiable thing, such as a person, place, brand, product, or topic.'],
      ['Original value', 'Information, experience, examples, or insight that is not just copied or generic.'],
      ['Scaled content abuse', 'Producing many low-value pages mainly to manipulate search rankings.']
    ],
    examples: [
      {
        title: 'Generic AI blog',
        problem: 'A blog post about “best running shoes” reads like every other article.',
        walkthrough: 'The team adds real shoe testing notes, photos, foot-type guidance, comparison table, and expert review.',
        takeaway: 'AI can assist, but original experience makes content stronger.'
      },
      {
        title: 'FAQ for AI-style questions',
        problem: 'Users ask “Which digital marketing course is best after graduation?”',
        walkthrough: 'The institute answers with clear factors: goal, time, budget, placement support, course modules, and who each option suits.',
        takeaway: 'Conversational questions need direct, useful answers.'
      }
    ],
    practice: [
      'Choose SmileCare’s “Teeth Whitening in Pune” page for AI SEO practice.',
      'Add a short direct answer near the top: what teeth whitening is, who it suits, how long it takes, and when to consult the dentist.',
      'Add 3 original SmileCare details: dentist advice, real clinic process, safety steps, before/after care guidance, or common patient concerns.',
      'Use an AI tool to list 10 patient questions about teeth whitening, then rewrite the answers in a dentist-friendly, simple tone.',
      'Fact-check every claim and remove anything that sounds like a guaranteed medical result.'
    ],
    mistakes: [
      'Publishing AI text without fact-checking.',
      'Creating many generic pages with no original value.',
      'Thinking AI SEO replaces technical SEO, on-page SEO, or trust.'
    ],
    quiz: [
      {
        question: 'What is AI SEO mainly about?',
        options: ['Making content useful and clear for AI-influenced search experiences and people.', 'Letting AI publish unlimited pages without review.', 'Hiding content from users.'],
        answer: 0
      },
      {
        question: 'What should AI tools be used for safely?',
        options: ['Research support, outlines, clarity checks, and drafts that humans review.', 'Publishing unverified claims automatically.', 'Copying competitors.'],
        answer: 0
      },
      {
        question: 'What makes AI-assisted content stronger?',
        options: ['Original examples, expertise, data, and helpful details.', 'More generic paragraphs.', 'No human review.'],
        answer: 0
      }
    ]
  },
  {
    title: 'Local SEO and service business visibility',
    duration: '60 minutes',
    goal: 'Help local businesses become easier to find and trust in local search, maps, and nearby-service decisions.',
    outcomes: [
      'Understand local search intent.',
      'Improve a Google Business Profile checklist.',
      'Use reviews, service pages, and local content ethically.',
      'Avoid fake local SEO tactics.'
    ],
    sections: {
      what: [
        'Local SEO helps businesses appear for searches with local intent, such as “near me,” city names, service areas, and map results.',
        'It includes website pages, Google Business Profile, reviews, local citations, photos, services, hours, and location signals.',
        'Local SEO is especially important for clinics, institutes, restaurants, stores, salons, agencies, repair services, and consultants.'
      ],
      why: [
        'Local searchers often want to call, visit, book, or compare quickly.',
        'Accurate information prevents lost leads caused by wrong hours, phone numbers, addresses, or services.',
        'Reviews and photos help people trust a local business before contacting it.'
      ],
      where: [
        'Use Google Business Profile for business details, categories, services, photos, posts, and reviews.',
        'Use location or service-area pages on the website.',
        'Use trusted directories where real customers may look.'
      ],
      how: [
        'Make business name, address, phone, hours, and website accurate everywhere.',
        'Choose the most accurate business categories.',
        'Add service details and real photos.',
        'Ask real customers for honest reviews and reply professionally.',
        'Create useful local pages only for places you genuinely serve.'
      ]
    },
    glossary: [
      ['Local intent', 'A search where the user wants something nearby or in a specific area.'],
      ['Google Business Profile', 'A free Google profile for eligible local businesses.'],
      ['NAP', 'Name, address, and phone number.'],
      ['Service area', 'The locations where a business serves customers.'],
      ['Review response', 'A business reply to a customer review.']
    ],
    examples: [
      {
        title: 'Salon profile cleanup',
        problem: 'A salon has wrong hours and no service details online.',
        walkthrough: 'They update hours, add services, upload real photos, and reply to reviews.',
        takeaway: 'Accurate basics can directly improve local customer trust.'
      },
      {
        title: 'Service-area pages',
        problem: 'A pest control company wants visibility in nearby cities.',
        walkthrough: 'They create useful pages for real service areas with local proof, FAQs, pricing guidance, and contact options.',
        takeaway: 'Local pages should be genuinely useful, not copied doorway pages.'
      }
    ],
    practice: [
      'Audit SmileCare’s Google Business Profile details: clinic name, category, phone number, website, hours, address, services, and appointment link.',
      'Write 5 honest review request messages for patients after a successful visit.',
      'List the real areas SmileCare serves, such as nearby Pune neighborhoods, without adding fake locations.',
      'Draft one local FAQ: “How do I choose a good dentist near me in Pune?”',
      'Plan 5 Google Business Profile photos: clinic front, reception, treatment room, dentist team, and sterilization area.'
    ],
    mistakes: [
      'Using fake addresses.',
      'Copying the same city page many times.',
      'Ignoring negative reviews instead of replying professionally.'
    ],
    quiz: [
      {
        question: 'What is local SEO for?',
        options: ['Helping a business appear and build trust for nearby or area-based searches.', 'Only ranking national blogs.', 'Replacing customer service.'],
        answer: 0
      },
      {
        question: 'What does NAP mean?',
        options: ['Name, address, and phone number.', 'New article plan.', 'No ads policy.'],
        answer: 0
      },
      {
        question: 'What is a safe review practice?',
        options: ['Ask real customers for honest reviews.', 'Create fake reviews.', 'Pay only for five-star reviews.'],
        answer: 0
      }
    ]
  },
  {
    title: 'SEO reporting and SEO workflow',
    duration: '60 minutes',
    goal: 'Build a simple weekly and monthly SEO workflow so learners can improve pages calmly and measure real progress.',
    outcomes: [
      'Choose useful SEO KPIs.',
      'Create a weekly SEO checklist.',
      'Understand rankings, clicks, impressions, conversions, and learning hours.',
      'Turn reports into actions instead of panic.'
    ],
    sections: {
      what: [
        'SEO reporting means turning search data into decisions.',
        'A good report shows what changed, why it may have changed, and what action to take next.',
        'An SEO workflow is a repeatable routine: check, learn, improve, publish, measure, and repeat.'
      ],
      why: [
        'SEO takes time, so random daily changes can create confusion.',
        'Reports help teams focus on pages that matter to business goals.',
        'A calm process helps beginners avoid panic when numbers move up or down.'
      ],
      where: [
        'Use Search Console for queries, pages, clicks, impressions, indexing, and Core Web Vitals clues.',
        'Use analytics or CRM data for leads, sales, forms, calls, and engagement.',
        'Use a simple tracker for actions completed and results observed.'
      ],
      how: [
        'Weekly: check top pages, falling pages, new queries, indexing issues, and completed tasks.',
        'Monthly: compare longer periods, summarize wins, explain problems, and choose next priorities.',
        'Report business outcomes when possible: leads, calls, demo requests, sales, or signups.',
        'End every report with 3 next actions.'
      ]
    },
    glossary: [
      ['KPI', 'A key performance indicator used to measure progress.'],
      ['Impression', 'When a search result is shown to a user.'],
      ['Click-through rate', 'The percentage of impressions that become clicks.'],
      ['Conversion', 'A valuable action, such as a lead, sale, call, booking, or signup.'],
      ['SEO backlog', 'A prioritized list of SEO tasks to work on.']
    ],
    examples: [
      {
        title: 'Traffic dropped',
        problem: 'A page loses clicks for one week.',
        walkthrough: 'The SEO learner compares 28 days, checks queries, looks for indexing or page changes, and avoids panic from one-day movement.',
        takeaway: 'Good reporting separates noise from real issues.'
      },
      {
        title: 'Impressions up, clicks flat',
        problem: 'A page appears more often but clicks do not grow.',
        walkthrough: 'The title and meta description are improved to better match the searcher’s need.',
        takeaway: 'Different metrics point to different actions.'
      }
    ],
    practice: [
      'Create a weekly SEO checklist for SmileCare: check Search Console, review top pages, check appointment clicks, review Google Business Profile, respond to reviews, update one page, and record changes.',
      'Choose 5 KPIs: organic clicks, impressions, appointment form submissions, phone clicks, and Google Business Profile actions.',
      'Pick one page to improve from the report, such as “Root Canal Treatment in Pune” if impressions are high but clicks are low.',
      'Write 3 next actions after reviewing data: improve title/meta, add FAQs, add internal links, update trust signals, or fix a technical issue.',
      'Create a monthly summary format for SmileCare: wins, problems, completed work, next priorities, and business impact.'
    ],
    mistakes: [
      'Reporting only rankings and ignoring leads or useful actions.',
      'Changing everything at once.',
      'Not recording what was changed and when.'
    ],
    quiz: [
      {
        question: 'What should a useful SEO report include?',
        options: ['What changed, possible reasons, and next actions.', 'Only a evidence of one ranking.', 'Only competitor gossip.'],
        answer: 0
      },
      {
        question: 'What is a conversion?',
        options: ['A valuable user action like a lead, call, sale, booking, or signup.', 'A website color.', 'A hidden keyword.'],
        answer: 0
      },
      {
        question: 'What should a beginner do when one day of traffic drops?',
        options: ['Compare longer periods and investigate calmly.', 'Delete the whole website.', 'Stuff more keywords immediately.'],
        answer: 0
      }
    ]
  }
];

const seoCourseLessonEnhancements = [
  {
    deepDive: [
      'SEO has four simple stages: people search, Google finds pages, Google understands pages, and Google chooses which pages look useful.',
      'A good SEO page usually answers one main need clearly, supports the answer with proof, and gives the visitor a clear next step.',
      'Do not judge SEO only by ranking position. Also check whether the page brings the right visitors, enquiries, sales, calls, or signups.',
      'For a new website, start with the most important business pages before writing many blogs.',
      'A simple SEO audit can begin with five questions: Can Google find the page? Can users understand it? Is it useful? Is it trusted? Does it have a next step?'
    ],
    quiz: [
      {question: 'What is SEO mainly trying to improve?', options: ['How easily people find helpful pages in unpaid search.', 'How many colors a website uses.', 'How many passwords a website has.'], answer: 0},
      {question: 'Which option is an unpaid search result?', options: ['An organic result on Google.', 'A paid search ad.', 'A social media boost.'], answer: 0},
      {question: 'What does crawling mean?', options: ['Google discovers or revisits a page.', 'A user buys a product.', 'A designer changes a logo.'], answer: 0},
      {question: 'What does indexing mean?', options: ['Google stores information about a page so it may appear in search.', 'A person writes a review.', 'A website changes its font.'], answer: 0},
      {question: 'What is search intent?', options: ['The reason behind a search.', 'The page loading speed.', 'The size of an image.'], answer: 0},
      {question: 'A bakery wants people to find “custom birthday cakes in Pune.” What should the bakery create first?', options: ['A useful birthday cake page with details, photos, location, and enquiry option.', 'A page with only the word cake repeated.', 'A hidden page that users cannot read.'], answer: 0},
      {question: 'What should a beginner improve first?', options: ['Important pages that real customers need.', 'Random pages with no business value.', 'Only the footer links.'], answer: 0},
      {question: 'Which metric can show SEO visibility?', options: ['Impressions in search results.', 'Laptop battery percentage.', 'Number of admin users.'], answer: 0},
      {question: 'What is a good SEO mindset?', options: ['Help users first and make pages clear.', 'Trick search engines first.', 'Copy every competitor exactly.'], answer: 0},
      {question: 'What should every important page have?', options: ['A clear topic, useful answer, proof, and next step.', 'Only a logo.', 'Only a contact number with no explanation.'], answer: 0}
    ]
  },
  {
    deepDive: [
      'Keyword research starts with people, not tools. Listen to customer questions, sales calls, reviews, and support chats.',
      'Group similar searches together. For example, “SEO course fees,” “SEO course price,” and “SEO training cost” may belong to one fees section or page.',
      'Match keyword intent to page type. Learning searches often need blogs or guides. Buying searches often need service, product, course, or comparison pages.',
      'A keyword with low search volume can still be valuable if it brings serious customers.',
      'Avoid creating five pages for the same idea. One strong page is usually better than many weak duplicate pages.'
    ],
    quiz: [
      {question: 'What is a keyword?', options: ['A word or phrase people search for.', 'A website password.', 'A page color.'], answer: 0},
      {question: 'Why do we group keywords?', options: ['To plan clear pages around related searches.', 'To hide keywords from users.', 'To remove all headings.'], answer: 0},
      {question: 'What is a long-tail keyword?', options: ['A longer and more specific search phrase.', 'A keyword written in capital letters.', 'A paid ad headline.'], answer: 0},
      {question: 'Which search has clearer intent?', options: ['“beginner yoga classes near me”', '“yoga”', '“class”'], answer: 0},
      {question: 'What is a content map?', options: ['A plan that connects topics and keywords to pages.', 'A map to the office.', 'A list of passwords.'], answer: 0},
      {question: 'Where can keyword ideas come from?', options: ['Customer questions, Google suggestions, Search Console, and competitors.', 'Only website colors.', 'Only the company logo.'], answer: 0},
      {question: 'What should you do before writing a new page?', options: ['Understand who is searching and what they need.', 'Repeat a word many times.', 'Delete old useful pages.'], answer: 0},
      {question: 'Which page fits a buying search best?', options: ['A clear service, product, or course page.', 'A random team birthday post.', 'A hidden test page.'], answer: 0},
      {question: 'What is keyword difficulty in simple words?', options: ['How hard it may be to compete for a keyword.', 'How hard it is to type a word.', 'How long a website password is.'], answer: 0},
      {question: 'What is the safest keyword choice for beginners?', options: ['Specific searches that match the business and user need.', 'Only the biggest keyword in the industry.', 'Keywords unrelated to the website.'], answer: 0}
    ]
  },
  {
    deepDive: [
      'The title tag should tell searchers what the page is about and why it is useful.',
      'The meta description does not guarantee ranking, but it can help people decide whether to click.',
      'Use one clear H1 for the main page topic. Use H2 and H3 headings to divide sections like benefits, pricing, FAQs, process, and examples.',
      'Helpful content should answer the main question early, then support it with details, proof, examples, and next steps.',
      'Keyword use should sound natural. If a sentence sounds strange to a human, rewrite it.'
    ],
    quiz: [
      {question: 'What is on-page SEO?', options: ['Improving things on a page, such as title, headings, content, images, and links.', 'Only buying backlinks.', 'Only changing server settings.'], answer: 0},
      {question: 'What is a title tag?', options: ['The page title search engines may show in results.', 'A website invoice.', 'An image file size.'], answer: 0},
      {question: 'What is a meta description?', options: ['A short summary of a page.', 'A private password.', 'A website backup.'], answer: 0},
      {question: 'A page title says “Home,” but the page is about AC repair in Jaipur. What is a better title?', options: ['AC Repair in Jaipur - Same-Day Service.', 'Home Home Home.', 'Best Best Best.'], answer: 0},
      {question: 'Why are headings helpful?', options: ['They organize the page for readers and search engines.', 'They hide the page.', 'They replace all content.'], answer: 0},
      {question: 'What is thin content?', options: ['Content with too little useful information.', 'Content with many images.', 'Content written in paragraphs.'], answer: 0},
      {question: 'What is keyword stuffing?', options: ['Repeating keywords unnaturally.', 'Using a keyword naturally once or twice.', 'Writing a useful answer.'], answer: 0},
      {question: 'Where should the main page answer appear?', options: ['Near the top, so users quickly know they are in the right place.', 'Only at the very bottom.', 'Only inside hidden text.'], answer: 0},
      {question: 'What should a service page include?', options: ['Clear service details, proof, FAQs, location if needed, and contact option.', 'Only one vague sentence.', 'Only copied competitor text.'], answer: 0},
      {question: 'What is a good content habit?', options: ['Write for people first, then make it easy for search engines to understand.', 'Write only for bots.', 'Avoid answering the main question.'], answer: 0}
    ]
  },
  {
    deepDive: [
      'Internal links act like helpful signboards. They guide users to related pages and help search engines discover important pages.',
      'Anchor text should explain the destination. “View our SEO course syllabus” is clearer than “click here.”',
      'Alt text should describe useful image meaning. Decorative images do not need keyword-heavy descriptions.',
      'Trust signals reduce doubt. Add real photos, reviews, author details, policies, case studies, contact details, and clear business information.',
      'A call to action should match the page intent. A blog may invite reading another guide; a service page may invite a call or form enquiry.'
    ],
    quiz: [
      {question: 'What is an internal link?', options: ['A link from one page on your site to another page on your site.', 'A paid ad.', 'A social media password.'], answer: 0},
      {question: 'What is anchor text?', options: ['The clickable words in a link.', 'The color of a button.', 'The size of a photo.'], answer: 0},
      {question: 'Which anchor text is clearer?', options: ['SEO course syllabus.', 'Click here.', 'This one.'], answer: 0},
      {question: 'What is alt text?', options: ['Text that describes an image when needed.', 'A secret ranking code.', 'A payment method.'], answer: 0},
      {question: 'Why are trust signals useful?', options: ['They help visitors feel the page or business is reliable.', 'They hide weak content.', 'They replace all pages.'], answer: 0},
      {question: 'Which is a trust signal?', options: ['Real reviews and clear contact details.', 'Fake reviews.', 'Hidden business name.'], answer: 0},
      {question: 'What is a call to action?', options: ['A clear next step like Book demo or Call now.', 'A page loading error.', 'A keyword tool.'], answer: 0},
      {question: 'What should image alt text avoid?', options: ['Unnatural keyword stuffing.', 'Clear description.', 'Accessibility.'], answer: 0},
      {question: 'Where can internal links be added?', options: ['Menus, paragraphs, related sections, FAQs, and footers.', 'Only in hidden text.', 'Only in passwords.'], answer: 0},
      {question: 'What is a good page experience for users?', options: ['Clear information, proof, links, and next steps.', 'Confusing text and no contact option.', 'Only popups.'], answer: 0}
    ]
  },
  {
    deepDive: [
      'Technical SEO checks whether important pages can be opened, crawled, indexed, and understood.',
      'Robots.txt can guide crawling, but it should not be used casually to hide important pages from search.',
      'A sitemap helps search engines discover important URLs, but it does not force ranking.',
      'Core Web Vitals are page experience signals connected to loading, interaction, and visual stability.',
      'Structured data can help search engines understand page details like products, FAQs, reviews, articles, events, and organization information.'
    ],
    quiz: [
      {question: 'What is technical SEO?', options: ['Making sure search engines can access, understand, and show important pages.', 'Only writing social posts.', 'Only designing a logo.'], answer: 0},
      {question: 'What does crawlability mean?', options: ['How easily search engines can discover and access pages.', 'How fast a user types.', 'How many colors a page has.'], answer: 0},
      {question: 'What does indexability mean?', options: ['Whether a page can be included in search results.', 'Whether a page has a phone number.', 'Whether an image is blue.'], answer: 0},
      {question: 'What does noindex tell search engines?', options: ['Do not index this page.', 'Rank this page first.', 'Make this page faster.'], answer: 0},
      {question: 'What is a sitemap?', options: ['A file that lists important website URLs.', 'A list of employee names.', 'A payment receipt.'], answer: 0},
      {question: 'What is HTTPS useful for?', options: ['A more secure connection for users.', 'Writing longer titles.', 'Buying backlinks.'], answer: 0},
      {question: 'What is structured data?', options: ['Extra page information in a format search engines can understand.', 'A private chat message.', 'A design moodboard.'], answer: 0},
      {question: 'What should you include in a developer SEO issue note?', options: ['URL, problem, why it matters, and expected fix.', 'Only “fix SEO.”', 'Only a keyword list.'], answer: 0},
      {question: 'What should you check on mobile?', options: ['Whether the page is easy to use and loads well.', 'Only the desktop menu.', 'Only the admin panel.'], answer: 0},
      {question: 'Which technical issue is serious?', options: ['An important service page accidentally blocked from indexing.', 'A paragraph has two sentences.', 'The page has a contact button.'], answer: 0}
    ]
  },
  {
    deepDive: [
      'Off-page SEO is reputation building. It includes links, mentions, reviews, PR, citations, partnerships, and community visibility.',
      'A backlink is more valuable when it comes from a real, relevant, trusted page that users may actually visit.',
      'Local citations should keep business name, address, phone, and website consistent.',
      'Digital PR works best when you have something useful to share: data, expert tips, tools, guides, stories, or community work.',
      'Do not chase link count blindly. A few relevant links can be better than many low-quality links.'
    ],
    quiz: [
      {question: 'What is off-page SEO?', options: ['SEO work outside your website that builds reputation and discovery.', 'Only editing page headings.', 'Only changing image size.'], answer: 0},
      {question: 'What is a backlink?', options: ['A link from another website to your website.', 'A heading on your own page.', 'A website password.'], answer: 0},
      {question: 'What kind of backlink is usually better?', options: ['A relevant link from a real and trusted website.', 'A hidden paid link from a spam site.', 'A random link from an unrelated page.'], answer: 0},
      {question: 'What is referral traffic?', options: ['Visitors who come through links from other websites.', 'Visitors who type a password.', 'Visitors who never open the site.'], answer: 0},
      {question: 'What is a local citation?', options: ['An online mention of business details like name, address, and phone.', 'A blog heading.', 'A test score.'], answer: 0},
      {question: 'Which off-page activity is safe?', options: ['Earning mentions through useful resources and real relationships.', 'Buying fake links in bulk.', 'Creating fake reviews.'], answer: 0},
      {question: 'Why do reviews matter?', options: ['They can help users trust and choose a business.', 'They replace the website.', 'They guarantee first ranking.'], answer: 0},
      {question: 'What should outreach offer?', options: ['A real reason or value for the other person.', 'Only “give me link.”', 'A copied article.'], answer: 0},
      {question: 'What should beginners avoid?', options: ['Spammy link schemes.', 'Useful partnerships.', 'Real customer reviews.'], answer: 0},
      {question: 'What is digital PR?', options: ['Getting online attention through useful stories, data, or expert input.', 'Changing a password.', 'Deleting all content.'], answer: 0}
    ]
  },
  {
    deepDive: [
      'Black hat SEO means manipulating search engines instead of helping users. It can damage traffic, trust, and business reputation.',
      'Common red flags include guaranteed rankings, bulk backlinks, hidden text, copied pages, fake reviews, and pages made only for search engines.',
      'A doorway page is a low-value page made to catch searches and push users somewhere else.',
      'A manual action can happen when a site violates spam policies and a reviewer takes action.',
      'The safe alternative is simple: create useful pages, earn real links, be transparent, and document SEO work.'
    ],
    quiz: [
      {question: 'What is black hat SEO?', options: ['Risky tactics that try to manipulate search engines.', 'Writing useful content.', 'Making pages easier to read.'], answer: 0},
      {question: 'An agency says, “We will create 1000 backlinks in 7 days and guarantee rank 1.” What should you do?', options: ['Treat it as a red flag and ask about risk and quality.', 'Approve it immediately.', 'Give them all website passwords.'], answer: 0},
      {question: 'What is keyword stuffing?', options: ['Repeating keywords unnaturally.', 'Writing a helpful heading.', 'Adding a clear FAQ.'], answer: 0},
      {question: 'What is cloaking?', options: ['Showing different content to users and search engines to mislead rankings.', 'Adding clear contact details.', 'Improving page speed.'], answer: 0},
      {question: 'What is a doorway page?', options: ['A low-value page made mainly to capture searches and send users elsewhere.', 'A useful service page.', 'A privacy policy.'], answer: 0},
      {question: 'What is a link scheme?', options: ['A manipulative practice to create ranking links.', 'A natural link from a partner page.', 'An internal menu link.'], answer: 0},
      {question: 'What can black hat SEO cause?', options: ['Ranking drops, manual actions, and loss of trust.', 'Guaranteed long-term success.', 'Automatic customer support.'], answer: 0},
      {question: 'Which is a safer choice?', options: ['Helpful content and real reputation building.', 'Fake reviews.', 'Copied pages.'], answer: 0},
      {question: 'What should you ask before using an SEO tactic?', options: ['Does this help real users?', 'Can this be hidden?', 'Can we trick Google faster?'], answer: 0},
      {question: 'Why document SEO changes?', options: ['So risky or harmful changes can be reviewed and reversed.', 'To hide work from the team.', 'To avoid learning.'], answer: 0}
    ]
  },
  {
    deepDive: [
      'AI SEO does not replace normal SEO. It adds a new layer where content should be clear enough for people, search engines, and AI summaries to understand.',
      'AI tools are useful for brainstorming questions, outlines, summaries, tables, and plain-English rewrites.',
      'Human review is still required because AI can make mistakes, invent facts, or sound generic.',
      'Original value can come from real experience, customer examples, photos, product details, expert notes, comparisons, data, and clear opinions.',
      'Avoid publishing many AI-made pages that say the same generic thing. That creates low-value content risk.'
    ],
    quiz: [
      {question: 'What is AI SEO?', options: ['Preparing useful content for AI-influenced search and real users.', 'Letting AI publish everything without review.', 'Hiding content from visitors.'], answer: 0},
      {question: 'What should AI tools help with?', options: ['Ideas, outlines, clarity, summaries, and drafts that humans review.', 'Fake facts.', 'Copying competitors exactly.'], answer: 0},
      {question: 'Why is human review important for AI content?', options: ['AI can make mistakes or sound generic.', 'Human review is never needed.', 'AI always knows your business perfectly.'], answer: 0},
      {question: 'What is original value?', options: ['Useful details, examples, data, or experience that are not generic.', 'Copied text.', 'More repeated keywords.'], answer: 0},
      {question: 'What is an AI Overview?', options: ['An AI-generated summary that can appear in Google Search for some queries.', 'A website password.', 'A paid ad budget.'], answer: 0},
      {question: 'How should a page answer an important question?', options: ['Clearly and early, then with supporting detail.', 'Only after 5 unrelated paragraphs.', 'Only in hidden text.'], answer: 0},
      {question: 'What should you avoid with AI content?', options: ['Publishing many low-value generic pages.', 'Checking facts.', 'Adding expert examples.'], answer: 0},
      {question: 'Which content is stronger?', options: ['Content with real examples, expert review, and clear structure.', 'Generic AI text with no facts checked.', 'Copied paragraphs.'], answer: 0},
      {question: 'Does AI SEO replace technical SEO?', options: ['No, technical SEO still matters.', 'Yes, always.', 'Only for local businesses.'], answer: 0},
      {question: 'What is a good use of AI for a beginner?', options: ['Ask for user questions, then answer them with real business knowledge.', 'Publish every answer instantly.', 'Create fake reviews.'], answer: 0}
    ]
  },
  {
    deepDive: [
      'Local SEO is for searches where location matters. The user may want to visit, call, book, or compare nearby providers.',
      'Google Business Profile details should be accurate: name, category, phone, address or service area, hours, services, website, and photos.',
      'Reviews should be real and honest. Replying professionally shows future customers that the business cares.',
      'Local website pages should include real service details, area proof, FAQs, contact options, and helpful information.',
      'Do not create fake addresses or copied city pages. Local SEO should reflect real service areas.'
    ],
    quiz: [
      {question: 'What is local SEO?', options: ['Helping a business appear for nearby or area-based searches.', 'Only writing national news.', 'Only changing a logo.'], answer: 0},
      {question: 'What does NAP mean?', options: ['Name, address, and phone number.', 'New article plan.', 'No ads policy.'], answer: 0},
      {question: 'What is Google Business Profile?', options: ['A free Google profile for eligible local businesses.', 'A private password manager.', 'A design template.'], answer: 0},
      {question: 'Which information should be accurate online?', options: ['Business name, phone, hours, address or service area, and website.', 'Only the logo size.', 'Only old offers.'], answer: 0},
      {question: 'What is a safe review practice?', options: ['Ask real customers for honest reviews.', 'Create fake reviews.', 'Pay only for five-star reviews.'], answer: 0},
      {question: 'What is local intent?', options: ['A search where the user wants something nearby or in a specific area.', 'A search with no purpose.', 'A website setting.'], answer: 0},
      {question: 'What should a local service page include?', options: ['Real service details, location information, FAQs, proof, and contact options.', 'Copied city names only.', 'Hidden text.'], answer: 0},
      {question: 'What should a business do with negative reviews?', options: ['Reply professionally and try to solve the issue.', 'Delete the website.', 'Post fake positive reviews.'], answer: 0},
      {question: 'What is a service area?', options: ['The locations where a business serves customers.', 'A private admin page.', 'A keyword report only.'], answer: 0},
      {question: 'What should local SEO avoid?', options: ['Fake addresses and copied city pages.', 'Accurate hours.', 'Real photos.'], answer: 0}
    ]
  },
  {
    deepDive: [
      'SEO reporting should help decision-making. A report is weak if it only shows numbers and gives no action.',
      'Track visibility metrics like impressions and clicks, quality metrics like CTR and average position, and business metrics like leads, sales, bookings, calls, or signups.',
      'Use longer comparisons like 28 days or month over month instead of reacting to one bad day.',
      'Keep an SEO backlog with tasks, priority, owner, date completed, and expected result.',
      'A good monthly summary can include wins, losses, reasons, completed work, next priorities, and risks.'
    ],
    quiz: [
      {question: 'What is an SEO report for?', options: ['Turning search data into clear decisions and next actions.', 'Showing numbers with no meaning.', 'Replacing the website.'], answer: 0},
      {question: 'What is a KPI?', options: ['A key performance indicator used to measure progress.', 'A website color code.', 'A password type.'], answer: 0},
      {question: 'What is an impression?', options: ['When a search result is shown to a user.', 'When a user changes a password.', 'When a page is deleted.'], answer: 0},
      {question: 'What is CTR?', options: ['The percentage of impressions that become clicks.', 'The number of images on a page.', 'A hosting plan.'], answer: 0},
      {question: 'What is a conversion?', options: ['A valuable action like a lead, sale, call, booking, or signup.', 'A hidden keyword.', 'A website font.'], answer: 0},
      {question: 'If one day of clicks drops, what should a beginner do first?', options: ['Compare a longer period and investigate calmly.', 'Delete the page immediately.', 'Stuff more keywords everywhere.'], answer: 0},
      {question: 'What should every useful report end with?', options: ['Clear next actions.', 'Only notes.', 'Only jokes.'], answer: 0},
      {question: 'What is an SEO backlog?', options: ['A prioritized list of SEO tasks.', 'A list of passwords.', 'A list of office chairs.'], answer: 0},
      {question: 'Which metric is closest to business value?', options: ['Leads, calls, bookings, sales, or signups.', 'Only font size.', 'Only logo width.'], answer: 0},
      {question: 'Why record SEO changes?', options: ['So you can connect actions with results later.', 'So nobody knows what happened.', 'So reports become confusing.'], answer: 0}
    ]
  }
];

seoCourseLessonEnhancements.forEach((enhancement, index) => {
  seoCourseLessons[index].deepDive = enhancement.deepDive;
  seoCourseLessons[index].quiz = enhancement.quiz;
});

const seoCourseVisuals = lessonVisuals.slice(0, seoCourseLessons.length).map((visual, index) => ({
  ...visual,
  title: [
    'Training view: SEO learner map',
    'Worksheet: keyword and intent planner',
    'Page markup: titles and headings',
    'Checklist: links, images, and trust',
    'Technical SEO health panel',
    'Off-page reputation map',
    'Danger board: black hat red flags',
    'AI SEO content clarity board',
    'Reporting dashboard: next actions'
  ][index],
  caption: [
    'SEO becomes easier when learners see crawling, indexing, ranking, and intent as one journey.',
    'Group keywords by real user need before writing pages.',
    'A page becomes stronger when its title, headings, and content all support one useful answer.',
    'Links, image text, proof, and calls to action make the page easier to trust and use.',
    'Non-technical users can still spot crawl, index, mobile, speed, and structured data issues.',
    'Off-page SEO is reputation building, not link begging.',
    'Black hat tactics look tempting, but they put the website asset at risk.',
    'AI SEO rewards clear answers, original value, expert review, and helpful structure.',
    'An SEO workflow turns reports into calm weekly action.'
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
  },
  {
    id: 'seo-course',
    title: 'SEO Course',
    subtitle: 'Learn on-page, off-page, technical, black-hat safety, local, reporting, and AI SEO in easy English.',
    lessons: seoCourseLessons,
    visuals: seoCourseVisuals
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
let authMode = 'student';

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
      accountStatus: 'active',
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
  signupRequests: [],
  notificationReads: {},
  currentSession: null
};

function normalizeUsers(users) {
  return (users || seedState.users).map((user) => {
    if (user.role !== 'student') return user;
    return {...user, accountStatus: user.accountStatus || 'active'};
  });
}

function studentAccountStatus(student) {
  return student.accountStatus === 'inactive' ? 'inactive' : 'active';
}

function mergeState(saved) {
  saved = saved || {};
  return {
    ...structuredClone(seedState),
    ...(saved || {}),
    users: normalizeUsers(saved.users || seedState.users),
    assignments: saved.assignments || seedState.assignments,
    progress: saved.progress || {},
    attempts: saved.attempts || [],
    lessonTime: saved.lessonTime || {},
    lessonNotes: saved.lessonNotes || {},
    unlockRequests: saved.unlockRequests || [],
    signupRequests: saved.signupRequests || [],
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
  const user = state.users.find((item) => item.id === userId) || null;
  if (user?.role === 'student' && studentAccountStatus(user) === 'inactive') {
    clearSession();
    return null;
  }
  return user;
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
  const src = item.id === 'google-search-ads' ? '/google-ads-logo.svg' : item.id === 'seo-course' ? '/seo-logo.svg' : '/search-console-logo.svg';
  return `<div class="course-icon"><img src="${src}" alt="${escapeHtml(item.title)} logo" /></div>`;
}

function courseSourceLinks(targetCourse) {
  if (targetCourse.id === 'seo-course') {
    return [
      ['Google Search Central', 'SEO Starter Guide', 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide'],
      ['Google Search Central', 'Creating helpful, reliable, people-first content', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content'],
      ['Google Search Central', 'Spam policies for Google web search', 'https://developers.google.com/search/docs/essentials/spam-policies'],
      ['Google Search Central', 'Understanding page experience', 'https://developers.google.com/search/docs/appearance/page-experience'],
      ['Google Search Central', 'Intro to structured data', 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data'],
      ['Google Search Central', 'AI features and your website', 'https://developers.google.com/search/docs/appearance/ai-features'],
      ['Google Search Central', 'Optimizing for generative AI search', 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide']
    ];
  }
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
  const pendingSignupCount = (state.signupRequests || []).filter((request) => request.status === 'pending').length;
  renderShell(null, `
    <section class="auth-page">
      <div class="auth-visual">
        <a class="auth-logo" href="#" data-auth-mode="student"><img src="/nextskills-logo.png" alt="NextSkills" /></a>
        <div>
          <p class="eyebrow">Skill access platform</p>
          <h1>Learn smarter with guided digital courses.</h1>
          <p>Students study assigned lessons, complete timed tests, and track progress. Admins approve access, manage accounts, and review learning activity.</p>
        </div>
        <div class="auth-stats">
          <article><strong>${courses.length}</strong><span>Active courses</span></article>
          <article><strong>${pendingSignupCount}</strong><span>Signup requests</span></article>
        </div>
      </div>

      <section class="auth-card">
        <div class="auth-tabs" role="tablist" aria-label="Login type">
          <button class="${authMode === 'student' ? 'active' : ''}" data-auth-mode="student">Student</button>
          <button class="${authMode === 'admin' ? 'active' : ''}" data-auth-mode="admin">Admin</button>
        </div>
        ${authMode === 'signup' ? `
          <form class="auth-form" id="signup-form">
            <div>
              <p class="eyebrow">Request access</p>
              <h2>Create student signup request</h2>
              <p>Your request will be sent to the admin for approval.</p>
            </div>
            <label>Full name<input name="name" required autocomplete="name" /></label>
            <label>Email<input name="email" type="email" required autocomplete="email" /></label>
            <label>Phone / WhatsApp<input name="phone" required autocomplete="tel" /></label>
            <label>Password<input name="password" type="password" required minlength="6" maxlength="10" /></label>
            <button class="button primary" type="submit">Send signup request</button>
            <p id="signup-message" class="form-error"></p>
            <p class="auth-switch">Already have access? <button type="button" data-auth-mode="student">Login</button></p>
          </form>
        ` : `
          <form class="auth-form" id="login-form">
            <div>
              <p class="eyebrow">${authMode === 'admin' ? 'Admin access' : 'Student access'}</p>
              <h2>${authMode === 'admin' ? 'Login as admin' : 'Login to your classroom'}</h2>
              <p>${authMode === 'admin' ? 'Manage students, requests, progress, and reports.' : 'Continue your assigned NextSkills courses.'}</p>
            </div>
            <label>Email<input name="email" type="email" required autocomplete="email" /></label>
            <label>Password<input name="password" type="password" required autocomplete="current-password" /></label>
            <button class="button primary" type="submit">${authMode === 'admin' ? 'Login as admin' : 'Login as student'}</button>
            <p id="login-error" class="form-error"></p>
            ${authMode === 'student' ? `<p class="auth-switch">New student? <button type="button" data-auth-mode="signup">Signup request</button></p>` : ''}
          </form>
        `}
        <div class="demo-credentials compact">
          <strong>Demo logins</strong>
          <span>Admin: admin@nextskills.local / admin123</span>
          <span>Student: student@nextskills.local / student123</span>
        </div>
      </section>
    </section>
  `);
  document.querySelectorAll('[data-auth-mode]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      authMode = button.dataset.authMode || 'student';
      renderLogin();
    });
  });
  document.querySelector('#login-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email')).trim().toLowerCase();
    const password = String(form.get('password'));
    const user = state.users.find((item) => item.email.toLowerCase() === email && item.password === password && item.role === authMode);
    if (!user) {
      document.querySelector('#login-error').textContent = 'Invalid email or password.';
      return;
    }
    if (user.role === 'student' && studentAccountStatus(user) === 'inactive') {
      document.querySelector('#login-error').textContent = 'Please contact admin to restore your account access.';
      return;
    }
    setSession(user);
    navigate({view: user.role === 'admin' ? 'admin' : 'dashboard'}, {replace: true});
  });
  document.querySelector('#signup-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email')).trim().toLowerCase();
    const phone = String(form.get('phone')).trim();
    const password = String(form.get('password'));
    const message = document.querySelector('#signup-message');
    if (state.users.some((item) => item.email.toLowerCase() === email)) {
      message.textContent = 'This email already has an account. Please login or contact admin.';
      return;
    }
    const existing = (state.signupRequests || []).find((request) => request.email.toLowerCase() === email && request.status === 'pending');
    if (existing) {
      message.textContent = 'Your signup request is already pending with admin.';
      return;
    }
    state.signupRequests = state.signupRequests || [];
    state.signupRequests.push({
      id: `signup-${Date.now()}`,
      name: String(form.get('name')).trim(),
      email,
      phone,
      password,
      status: 'pending',
      createdAt: new Date().toISOString()
    });
    saveState();
    message.classList.add('success-message');
    message.textContent = 'Signup request sent. Admin will approve your access.';
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
  if (adminStatusFilter === 'pending') adminStatusFilter = 'all';
  const students = state.users.filter((item) => item.role === 'student');
  const pendingRequests = (state.unlockRequests || []).filter((request) => request.status === 'pending');
  const pendingSignups = (state.signupRequests || []).filter((request) => request.status === 'pending');
  const adminNotifications = [
    ...pendingRequests.map((request) => {
      const requestStudent = state.users.find((item) => item.id === request.userId);
      return {type: 'Course request', text: `${requestStudent?.name || 'A student'} requested ${getCourse(request.courseId).title}.`};
    }),
    ...pendingSignups.map((request) => ({type: 'Signup request', text: `${request.name} requested a student account.`}))
  ];
  const selectedStudent = students.find((student) => student.id === activeStudentId) || students[0] || null;
  if (selectedStudent) activeStudentId = selectedStudent.id;
  const activeStudents = students.filter((student) => studentAccountStatus(student) === 'active').length;
  const rows = students.filter((student) => {
    const assignedTitles = courses.filter((item) => (state.assignments[student.id] || []).includes(item.id)).map((item) => item.title).join(' ');
    const haystack = `${student.name} ${student.email} ${assignedTitles}`.toLowerCase();
    const matchesSearch = haystack.includes(adminStudentSearch.toLowerCase());
    const hasPending = pendingRequests.some((request) => request.userId === student.id);
    const isActive = studentAccountStatus(student) === 'active';
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
            ${adminNotifications.length ? `<strong>${adminNotifications.length}</strong>` : ''}
          </button>
          <div class="notification-panel admin-notification-panel" hidden>
            <h3>Notifications</h3>
            ${adminNotifications.length ? adminNotifications.map((item) => `
              <article><strong>${item.type}</strong><p>${escapeHtml(item.text)}</p></article>
            `).join('') : '<p>No admin notifications yet.</p>'}
          </div>
          <div class="account-wrap">
            <button class="avatar" data-toggle-admin-account aria-label="Admin profile">AD</button>
            <div class="account-panel" hidden>
              <strong>${escapeHtml(user.name)}</strong>
              <span>${escapeHtml(user.email)}</span>
              <button data-route="profile">My profile</button>
              <button data-action="logout">Logout</button>
            </div>
          </div>
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
              const status = studentAccountStatus(student);
              return `
                <article class="admin-table-row ${selectedStudent?.id === student.id ? 'selected' : ''}">
                  <strong>${escapeHtml(student.name)}</strong>
                  <span>${escapeHtml(student.email)}</span>
                  <span><mark class="${status === 'active' ? 'active' : ''}">${status === 'active' ? 'Active' : 'Inactive'}</mark></span>
                  <button class="button secondary" data-view-student="${student.id}">View Profile</button>
                </article>
              `;
            }).join('') || '<article class="admin-empty">No students match this filter.</article>'}
          </div>
        </div>
      </section>

      <section id="admin-signups" class="admin-card">
        <div class="admin-section-head"><div><h2>Signup Requests</h2><p>Approve or reject students who requested platform access.</p></div></div>
        <div class="admin-request-list signup-request-list">
          ${pendingSignups.length ? pendingSignups.map((request) => `
            <article>
              <strong>${escapeHtml(request.name)}</strong>
              <span>${escapeHtml(request.email)} • ${escapeHtml(request.phone || 'No phone')}</span>
              <button class="button primary" data-approve-signup="${request.id}" aria-label="Approve signup">Approve</button>
              <button class="button secondary" data-reject-signup="${request.id}" aria-label="Reject signup">Reject</button>
            </article>
          `).join('') : '<article class="admin-empty">No pending signup requests.</article>'}
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
  document.querySelector('.admin-bell')?.addEventListener('click', () => {
    const panel = document.querySelector('.admin-notification-panel');
    if (panel) panel.hidden = !panel.hidden;
    const accountPanel = document.querySelector('.account-panel');
    if (accountPanel) accountPanel.hidden = true;
    document.querySelector('.admin-bell strong')?.remove();
  });
  document.querySelector('[data-toggle-admin-account]')?.addEventListener('click', () => {
    const panel = document.querySelector('.account-panel');
    if (panel) panel.hidden = !panel.hidden;
    const notificationPanel = document.querySelector('.admin-notification-panel');
    if (notificationPanel) notificationPanel.hidden = true;
  });
  document.querySelector('#add-user-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email')).trim().toLowerCase();
    if (state.users.some((item) => item.email.toLowerCase() === email)) {
      alert('A user with this email already exists.');
      return;
    }
    const newUser = {id: `student-${Date.now()}`, name: String(form.get('name')).trim(), email, password: String(form.get('password')), role: 'student', accountStatus: 'active', createdAt: new Date().toISOString()};
    state.users.push(newUser);
    state.assignments[newUser.id] = [];
    activeStudentId = newUser.id;
    saveState();
    renderAdmin(user);
  });
  document.querySelectorAll('[data-approve-signup]').forEach((button) => button.addEventListener('click', () => {
    const request = (state.signupRequests || []).find((item) => item.id === button.dataset.approveSignup);
    if (!request) return;
    if (state.users.some((item) => item.email.toLowerCase() === request.email.toLowerCase())) {
      request.status = 'rejected';
      saveState();
      renderAdmin(user);
      return;
    }
    const newUser = {
      id: `student-${Date.now()}`,
      name: request.name,
      email: request.email,
      phone: request.phone,
      password: request.password,
      role: 'student',
      accountStatus: 'active',
      createdAt: new Date().toISOString()
    };
    state.users.push(newUser);
    state.assignments[newUser.id] = [];
    request.status = 'approved';
    request.approvedAt = new Date().toISOString();
    saveState();
    renderAdmin(user);
  }));
  document.querySelectorAll('[data-reject-signup]').forEach((button) => button.addEventListener('click', () => {
    const request = (state.signupRequests || []).find((item) => item.id === button.dataset.rejectSignup);
    if (!request) return;
    request.status = 'rejected';
    request.rejectedAt = new Date().toISOString();
    saveState();
    renderAdmin(user);
  }));
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
  const status = studentAccountStatus(student);
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
        <div class="student-status-actions">
          <mark class="student-detail-status ${status === 'active' ? 'active' : ''}">${status === 'active' ? 'Active' : 'Inactive'}</mark>
          <button class="button ${status === 'active' ? 'danger' : 'primary'}" data-toggle-student-status="${student.id}">
            Make ${status === 'active' ? 'Inactive' : 'Active'}
          </button>
        </div>
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
  document.querySelector('[data-toggle-student-status]')?.addEventListener('click', () => {
    student.accountStatus = studentAccountStatus(student) === 'active' ? 'inactive' : 'active';
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
    <section class="lesson-section"><h4>What this means</h4>${lesson.sections.what.map((item) => `<p>${item}</p>`).join('')}</section>
    <section class="lesson-section"><h4>Why this matters</h4>${lesson.sections.why.map((item) => `<p>${item}</p>`).join('')}</section>
    <section class="lesson-section"><h4>Where you use it</h4>${lesson.sections.where.map((item) => `<p>${item}</p>`).join('')}</section>
    <section class="lesson-section"><h4>How to do it</h4>${listItems(lesson.sections.how)}</section>
    ${lesson.deepDive ? `<section class="lesson-section"><h4>Detailed checklist</h4>${listItems(lesson.deepDive)}</section>` : ''}
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

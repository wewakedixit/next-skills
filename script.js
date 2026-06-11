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
const course = {
  id: 'learn-google-search-console',
  title: 'Learn Google Search Console',
  subtitle: 'A practical Search Console course for non-technical users.',
  lessons
};

const appKey = 'nextskills-platform-v1';
const sessionKey = 'nextskills-session-v1';
const testMinutes = 5;
let route = {view: 'login'};
let activeLesson = 0;
let activeStudentId = null;
let lessonTimer = null;
let testTimer = null;
let activeTest = null;

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
    'student-1': [course.id]
  },
  progress: {},
  attempts: [],
  lessonTime: {},
  currentSession: null
};

function loadState() {
  const saved = JSON.parse(localStorage.getItem(appKey) || 'null');
  if (!saved) {
    localStorage.setItem(appKey, JSON.stringify(seedState));
    return structuredClone(seedState);
  }
  return {
    ...structuredClone(seedState),
    ...saved,
    users: saved.users || seedState.users,
    assignments: saved.assignments || seedState.assignments,
    progress: saved.progress || {},
    attempts: saved.attempts || [],
    lessonTime: saved.lessonTime || {}
  };
}

let state = loadState();

function saveState() {
  localStorage.setItem(appKey, JSON.stringify(state));
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

function userProgress(userId) {
  if (!state.progress[userId]) {
    state.progress[userId] = {};
  }
  if (!state.progress[userId][course.id]) {
    state.progress[userId][course.id] = {completedLessons: []};
  }
  return state.progress[userId][course.id];
}

function userLessonTime(userId) {
  if (!state.lessonTime[userId]) {
    state.lessonTime[userId] = {};
  }
  if (!state.lessonTime[userId][course.id]) {
    state.lessonTime[userId][course.id] = {};
  }
  return state.lessonTime[userId][course.id];
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
        <button data-route="dashboard">Dashboard</button>
        ${user.role === 'admin' ? '<button data-route="admin">Admin</button>' : ''}
        <button data-route="profile">My profile</button>
        <button data-action="logout">Logout</button>
      </nav>
    `
    : '';

  app.innerHTML = `
    <header class="platform-header">
      <a class="platform-brand" href="#" data-route="dashboard">
        <span class="brand-mark">N</span>
        <span>NextSkills</span>
      </a>
      ${nav}
    </header>
    <main class="platform-main">${content}</main>
  `;
  bindGlobalActions();
}

function bindGlobalActions() {
  document.querySelectorAll('[data-route]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const user = getSessionUser();
      if (!user) return renderLogin();
      stopLessonTimer();
      route = {view: button.dataset.route};
      render();
    });
  });
  document.querySelector('[data-action="logout"]')?.addEventListener('click', () => {
    stopLessonTimer();
    clearSession();
    route = {view: 'login'};
    renderLogin();
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
    route = {view: user.role === 'admin' ? 'admin' : 'dashboard'};
    render();
  });
}

function renderDashboard(user) {
  const assigned = state.assignments[user.id] || [];
  const completed = userProgress(user.id).completedLessons.length;
  const progressPercent = Math.round((completed / course.lessons.length) * 100);
  const totalStudyTime = Object.values(userLessonTime(user.id)).reduce((sum, value) => sum + value, 0);
  const latestAttempt = state.attempts.filter((attempt) => attempt.userId === user.id).at(-1);
  const now = new Date();
  renderShell(user, `
    <section class="dashboard-hero">
      <div>
        <p class="eyebrow">Student dashboard</p>
        <h1>Welcome, ${escapeHtml(user.name)}</h1>
        <p>Your assigned courses appear here. Complete each lesson test to unlock the next lesson.</p>
      </div>
      <div class="dashboard-stat"><strong>${completed}/${course.lessons.length}</strong><span>lessons completed</span></div>
    </section>
    <section class="insight-grid">
      <article><strong>${now.toLocaleDateString()}</strong><span>today's date</span></article>
      <article><strong>${now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</strong><span>current time</span></article>
      <article><strong>${progressPercent}%</strong><span>course progress</span></article>
      <article><strong>${secondsToClock(totalStudyTime)}</strong><span>study time</span></article>
      <article><strong>${latestAttempt ? (latestAttempt.passed ? 'Passed' : 'Retake') : 'No test'}</strong><span>latest attempt</span></article>
      <article><strong>${latestAttempt ? `${latestAttempt.correct}/10` : '-'}</strong><span>latest score</span></article>
    </section>
    <section class="course-list">
      ${assigned.includes(course.id)
        ? `
          <article class="course-card">
            <h2>${course.title}</h2>
            <p>${course.subtitle}</p>
            <div class="progress-track"><span style="width:${(completed / course.lessons.length) * 100}%"></span></div>
            <button class="button primary" data-open-course>Open course</button>
          </article>
        `
        : '<article class="empty-card">No course assigned yet. Please contact your admin.</article>'}
    </section>
    <section class="stress-card">
      <div>
        <p class="eyebrow">Stress relief</p>
        <h2>X/O quick break</h2>
        <p>Play a short round against the computer between study sessions.</p>
      </div>
      <div class="xo-game">
        <div class="xo-board">
          ${Array.from({length: 9}).map((_, index) => `<button type="button" data-xo-cell="${index}" aria-label="Cell ${index + 1}"></button>`).join('')}
        </div>
        <p id="xo-status">Your turn. You are X.</p>
        <button class="button secondary" data-reset-xo>Reset game</button>
      </div>
    </section>
  `);
  document.querySelector('[data-open-course]')?.addEventListener('click', () => {
    route = {view: 'course', lesson: 0};
    render();
  });
  bindXoGame();
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
  renderShell(user, `
    <section class="admin-grid">
      <div class="admin-panel">
        <p class="eyebrow">Admin panel</p>
        <h1>Users and course assignments</h1>
        <p>Add students, assign courses from the backend, and review each student’s lesson time and test attempts.</p>
        <form id="add-user-form" class="stack-form">
          <label>Name<input name="name" required /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Password<input name="password" required /></label>
          <button class="button primary" type="submit">Add student</button>
        </form>
      </div>
      <div class="admin-panel">
        <h2>Course assignment backend</h2>
        <div class="assignment-table">
          <div class="assignment-head"><span>Student</span><span>Course</span><span>Status</span><span>Report</span></div>
          ${students.map((student) => {
            const assigned = (state.assignments[student.id] || []).includes(course.id);
            return `
              <div class="assignment-row">
                <span>${escapeHtml(student.name)}</span>
                <span>${course.title}</span>
                <label class="switch-line"><input type="checkbox" data-assign="${student.id}" ${assigned ? 'checked' : ''}/> ${assigned ? 'Assigned' : 'Not assigned'}</label>
                <button class="button secondary" data-view-student="${student.id}">Open profile</button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      <div class="admin-panel admin-panel-wide">
        <h2>Students</h2>
        <div class="student-list">
          ${students.map((student) => {
            const assigned = (state.assignments[student.id] || []).includes(course.id);
            const completed = userProgress(student.id).completedLessons.length;
            return `
              <article class="student-row">
                <div>
                  <strong>${escapeHtml(student.name)}</strong>
                  <span>${escapeHtml(student.email)}</span>
                  <small>${completed}/${course.lessons.length} lessons complete</small>
                </div>
                <div class="student-actions">
                  <span class="status-pill ${assigned ? 'success' : ''}">${assigned ? 'Course assigned' : 'Not assigned'}</span>
                  <button class="button secondary" data-view-student="${student.id}">View report</button>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `);

  document.querySelector('#add-user-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email')).trim().toLowerCase();
    if (state.users.some((item) => item.email.toLowerCase() === email)) {
      alert('A user with this email already exists.');
      return;
    }
    const newUser = {
      id: `student-${Date.now()}`,
      name: String(form.get('name')).trim(),
      email,
      password: String(form.get('password')),
      role: 'student',
      createdAt: new Date().toISOString()
    };
    state.users.push(newUser);
    state.assignments[newUser.id] = [];
    saveState();
    renderAdmin(user);
  });

  document.querySelectorAll('[data-assign]').forEach((input) => {
    input.addEventListener('change', () => {
      const studentId = input.dataset.assign;
      state.assignments[studentId] = state.assignments[studentId] || [];
      if (input.checked && !state.assignments[studentId].includes(course.id)) {
        state.assignments[studentId].push(course.id);
      }
      if (!input.checked) {
        state.assignments[studentId] = state.assignments[studentId].filter((id) => id !== course.id);
      }
      saveState();
      renderAdmin(user);
    });
  });

  document.querySelectorAll('[data-view-student]').forEach((button) => {
    button.addEventListener('click', () => {
      activeStudentId = button.dataset.viewStudent;
      route = {view: 'student-report'};
      render();
    });
  });
}

function renderStudentReport(adminUser) {
  const student = state.users.find((user) => user.id === activeStudentId);
  if (!student) return renderAdmin(adminUser);
  const attempts = state.attempts.filter((attempt) => attempt.userId === student.id);
  const times = userLessonTime(student.id);
  const completed = userProgress(student.id).completedLessons.length;
  const totalTime = Object.values(times).reduce((sum, value) => sum + value, 0);
  const latestAttempt = attempts.at(-1);
  const assigned = (state.assignments[student.id] || []).includes(course.id);
  renderShell(adminUser, `
    <section class="report-page">
      <button class="button secondary" data-route="admin">Back to admin</button>
      <p class="eyebrow">Student profile report</p>
      <h1>${escapeHtml(student.name)}</h1>
      <p>${escapeHtml(student.email)}</p>
      <div class="insight-grid">
        <article><strong>${assigned ? 'Assigned' : 'Not assigned'}</strong><span>course status</span></article>
        <article><strong>${completed}/${course.lessons.length}</strong><span>progress</span></article>
        <article><strong>${secondsToClock(totalTime)}</strong><span>total lesson time</span></article>
        <article><strong>${attempts.length}</strong><span>test attempts</span></article>
        <article><strong>${latestAttempt ? `${latestAttempt.correct}/10` : '-'}</strong><span>latest score</span></article>
        <article><strong>${latestAttempt ? (latestAttempt.passed ? 'Pass' : 'Retake') : '-'}</strong><span>latest result</span></article>
      </div>
      <div class="report-grid">
        <article>
          <h2>Lesson time</h2>
          ${course.lessons.map((lesson, index) => `
            <p><strong>${index + 1}. ${lesson.title}</strong><span>${secondsToClock(times[index] || 0)}</span></p>
          `).join('')}
        </article>
        <article>
          <h2>Test attempts</h2>
          ${attempts.length ? attempts.map((attempt) => `
            <div class="attempt-row">
              <strong>Lesson ${attempt.lessonIndex + 1}: ${attempt.passed ? 'Passed' : 'Retake needed'}</strong>
              <span>Score: ${attempt.correct}/10 • Wrong: ${attempt.wrong} • Time: ${secondsToClock(attempt.timeSpent)} • Warnings: ${attempt.violations} • Status: ${attempt.passed ? 'Pass' : 'Retake'}</span>
              <small>${new Date(attempt.createdAt).toLocaleString()}</small>
            </div>
          `).join('') : '<p>No attempts yet.</p>'}
        </article>
      </div>
    </section>
  `);
}

function renderProfile(user) {
  const attempts = state.attempts.filter((attempt) => attempt.userId === user.id);
  const completed = user.role === 'student' ? userProgress(user.id).completedLessons.length : 0;
  renderShell(user, `
    <section class="profile-page">
      <p class="eyebrow">My profile</p>
      <h1>${escapeHtml(user.name)}</h1>
      <p>${escapeHtml(user.email)} • ${user.role}</p>
      ${user.role === 'student' ? `<div class="dashboard-stat"><strong>${completed}/${course.lessons.length}</strong><span>lessons completed</span></div>` : ''}
      <h2>Recent test activity</h2>
      ${attempts.slice(-6).reverse().map((attempt) => `
        <div class="attempt-row">
          <strong>Lesson ${attempt.lessonIndex + 1}: ${attempt.passed ? 'Passed' : 'Retake needed'}</strong>
          <span>${attempt.correct}/10 correct • ${secondsToClock(attempt.timeSpent)}</span>
        </div>
      `).join('') || '<p>No student test activity yet.</p>'}
    </section>
  `);
}

function renderLessonVisual(index) {
  const visual = lessonVisuals[index];
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

function renderLesson(user) {
  const lessonIndex = route.lesson || 0;
  activeLesson = lessonIndex;
  const lesson = course.lessons[lessonIndex];
  if (!isLessonUnlocked(user.id, lessonIndex)) {
    route = {view: 'course', lesson: 0};
    return renderLesson(user);
  }
  startLessonTimer(user.id, lessonIndex);
  const completed = userProgress(user.id).completedLessons;
  renderShell(user, `
    <section class="course-shell platform-course">
      <aside class="lesson-menu">
        ${course.lessons.map((item, index) => `
          <button class="lesson-tab ${index === lessonIndex ? 'active' : ''}" data-lesson-nav="${index}" ${isLessonUnlocked(user.id, index) ? '' : 'disabled'}>
            ${completed.includes(index) ? '[Done] ' : isLessonUnlocked(user.id, index) ? '' : '[Locked] '}${index + 1}. ${item.title}
          </button>
        `).join('')}
      </aside>
      <article class="lesson-card">
        <div class="progress-wrap">
          <span>${completed.length} of ${course.lessons.length} lessons complete</span>
          <div class="progress-track"><span style="width:${(completed.length / course.lessons.length) * 100}%"></span></div>
        </div>
        <div class="lesson-header">
          <p class="eyebrow">Lesson ${lessonIndex + 1} • ${lesson.duration}</p>
          <h1>${lesson.title}</h1>
          <p><strong>Goal:</strong> ${lesson.goal}</p>
        </div>
        <div class="lesson-meta">
          <div><strong>0-10 min</strong><span>Concepts</span></div>
          <div><strong>10-25 min</strong><span>Why it matters</span></div>
          <div><strong>25-40 min</strong><span>How and where</span></div>
          <div><strong>40-50 min</strong><span>Practice</span></div>
          <div><strong>50-60 min</strong><span>Timed test</span></div>
        </div>
        <section class="lesson-section"><h4>Learning outcomes</h4>${listItems(lesson.outcomes)}</section>
        ${renderLessonVisual(lessonIndex)}
        <section class="lesson-section"><h4>What this means</h4>${lesson.sections.what.map((item) => `<p>${item}</p>`).join('')}</section>
        <section class="lesson-section"><h4>Why this matters</h4>${lesson.sections.why.map((item) => `<p>${item}</p>`).join('')}</section>
        <section class="lesson-section"><h4>Where you use it</h4>${lesson.sections.where.map((item) => `<p>${item}</p>`).join('')}</section>
        <section class="lesson-section"><h4>How to do it</h4>${listItems(lesson.sections.how)}</section>
        <section class="lesson-section"><h4>Terminology and glossary</h4><div class="lesson-term-grid">${lesson.glossary.map(([term, definition]) => `<article><h5>${term}</h5><p>${definition}</p></article>`).join('')}</div></section>
        <section class="lesson-section"><h4>Examples</h4><div class="lesson-example-grid">${lesson.examples.map((example) => `<article class="lesson-example"><h5>${example.title}</h5><p><strong>Problem:</strong> ${example.problem}</p><p><strong>Walkthrough:</strong> ${example.walkthrough}</p><p><strong>Takeaway:</strong> ${example.takeaway}</p></article>`).join('')}</div></section>
        <section class="lesson-section"><h4>Hands-on practice</h4><div class="practice">${listItems(lesson.practice)}</div></section>
        <section class="lesson-section"><h4>Lesson test</h4><p>You have 5 minutes. Questions and options are randomized. You may get up to 3 answers wrong. If 4 or more are wrong, you must retake the test.</p><button class="button primary" data-start-test>Start 5-minute test</button></section>
      </article>
    </section>
  `);
  document.querySelectorAll('[data-lesson-nav]').forEach((button) => {
    button.addEventListener('click', () => {
      route = {view: 'course', lesson: Number(button.dataset.lessonNav)};
      render();
    });
  });
  document.querySelector('[data-start-test]').addEventListener('click', () => startTest(user, lessonIndex));
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
        <div><p class="eyebrow">Timed test</p><h1>${course.lessons[activeTest.lessonIndex].title}</h1></div>
        <div class="timer" id="test-timer">${secondsToClock(activeTest.remaining)}</div>
      </div>
      <div class="security-note">
        Test security: copy and right-click are blocked where the browser allows it. Switching tabs/windows gives one warning. A second switch closes the test and requires a retake. A normal website cannot reliably detect a photo taken from another mobile phone, but the test screen is blacked out when focus changes.
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
  document.querySelector('#test-result').innerHTML = `
    <div class="result-card">
      <h2>Test submitted</h2>
      <p>Click the button below to view your result summary. Correct answers are not shown.</p>
      <button class="button primary" data-view-result>View results</button>
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
          <p>${passed ? 'Good work. You can continue to the next lesson.' : 'More than 3 answers were wrong, or the attempt was closed. Please retake the test.'}</p>
        </div>
      </div>
      <div class="result-metrics">
        <article><strong>${wrong}</strong><span>wrong answers</span></article>
        <article><strong>${secondsToClock(attempt.timeSpent)}</strong><span>time spent</span></article>
        <article><strong>${attempt.violations}</strong><span>focus warnings</span></article>
        <article><strong>${forced ? 'Closed' : 'Submitted'}</strong><span>attempt type</span></article>
      </div>
      <p class="security-note">Correct answers are intentionally hidden. Review the lesson and retake if needed.</p>
      <button class="button primary" data-return-course>${passed ? 'Continue course' : 'Retake lesson test'}</button>
    `;
    document.querySelector('[data-return-course]').addEventListener('click', () => {
      activeTest = null;
      route = {view: 'course', lesson: attempt.lessonIndex + (passed ? 1 : 0)};
      if (route.lesson >= course.lessons.length) route.lesson = course.lessons.length - 1;
      render();
    });
  });
}

function render() {
  const user = getSessionUser();
  if (!user) return renderLogin();
  if (route.view === 'admin') return user.role === 'admin' ? renderAdmin(user) : renderDashboard(user);
  if (route.view === 'student-report') return user.role === 'admin' ? renderStudentReport(user) : renderDashboard(user);
  if (route.view === 'profile') return renderProfile(user);
  if (route.view === 'course') return renderLesson(user);
  return user.role === 'admin' ? renderAdmin(user) : renderDashboard(user);
}

document.addEventListener('contextmenu', (event) => {
  if (document.body.classList.contains('test-mode')) event.preventDefault();
});

render();

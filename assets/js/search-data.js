// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-articles",
          title: "articles",
          description: "publications by categories in different testing communities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-books",
          title: "books",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This page provides a summary of my experience and qualifications, along with a downloadable PDF version of my CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-speaking",
          title: "speaking",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-ai-in-testing",
          title: "ai in testing",
          description: "AI related resources or projects on which I have worked or I&#39;m working",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ai-in-testing/";
          },
        },{id: "post-postbot-in-postman",
        
          title: "Postbot in Postman",
        
        description: "Exploring Postbot, Postman&#39;s AI powered assistant that enhances API testing efficiency.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/postbot-postman-ai-assistant/";
          
        },
      },{id: "post-python-assert-vs-pytest-assert",
        
          title: "Python Assert vs Pytest Assert",
        
        description: "Understanding the differences between Python&#39;s built in assert statement and Pytest&#39;s enhanced assertion capabilities.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/python-assert-vs-pytest-assert/";
          
        },
      },{id: "post-selenium-grid-with-pytest",
        
          title: "Selenium Grid With Pytest",
        
        description: "Parallel Testing Made Simple. Learn how to set up Selenium Grid with a Pytest automation framework for scalable browser testing.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/selenium-grid-pytest/";
          
        },
      },{id: "post-ci-cd-pipeline-for-pytest-projects",
        
          title: "CI/CD Pipeline for Pytest Projects",
        
        description: "Setting up a Jenkins pipeline for Python testing projects using Pytest and Docker.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cicd-pytest-jenkins/";
          
        },
      },{id: "post-green-testing-in-the-age-of-ai",
        
          title: "Green Testing in the Age of AI",
        
        description: "Exploring how software testing practices can contribute to sustainable development in an AI driven world.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/green-testing-ai/";
          
        },
      },{id: "post-conftest-py-and-its-role-in-automation",
        
          title: "Conftest.py and Its Role in Automation",
        
        description: "Understanding how conftest.py helps manage fixtures, configuration, and reusable setup in Pytest automation frameworks.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/conftest-pytest-automation/";
          
        },
      },{id: "post-when-a-single-alphabet-decided-the-fate-of-the-first-demo",
        
          title: "When a Single Alphabet Decided the Fate of the First Demo",
        
        description: "A real testing story about how a tiny mistake in a single variable name nearly affected a product demo and what it taught about debugging and quality.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/single-alphabet-demo-bug/";
          
        },
      },{id: "post-an-uninvited-guest-in-the-diwali-party",
        
          title: "An Uninvited Guest in the Diwali Party",
        
        description: "A real story about how a production bug interrupted a Diwali celebration and what it taught about pairwise testing.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/diwali-production-bug-pairwise-testing/";
          
        },
      },{id: "post-various-sdlc-models",
        
          title: "Various SDLC Models",
        
        description: "A visual overview of major software development life cycle models and how they differ in approach and structure.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/various-sdlc-models/";
          
        },
      },{id: "post-setting-up-pytest-for-automation-project",
        
          title: "Setting Up Pytest for Automation Project",
        
        description: "A comprehensive guide to setting up Pytest, structuring automation projects, configuring test suites, and running tests effectively.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/setting-up-pytest-automation-project/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-unconditional-update-that-brings-the-server-down",
        
          title: "Unconditional Update That Brings the Server Down",
        
        description: "A testing story about how an unconditional database update caused a critical failure and what it taught about safe query practices.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/unconditional-update-server-down/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-ikigai",
          title: 'Ikigai',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ikigai/";
            },},{id: "books-a-brief-history-of-time",
          title: 'A Brief History of Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_brief_of_history_time/";
            },},{id: "books-",
          title: '',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/agile_testing_reading_guide/";
            },},{id: "books-",
          title: '',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/buddha_in_testing/";
            },},{id: "books-",
          title: '',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/explore_it_exploratory_testing/";
            },},{id: "books-ये-मेरी-ग़ज़लें-ये-मेरी-नज़्में",
          title: 'ये मेरी ग़ज़लें ये मेरी नज़्में',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ye_meri_ghazelein/";
            },},{id: "books-growth-driven-testing",
          title: 'Growth Driven Testing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/growth_driven_testing/";
            },},{id: "books-lessons-in-chemistry",
          title: 'Lessons in Chemistry',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lessons_in_chemistry/";
            },},{id: "news-when-nobody-owns-quality-making-testing-responsibility-explicit-in-open-source-projects",
          title: 'When Nobody Owns Quality - Making Testing Responsibility Explicit in Open Source Projects...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-community-testing-meetup-speaker-session",
          title: 'Community Testing Meetup - Speaker Session',
          description: "",
          section: "News",},{id: "news-software-testing-live-episode-with-ben-dowen",
          title: 'Software Testing Live Episode With Ben Dowen.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-open-source-summit-india-2026",
          title: 'Open Source Summit India 2026',
          description: "When Nobody Owns Quality-Making Testing Responsibility Explicit in Open Source Projects",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/software-testing-live=2026%20copy%202/";
            },},{id: "teachings-upcoming-talk-session-with-continuous-testing-meetup",
          title: 'Upcoming Talk Session With Continuous Testing Meetup',
          description: "Upcoming Talk - AI Follows the Prompt. Community Expands Quality Thinking",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/software-testing-live=2026%20copy/";
            },},{id: "teachings-software-testing-live-conversation-with-ben-dowen",
          title: 'Software Testing Live – Conversation with Ben Dowen',
          description: "A live discussion on modern software testing practices and quality thinking, hosted by Ministry of Testing.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/software-testing-live=2026/";
            },},{id: "teachings-test-analytics-without-decision-is-just-reporting",
          title: 'Test Analytics Without Decision Is Just Reporting',
          description: "A lightning talk about how test analytics should drive decisions instead of becoming passive reporting dashboards.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/taqelah-2026-lightning-talk/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Ujjwal_Kumar_Singh_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%75%74%6F%6D%61%74%65%61%6C%63%68%65%6D%69%73%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/beinghumantester", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ujjwal-k-singh", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

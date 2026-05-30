var resumeData = {
  about: {
    name: 'Kartik Maurya',
    email: 'mauryakartik@gmail.com',
    designation: 'Senior Software Engineer (Team Lead)',
    currentCity: 'India',
    resumeLink: 'https://9kartik.github.io/resume',
    imgurl:
      './assets/facefront_2023.jpg',
    metaTags: [
      {
        property: 'og:image',
        value:
          'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/facefront_2023+(1).jpg',
      },
      {
        property: 'og:description',
        value: 'Kartik Maurya (Senior Software Engineer)',
      },
      {
        property: 'og:url',
        value: 'https://9kartik.github.io/resume',
      },
      {
        property: 'og:type',
        value: 'website',
      },
      {
        property: 'og:title',
        value: "Kartik Maurya's - Professional Journey",
      },
    ],
    contactLinks: [
      {
        url:
          'mailto:someone@example.com?Subject=Mailing through your resume link',
        logo: 'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/email.png',
        name: 'mauryakartik@gmail.com',
      },
      {
        url: 'tel:+918310387321',
        logo: 'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/cell-phone.png',
        name: '+91-8310387321',
      }
    ],
    otherLinks: [
      {
        url:
          'https://www.youtube.com/watch?v=hUqIHRFJoiE',
        logo: 'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/lock.png',
        name: 'YouTube Talk on CSP',
      },
      {
        url:
          'https://kartikm.my.canva.site/',
        logo: 'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/canva-icon.png',
        name: 'Portfolio',
      },
      {
        url:
          'https://chrome.google.com/webstore/detail/alter-videos/ncebpefkldaiogkbhabbcgdoadfhpehj',
        logo:
          'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/chrome-web-store-icon.png',
        name: 'Chrome Extension [Alter Videos]',
      },
      {
        url: 'https://twitter.com/mauryakartik9',
        logo:
          'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/twitter.png',
        name: 'twitter',
      },
      {
        url: 'https://github.com/9kartik',
        logo:
          'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/github.png',
        name: 'github.com/9kartik',
      },
      {
        url: 'https://www.webcomponents.org/author/9kartik',
        logo: 'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/webcomponents.svg',
        name: 'webcomponents',
      },
      {
        url: 'https://www.npmjs.com/~ka9',
        logo:
          'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/npm.png',
        name: 'npm',
      },
      {
        url: 'https://www.behance.net/kanine',
        logo: 'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/behance.ico',
        name: 'behance.net/kanine',
      },
      {
        url: 'https://stackoverflow.com/users/3335941/kanine',
        logo: 'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/stackoverflow.ico',
        name: 'stackoverflow',
      },
      {
        url: 'https://c00dles.blogspot.com/',
        logo: 'https://some-imgs.s3.ap-south-1.amazonaws.com/cv_assets/blogspot.ico',
        name: 'Computational Arts',
      }
    ],
  },
  projects: {
    // three columns per project
    heading: 'Work Experience',
    topics: [
      {
        designation: 'Senior Frontend Engineer (Team Lead)',
        companyName: 'ZoomInfo',
        duration: '2023 November - Present',
        allprojects: [
          {
            project: 'Frontend Migration (Comparably)',
            content: 'Leading a team of 4 frontend engineers in architecting the UI Migration of the Comparably website companies page from a jQuery + Express based tech stack to Angular 17 + NestJS. This involved a cloud migration from AWS to GCP, implementing Server Side Rendering (SSR), and building a first-party component library. Maintained SEO integrity throughout the process. Additionally, introduced deferrable views in the frontend, reducing LCP by up to 70% and improving CLS scores. Successfully reduced site TTFB by 300ms. Orchestrated the entire engineering workflow, including setting up CI/CD pipelines, error logging, and comprehensive analytics instrumentation.'
          },
          {
            project: 'Integrated Recruitment Product',
            content: 'Working on an integrated recruitment platform catering to agentic searches. This is using NextJS.'
          },
          {
            project: 'AI Emailer Project',
            content: 'Collaborated with the platform team to deliver an AI-driven emailer. Architected a strategy pattern to decouple the platform, allowing for easier multi-platform adoption. Solved backend coupling issues by implementing HTML event projection through web components for email notifications. Achievement: Surpassed expected outbound email usage by 30% in the first month.'
          },
          {
            project: 'On-page SEO & Security',
            content: 'Improved SEO for acquired products through sitemap segregation, redirect fixes, and reducing JS resource sizes by 30%. Increased indexed pages by 70% (4M pages) in 3 months. Implemented security measures to prevent 1.2M daily scraping attacks using JA3/JA4+ fingerprints.'
          },
          {
            project: 'Developer Productivity & CI',
            content: 'Enhanced CI pipeline efficiency by identifying and fixing flaky Jasmine-based unit tests. Reduced CI build time from 25 minutes to 8 minutes by. Introduced custom ESLint rules to accelerate PR reviews.'
          }
        ]
      },
      {
        designation: 'Senior Associate Developer',
        companyName: 'Atlassian',
        duration: '2020 May-2023 October',
        allprojects: [
          {
            project: 'Jira Service Management (Help Center)',
            content: 'Contributed to the "Topics" and "External Resources" features, significantly improving content discoverability for B2B clients. Utilized Relay (GraphQL client) to provide a WCAG Level AA compliant interface. Built a periodic Bitbucket pipeline using a bot to sync backend-generated GraphQL schemas with the frontend repository. On the operational side, improved homepage TTI by 30% by making frontend assets asynchronous.'
          },
          {
            project: 'Frontend Security & CSP (Opsgenie)',
            content: 'Architected XSS vulnerability reporting for the Opsgenie website by enabling Content Security Policy (CSP) on Global Edge. To avoid a TTI hit from AWS Lambda@Edge, implemented a periodically generated hash attachment for inline scripts. Integrated Sentry to track violations and reported metrics to Splunk dashboards. Also mitigated a massive spam attack by upgrading to ReCAPTCHA v2 Enterprise, implementing risk-score-based validation.'
          },
          {
            project: 'Experimental Site Builder',
            content: 'Developed a re-usable, high-performance image element for a drag-and-drop site builder. Leveraged React Context for element-level state management and advanced CSS for seamless image manipulation (positioning, resizing). Optimized media storage by requesting on-demand resized images from media servers, reducing overall bandwidth consumption.'
          },
          {
            project: 'Build Engineering & Productivity',
            content: 'Fixed a long-failing automation CI pipeline by optimizing core utilization to 80%, preventing CPU overconsumption. Reduced Docker container sizes from 20GB to 16GB. Resolved 250+ mid-urgency translation alerts by updating the Webpack translation plugin, achieving 98% message coverage. Developed a Storybook plugin to allow isolated story builds, improving build times by 80%.'
          }
        ]
      },
      {
        designation: 'UI Engineer',
        companyName: 'Cleartrip [Bengaluru, India]',
        duration: '2017 May-2020 March',
        allprojects: [
          {
            project: 'Site Revamp to React',
            content: `Migrating our search results page from shtml and javascript to React. Bridging the backend and frontend gap. Mentoring the team through the business logic, so it could be implemented better on NodeJS and the UI layer.`,
            technologies: [
              {
                name: 'ReactJS',
              },
              {
                name: 'NodeJS',
              },
            ],
          },
          {
            project: 'In house Dynamic Configuration Loading',
            content:
              'Reduced a one day deployment procedure to a 10min procedure utlizing the Amazon S3 buckets',
          },

          {
            project: 'Embedded Results',
            url: '',
            content:
              'Existing expanded view was obstructive to the user, as users had to scroll through to see similar flights and combinations. Improved the UI to give the choice to pair flights. This caused a 3% increased customer traction on the Search Results Page.',
            technologies: [
              {
                name: 'javascript',
                rating: 4,
              },
              {
                name: 'jquery',
                rating: 4,
              },
              {
                name: 'mustachejs',
                rating: 4,
              },
            ],
          }
        ],
      },
      {
        designation: 'Software Engineer',
        companyName: 'Unisys [Bengaluru, India]',
        duration: '2014 August - 2017 May',
        allprojects: [
          {
            project: 'Linesight [Border Security]',
            content: `Risk analysis using machine learning and related entities. I built the interface using mainly AngularJS , utilizing directives to create a lot of reusable components. It involved user profile based access. Interacting with graph db for the related data and plotting it using keylines and AngularJS - Linesight mongodb aggregation setup [using RestHeart]. This became a selling point for the Singapore Police Department.`,
            technologies: [
              {
                name: 'AngularJS',
              },
              {
                name: 'momentjs',
              },
              {
                name: 'keylines',
              },
              {
                name: 'underscore js',
              },
              {
                name: 'RestHeart',
              },
            ],
          }
        ],
      }
    ],
  },
  education: {
    heading: 'Education',
    qualifications: [
      {
        institute: 'Manipal Institute of Technology (Udupi, Karnataka, India)',
        duration: '2010 - 2014',
        degree: 'Bachelor of Engineering (BE)',
        specialization: 'Computer Science and Engineering',
      },
    ],
  },
  skills: {
    heading: 'Skills',
    topics: [
      {
        name: 'Front-end Web Design',
        rating: 3,
      },
      { 
        name: 'Typescript',
        rating: 3,
      },
      { 
        name: 'Bitbucket pipelines',
        rating: 3,
      },
      { 
        name: 'Github actions',
        rating: 3,
      },
      {
        name: 'LLM Prompt Engineering (Claude, Gemini)',
        rating: 3,
      },
      {
        name: 'Agentic Search & Workflows',
        rating: 3,
      },
      {
        name: 'Unit Testing: Jest, react-testing-library, Enzyme',
        rating: 3,
      },
      {
        name: 'End-to-end Testing: Cypress',
        rating: 3,
      },
      { 
        name: 'GraphQL (with relay client)',
        rating: 2
      },
      {
        name: 'Vue.js',
        rating: 3,
      },
      {
        name: 'styled-components',
        rating: 3,
      },
      {
        name: 'compiled-css-in-js',
        rating: 3,
      },
      {
        name: 'CSS',
        rating: 3,
      },
      {
        name: 'mustacheJS',
        rating: 3,
      },
      {
        name: 'lodash',
        rating: 4,
      },
      {
        name: 'p5.js',
        rating: 3,
      },
      {
        name: 'Angular',
        rating: 3,
      },
      {
        name: 'ReactJS',
        rating: 2,
      },
      {
        name: 'storybook',
        rating: 2,
      },
      {
        name: 'Context API',
        rating: 2,
      },
      {
        name: 'ramdajs',
        rating: 2,
      },
      {
        name: 'Vanilla Javascript',
        rating: 3,
      },
      {
        name: 'a11y',
        rating: 3,
      },
      {
        name: 'i18n',
        rating: 3,
      }
    ],
  },
};

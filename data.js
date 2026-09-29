var resumeData = {
  about: {
    name: 'Kartik Maurya',
    email: 'mauryakartik@gmail.com',
    designation: 'Principal Software Engineer',
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
        value: 'Kartik Maurya (Principal Software Engineer)',
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
        designation: 'Principal Software Engineer',
        companyName: 'ZoomInfo',
        duration: '2023 November - Present',
        allprojects: [
          {
            project: 'Vortex',
            content: 'Building and architecting a stealth application which serves as a job search and a community career website. This is built as an SSR Hybrid application using NextJS and utilising internal tailwind theming. This is our B2C and B2B website. Taking care of CI/CD, LLD, Observability, analytics and structure.'
          },
          {
            project: 'Frontend Migration (Comparably)',
            content: 'Leading an engineering squad of 4 frontend developers in driving end-to-end architecture and UI migration of the Comparably companies platform from jQuery/Express to Angular 17 and NestJS microservices. Executed AWS-to-GCP cloud migration with Server-Side Rendering (SSR), built modular component libraries, and enforced design patterns. Reduced LCP by up to 70% and CLS scores via deferrable views, optimized TTFB by 300ms, and orchestrated CI/CD pipelines, error tracking, and analytics instrumentation while preserving SEO integrity.'
          },
          {
            project: 'Integrated Recruitment Product',
            content: 'Architecting and delivering full-stack reactive features using NextJS for an integrated recruitment application supporting low-latency, agentic search workflows.'
          },
          {
            project: 'AI Emailer Project',
            content: 'Partnered with platform engineering to design an event-driven AI emailer. Utilized Strategy patterns to decouple core logic for multi-platform consumption and applied HTML event projection via Web Components to eliminate backend coupling—resulting in outbound email volume exceeding initial expectations by 30% in month one and exponential growth after that.'
          },
          {
            project: 'On-page SEO & Security',
            content: 'Led platform security and performance initiatives, implementing JA3/JA4+ fingerprint mitigation to defeat 1.2M daily scraping attacks. Optimized SEO through sitemap segregation, redirect fixes, and cutting JS bundle size by 30%, driving a 70% increase (4M pages) in indexed pages within 3 months.'
          },
          {
            project: 'Developer Productivity & CI',
            content: 'Streamlined build engineering processes and development velocity by resolving Jasmine test flakiness, reducing CI build times from 25 to 8 minutes, and introducing custom ESLint rules to accelerate PR code reviews.'
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
            content: 'Architected edge-level security and XSS vulnerability reporting for Opsgenie via Content Security Policy (CSP) on Global Edge. Prevented TTI degradation on AWS Lambda@Edge using dynamically generated hash attachments for inline scripts. Integrated Sentry error monitoring into Splunk dashboards and mitigated spam attacks by implementing ReCAPTCHA v2 Enterprise with risk-score validation.'
          },
          {
            project: 'Experimental Site Builder',
            content: 'Engineered reusable, high-performance React UI components for drag-and-drop site creation tools. Implemented React Context for isolated component-level state management and reduced media server bandwidth consumption by serving dynamically resized assets on demand.'
          },
          {
            project: 'Build Engineering & Productivity',
            content: 'Optimized build infrastructure pipelines by capping CPU core consumption at 80% to resolve automation bottlenecks. Reduced Docker container image sizes from 20GB to 16GB, updated Webpack localization plugins to achieve 98% message coverage across 250+ translation alerts, and authored a custom Storybook plugin to cut isolated build times by 80%.'
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
            content: `Architected the core flight search and booking flows from legacy shtml/JS to React and NodeJS. Coached the engineering team on implementing complex domain business logic cleanly across NodeJS services and the frontend layer.`,
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
              'Streamlined operational delivery workflows by replacing a 1-day deployment process with a 10-minute automated pipeline using Amazon S3 bucket configurations.',
          },

          {
            project: 'Embedded Results',
            url: '',
            content:
              'Redesigned flight selection and pairing workflows to eliminate UI obstruction and scrolling friction. Delivered an interactive search experience that increased customer conversion on the Search Results Page by 3%.',
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
            content: `Developed real-time risk-analysis and intelligence interfaces using AngularJS, KeyLines graph visualizations, and RESTHeart/MongoDB aggregation layer. Built modular directive-based components with profile-based access control; served as a key engineering showcase adopted by the Singapore Police Department.`,
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
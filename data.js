var resumeData = {
  about: {
    name: 'Kartik',
    email: 'mauryakartik@gmail.com',
    designation: 'Software Engineer',
    currentCity: 'India',
    resumeLink: 'https://9kartik.github.io/resume',
    imgurl:
      './assets/facefront_2023.jpg',
    metaTags: [
      {
        property: 'og:image',
        value:
          'https://miro.medium.com/fit/c/1360/1360/2*6n2RnXGwKcYAEmE2nlcu5w.jpeg',
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
            project :'Frontend Migration',
            content : 'Leading a team of 4 frontend engineers. Architecting the UI Migration of an acquired product\'s subdomain from jQuery+express based code to Angular + nest based code (involves migration from AWS to GCP), along with support of Server Side Rendering and building a first party component design system. Additionally utilised github actions with self hosted runners to host our static storybooks for cross team visibility. Identified threat vectors on our public page using JA3/JA4+ fingerprints to prevent 1.2M/day scraping attacks.'
          },
          {
            project : 'SEO improvements',
            content : 'Led the improvement the SEO of an acquired product using strategies like sitemap segregation, redirect fixes, scraping attack blocking and js resource size reduction by minification. Reducing non-indexed pages by 4M in 3months. Increased indexed pages by 70%.'
          }
        ]
      },
      {
        designation: 'Senior Associate Developer',
        companyName: 'Atlassian',
        duration: '2020 May-2023 October',
        allprojects: [
          {
            project : 'Jira Service Management',
            content : 'Contributed to an experimental drag and drop site builder, owned the image element which involved positioning, resizing, and optimised image upload. Contributed to the Topics feature under JSM Help Center which increased our DAU by 20%, this involved utilising relay (a graphql client library) to provide a WCAG Level AA drag-and-drop interface. On the operational side • improved homepage TTI by 30% by making the frontend assets async. As a part of Build Engineering - Fixed a long failing automation testing CI build pipeline by limiting the core size to 80% which reduced overconsumption of the CPU and also reduced the docker container size from 20GB to 16GB.'
          },
          {
            project :'Frontend Security',
            content : 'Architected XSS(Cross Site Script) vulnerbility reporting on our Opsgenie website via enabling Content Security Policy on Global Edge, enabling sentry to track all such violations. Also helped prevent a spam attack on our login page because of a vulnerable recaptcha engine, I upgraded the recaptcha engine to have a more severe score based recaptcha (this blocked the 100k daily active attacks). I worked on React, AngularJS and Vue while working in the Opsgenie team.'
          },
          {
            project : 'Developer Productivity',
            content : 'Fixed 250+ mid urgency alerts for the third party translations by updating our webpack translation plugin and within 3 weeks we were able to translate 98% of the third party messages. Enabled targetted storybooks, since one storybook build failure was causing the whole local storybook build to fail, wrote a storybook plugin to so that one could run isolated stories which also helped improve the build time by 80%.'
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
            project: 'Offer banner deployment optimisation',
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

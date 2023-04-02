var resumeData = {
  about: {
    name: 'Kartik',
    email: 'mauryakartik@gmail.com',
    designation: 'Software Engineer',
    currentCity: 'India',
    resumeLink: 'https://9kartik.github.io/resume',
    imgurl:
      'https://miro.medium.com/fit/c/1360/1360/2*6n2RnXGwKcYAEmE2nlcu5w.jpeg',
    metaTags: [
      {
        property: 'og:image',
        value:
          'https://miro.medium.com/fit/c/1360/1360/2*6n2RnXGwKcYAEmE2nlcu5w.jpeg',
      },
      {
        property: 'og:description',
        value: 'Kartik Maurya (Software Engineer)',
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
        logo: 'https://img.icons8.com/material-two-tone/344/important-mail.png',
        name: 'mauryakartik@gmail.com',
      },
      {
        url: 'tel:+918310387321',
        logo: 'https://img.icons8.com/android/24/FF0045/cell-phone.png',
        name: '+91-8310387321',
      }
    ],
    otherLinks: [
      {
        url:
          'https://www.youtube.com/watch?v=hUqIHRFJoiE',
        logo: 'https://cdn.iconscout.com/icon/free/png-16/privacy-29-917039.png',
        name: 'YouTube Talk on CSP',
      },
      {
        url:
          'https://chrome.google.com/webstore/detail/alter-videos/ncebpefkldaiogkbhabbcgdoadfhpehj',
        logo:
          'https://icons.iconarchive.com/icons/carlosjj/google-jfk/16/chrome-web-store-icon.png',
        name: 'Chrome Extension [Alter Videos]',
      },
      {
        url:
          'https://play.google.com/store/apps/details?id=com.aakaar.cvt&hl=en',
        logo: 'https://img.icons8.com/bubbles/100/000000/google-play.png',
        name: 'CVT [Android Game]',
      },
      {
        url: 'https://twitter.com/mauryakartik9',
        logo:
          'https://www.shareicon.net/data/256x256/2017/06/22/887584_logo_512x512.png',
        name: 'twitter',
      },
      {
        url: 'https://github.com/9kartik',
        logo:
          'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
        name: 'github.com/9kartik',
      },
      {
        url: 'https://www.webcomponents.org/author/9kartik',
        logo: 'https://web-components-resources.appspot.com/static/logo.svg',
        name: 'webcomponents',
      },
      {
        url: 'https://www.npmjs.com/~ka9',
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnwCG1Vn7-Iky9hdTFUH78kvT7BNjrPQpsPeZ1rIubesRnKWba',
        name: 'npm',
      },
      {
        url: 'https://www.behance.net/kanine',
        logo: 'https://www.behance.net/favicon.ico',
        name: 'behance.net/kanine',
      },
      {
        url: 'https://stackoverflow.com/users/3335941/kanine',
        logo: 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico',
        name: 'stackoverflow',
      },
      {
        url: 'https://c00dles.blogspot.com/',
        logo: 'https://www.blogger.com/favicon.ico',
        name: 'Computational Arts',
      }
    ],
  },
  projects: {
    // three columns per project
    heading: 'Professional Projects',
    topics: [
      {
        designation: 'Senior Associate Developer',
        companyName: 'Atlassian',
        duration: '2020 May-Present',
        allprojects: [
          {
            project : 'Jira Service Management',
            content : 'Have contributed to the Topics feature under JSM Help Center which increased our DAU by 20%. Also on the operational side - when the TTI of our certain entry point pages was really slow, I improved it by 30% by making the frontend assets async. Another one is that I unblocked a then failing deployment build pipeline by limiting the core size to 80% which reduced overconsumption of the CPU and also reduced the docker container size from 20GB to 16GB.'
          },
          {
            project :'Frontend Security',
            content : 'Enabled possible XSS(Cross Site Script) vulnerbility reporting on our Opsgenie website via enabling Content Security Policy on Global Edge. Also there was a severe attack happening on our login page because of an older recaptcha engine, I upgraded the recaptcha engine to have a more severe score based recaptcha (this blocked the 100k daily active attacks).'
          },
          {
            project : 'Developer Productivity',
            content : 'The storybooks were breaking a lot of developer experience, one storybook build failure was causing the whole local build to fail, I fixed the storybook server to cater to custom stories so they could run isolated and also improved the build time by 80%.'
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
      },
      {
        designation: 'Android Developer Intern',
        companyName: 'TEKSTRA TECHNOLOGIES',
        duration: '2013 May - June',
        allprojects: [
          {
            project: 'Wait For Me',
            content: `The android camera app would wait for the number of faces to take a picture, good for a group photo! 
                        `,
          },
        ],
      },
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
        name: 'Unit Testing: Jest, react-testing-library, Enzyme',
        rating: 3,
      },
      {
        name: 'End-to-end Testing: Cypress',
        rating: 3,
      },
      { 
        name: 'GraphQL (relay)',
        rating: 2
      },
      {
        name: 'Backbone JS',
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
        name: 'Ionic + AngularJS',
        rating: 3,
      },
      {
        name: 'ReactJS',
        rating: 2,
      },
      {
        name: 'enzyme',
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
    ],
  },
};

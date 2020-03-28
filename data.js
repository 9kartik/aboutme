var resumeData = {
    'about' :{
        name : 'Kartik Maurya',
        email : 'mauryakartik@gmail.com',
        designation : 'Software Engineer (Front-end)',
        currentCity : 'Bengaluru, India',
        resumeLink: 'https://9kartik.github.io/resume',
        imgurl: 'https://avatars0.githubusercontent.com/u/2690844',
        otherLinks :[
            {
                url : 'mailto:someone@example.com?Subject=Mailing through your resume link',
                logo : 'https://img.icons8.com/material-two-tone/344/important-mail.png',
                name : 'mauryakartik@gmail.com'
            },
            {
                url : 'tel:+918310387321',
                logo : 'https://img.icons8.com/android/24/FF0045/cell-phone.png',
                name : '+91-8310387321'
            },
            {
                url : 'tel:+91-9535680359',
                logo : 'https://img.icons8.com/android/24/FF5500/cell-phone.png',
                name : '+91-9535680359'
            },
            {
                url : 'https://www.linkedin.com/in/kartik-maurya-692aa892/',
                logo : 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg',
                name : 'bit.ly/30AjmAF'
            },
            {
                url : 'https://github.com/9kartik',
                logo : 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
                name : 'github.com/9kartik'
            },
            {
                url : 'https://www.webcomponents.org/author/9kartik',
                logo : 'https://web-components-resources.appspot.com/static/logo.svg',
                name : 'webcomponents'
            },
            {
                url : 'https://www.npmjs.com/~ka9',
                logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnwCG1Vn7-Iky9hdTFUH78kvT7BNjrPQpsPeZ1rIubesRnKWba',
                name : 'npm'
            },
            {
                url : 'https://www.behance.net/kanine',
                logo : 'https://www.behance.net/favicon.ico',
                name : 'behance.net/kanine'
            },
            {
                url : 'https://stackoverflow.com/users/3335941/kanine',
                logo : 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico',
                name : 'stackoverflow'
            },
            {
                url : 'https://c00dles.blogspot.com/',
                logo : 'http://www.blogger.com/favicon.ico',
                name : 'Computational Arts'
            },
            {
                url : 'https://chrome.google.com/webstore/detail/alter-videos/ncebpefkldaiogkbhabbcgdoadfhpehj',
                logo : 'http://icons.iconarchive.com/icons/carlosjj/google-jfk/128/chrome-web-store-icon.png',
                name : 'Chrome Extension [Alter Videos]'
            },
            {
                url : 'https://play.google.com/store/apps/details?id=com.aakaar.cvt&hl=en',
                logo : 'https://img.icons8.com/bubbles/100/000000/google-play.png',
                name : 'CVT [Android Game]'
            }
        ]
    },
    'projects' : { // three columns per project
        heading : 'Professional Projects',
        topics : [
            {
                designation : 'UI Engineer',
                companyName : 'Cleartrip [Bengaluru, India]',
                duration : '2017 May-Present',
                allprojects:[
                {
                    project : 'Site Revamp to React',
                    content : `Migrating our search results page from shtml and javascript to React. Bridging the backend and frontend gap. Mentoring the team through the business logic, so it could be implemented better on NodeJs and the UI layer.`,
                    technologies : [
                    {
                            name: 'ReactJS'
                    },    
                    {
                        name: 'NodeJS'
                    }
                    ]
                },
                {
                    project : 'Quick offer updation',
                    content : 'Reduced a one day deployment procedure to a 10min procedure utlizing the Amazon S3 buckets'
                },

                {
                    project : 'Embedded Results',
                    url : '',
                    content : 'Existing expanded view was obstructive to the user, as users had to scroll through to see similar flights and combinations. Improved the UI to give the choice to pair flights.',
                    technologies : [
                        {
                            name : 'javascript',
                            rating : 4
                        },
                        {
                            name : 'jquery',
                            rating : 4
                        },
                        {
                            name : 'mustachejs',
                            rating : 4
                        }
                    ]
                },
                {
                    project : 'Cross-sell: City Based Advertisement',
                    content : 'Destination related activities and hotels suggestions on your flight ticket.',
                    technologies : [
                        {
                            name: 'mustachejs(customised)'
                        },
                        {
                            name: 'lodash'
                        }
                    ]
                },
                {
                    project : 'Flexible user based searches',
                    content : 'Implemented LRU based browser storage so it tells you cheapest fare combinations for your recent searches.',
                    technologies : [
                        {
                            name : 'mustache.js'
                        },
                        {
                            name : 'momentjs'
                        },
                        {
                            name : 'Backbone js'
                        }
                    ]
                },
                {
                    project : 'Click-jack Proofing',
                    content : 'Click-jack reports were taken into account and a solution was provided',
                    technologies : [
                        {
                            name : 'javascript'
                        }
                    ]
                }]
            },
            {
                designation : 'Software Engineer',
                companyName: 'Unisys [Bengaluru, India]',
                duration: '2014 August - 2017 May',
                allprojects:[
                    {
                        project : 'Linesight [Border Security]',
                        content : `Risk analysis using machine learning and related entities. I built the interface using mainly AngularJS , utilizing directives to create a lot of reusable components. It involved user profile based access. Interacting with graph db for the related data and plotting it using keylines and AngularJS - Linesight mongodb aggregation setup [using RestHeart]: complex aggregations in mongodb like group flights by every x minutes`,
                        technologies : [
                        {
                            name: 'AngularJS'
                        },    
                        {
                            name: 'momentjs'
                        },
                        {
                            name: 'keylines'
                        },
                        {
                            name: 'underscore js'
                        },
                        {
                            name: 'RestHeart'
                        }
                        ]
                    },
                    {
                        project : 'Transport Management System',
                        content : `Responsive UI development: Introduced searchable table headers in the website.`,
                        technologies : [
                        {
                            name: 'SCSS'
                        },    
                        {
                            name: 'javascript'
                        }
                        ]
                    },
                    {
                        project : 'Banking PoC Ionic framework',
                        content : `Cross Platform Mobile Web app using ionic framework to audit a middleware Kinvey `,
                        technologies : [
                        {
                            name: 'Ionic 2'
                        },
                        {
                            name: 'Kinvey'
                        }
                        ]
                    }
                ]
            },
            {
                designation : 'Android Developer Intern',
                companyName: 'TEKSTRA TECHNOLOGIES',
                duration: '2013 May - June',
                allprojects:[
                    {
                        project : 'Wait For Me',
                        content : `The android camera app would wait for the number of faces to take a picture, good for a group photo! 
                        `
                    }]
                }
        ]
    },
    'education':{
        heading: 'Education',
        qualifications:[
            {
                institute: 'Manipal Institute of Technology (Udupi, Karnataka, India)',
                duration: '2010 - 2014',
                degree: 'Bachelor of Engineering (BE)',
                specialization: 'Computer Science and Engineering'
            }
        ]
    },
    'skills' : {
        heading : 'Skills',
        topics : [
            {
                name : 'Front-end Web Design',
                rating: 3
            },
            {
                name : 'Backbone JS',
                rating: 3
            },
            {
                name : 'MongoDB Aggregations',
                rating: 2
            },
            {
                name : 'mustacheJS',
                rating: 3
            },
            {
                name : 'lodash',
                rating: 4
            },
            {
                name : 'p5.js',
                rating: 3
            },
            {
                name : 'Ionic + AngularJS',
                rating: 3
            },
            {
                name : 'ReactJS',
                rating: 2
            },
            {
                name : 'Vanilla Javascript',
                rating: 3
            },
            {
                name : 'CSS',
                rating: 3
            }

        ]
    }
}
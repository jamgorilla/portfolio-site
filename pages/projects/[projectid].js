import { useRouter } from 'next/router';
//import { getStaticProps } from '..';
import ProjectDetail from '../../components/projectList/ProjectDetail';


function IndividualProjectPage(props) {
    const router = useRouter();

    const projectid = parseInt(router.query.projectid);


    // send a request to the backend API
    // to fetch the news item with projectid

    return ( 
        <ProjectDetail 
            image1={ props.projects.image1 }
            image2={ props.projects.image2 }
            title={ props.projects.title }
            projectid={ projectid }
            projects={ props.projectsfull }
            webBuilders={ props.projects.webBuilders }
            exampleOf={ props.projects.exampleOf }
            webBuildDescription={ props.projects.webBuildDescription }
            webLiveUrl={ props.projects.webLiveUrl }
            webGitRepo={ props.projects.webGitRepo } 
            webSiteList={ props.projects.webSiteList }
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                projectid: "1",
            },
        },
        {
            params: {
                projectid: "2",
            }
        },
        {
            params: {
                projectid: "3",
            }
        },
        {
            params: {
                projectid: "4",
            }
        }
        ]
    }
}

export async function getStaticProps(context) {

    const projectArrayOfObject = [
        {
            title: "Photosnap",
            id: "1",
            image1: '/../public/assets/photosnap-hero-section.jpg',
            image2: '/../public/assets/photosnap-list-section.jpg',
            homepageContent: 'Photo and story sharing application for young professionals. Photo and story sharing application for young professionals.Photo and story sharing application for professionals',
            webBuilders: [['Developers', 'James Murphy'], ["Design", "Frontend Mentor"], ["Client", "Personal Project"], ["Year", "2022"]],
            exampleOf: "Front End Development Example",
            webBuildDescription: "This multipage layout was a personal project build with Next.js. The design was taken from Frontend Mentor. This was a good opportunity to test front end skills like Grid, Flexbox and Sass.",
            webLiveUrl: 'https://photosnap-website.herokuapp.com/',
            webGitRepo: "https://github.com/jamgorilla/photosnap-website",
            webSiteList: [
                {title: "Development Tools", 
                    explanation: "This site was built using web development framework Next.js to allow server side rendering and as the front end framework. Used Next.js for",
                    image1: '/../public/assets/photosnap-hero-section.jpg',
                    image2: '/../public/assets/next-sass-html-figma.png'
                },
                {title: "Hosting and Process", 
                    explanation: "For hosting I used heroku for workflow management and project management used trello and for version control used Github using a regular process of continuous integration.",
                    image1: '/../public/assets/photosnap-hero-section.jpg',
                    image2: '/../public/assets/heroku-trello-github.png'
                }]
          },{
            title: "African Development Choices",
            id: "2",
            image1: '/../public/assets/ADC-homepage-v3.jpg',
            image2: '/../public/assets/ADC-second-page-v2.jpg',
            homepageContent: 'UK based social enterprise with a mission to empower local communities to make more informed choices in the management of public resources.',
            webBuilders: [['Developers', 'James Murphy'], ["Design", "Laura Bizzey"], ["Client", "African Development Choices"], ["Year", "2020"]],
            exampleOf: "Wordpress Full-Stack Development",
            webBuildDescription: "The client is a UK based social enterprise established in 2018. They had an existing website but it had become outdated and unmanageable so they were looking to update the design as well as make the back end more accesssible for self management by the client. For this reason Wordpress was selected as the development stack of choice due to it's user friendly process of updating assets and it's owner managed admin system. I collaborated with an inhouse web designer Laura along with various other stakeholders on design and content. We launched the new website in August 2020.",
            webLiveUrl: 'https://africandevelopmentchoices.org/',
            webGitRepo: "N/A held with Client",
            webSiteList: [
                {title: "Development Tools", 
                    explanation: "The front end of this site was developed in HTML, CSS and Javascript using a customised Wordpress theme. PHP is used as a server-side scripting language to transfer data between it's MySQL database. Adobe XD was used as the design template for the creation of the UI.",
                    image1: '/../public/assets/ADC-homepage-v3.jpg',
                    image2: '/../public/assets/ADC-develop-tools.jpg'
                },
                {title: "Hosting and Process", 
                    explanation: "A2 Hosting was selected to for workflow management and project management used trello and for version control used Github using a regular process of continuous integration ",
                    image1: '/../public/assets/ADC-homepage-v3.jpg',
                    image2: '/../public/assets/ADC-deploy-tools.jpg'
                }]

          },{
            title: "Space Tourism",
            id: "3",
            image1: '/../public/assets/space-tourism-homepage-v2.png',
            image2: '/../public/assets/space-tourism-planets-v2.png',
            homepageContent: 'Photo and story sharing application for young professionals. Photo and story sharing application for young professionals.Photo and story sharing application for professionals',
            webBuilders: [['Developers', 'James Murphy'], ["Design", "Frontend Mentor"], ["Client", "Personal Project"], ["Year", "2022"]],
            exampleOf: "Front End Development Example",
            webBuildDescription: "This multipage layout was a personal project build with Next.js. The design was taken from Frontend Mentor. This was a good opportunity to test front end skills like Grid, Flexbox and Sass.",
            webLiveUrl: 'https://space-tourism-node.herokuapp.com/views/index',
            webGitRepo: "https://github.com/jamgorilla/space-tourism-node-version",
            webSiteList: [
                {title: "Development Tools", 
                    explanation: "This site was built using web development framework Next.js to allow server side rendering and as the front end framework. Used Next.js for",
                    image1: '/../public/assets/photosnap-hero-section.png',
                    image2: '/../public/assets/next-sass-html-figma.png'
                },
                {title: "Hosting and Process", 
                    explanation: "For hosting I used heroku for workflow management and project management used trello and for version control used Github using a regular process of continuous integration ",
                    image1: '/../public/assets/photosnap-hero-section.png',
                    image2: '/../public/assets/heroku-trello-github.png'
                }]

          },{
            title: "Countries List",
            id: "4",
            image1: '/../public/assets/rest-countries-app-home-v2.png',
            image2: '/../public/assets/rest-countries-app.png',
            homepageContent: 'Photo and story sharing application for young professionals. Photo and story sharing application for young professionals.Photo and story sharing application for professionals',
            webBuilders: [['Developers', 'James Murphy'], ["Design", "Frontend Mentor"], ["Client", "Personal Project"], ["Year", "2022"]],
            exampleOf: "Front End Development Example",
            webBuildDescription: "This multipage layout was a personal project build with Next.js. The design includes a searchable input list which utilises the REST Countries api to produce a list of results based on Users search criteria. It also includes Dark and Light modes for late night viewing and to reduce energy consumption. The design was taken from Frontend Mentor.",
            webLiveUrl: 'https://rest-countries-application.herokuapp.com/',
            webGitRepo: "https://github.com/jamgorilla/rest-countries-api",
            webSiteList: [
                {title: "Development Tools", 
                    explanation: "This site was built using web development framework Next.js to allow server side rendering and as the front end framework. Used Next.js for",
                    image1: '/../public/assets/photosnap-hero-section.png',
                    image2: '/../public/assets/next-sass-html-figma.png'
                },
                {title: "Hosting and Process", 
                    explanation: "For hosting I used heroku for workflow management and project management used trello and for version control used Github using a regular process of continuous integration ",
                    image1: '/../public/assets/photosnap-hero-section.png',
                    image2: '/../public/assets/heroku-trello-github.png'
                }]
          }
      ]

    const projectid = context.params.projectid; 
    
    return {
        props: {
          projects: projectArrayOfObject[projectid-1],
          projectsfull: projectArrayOfObject
        }
      }
}


export default IndividualProjectPage;
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
        }
        ]
    }
}

export async function getStaticProps(context) {

    const projectArrayOfObject = [
        {
            title: "Photosnap",
            id: "1",
            image1: '/../public/assets/photosnap-hero-section.png',
            image2: '/../public/assets/photosnap-list-section.png',
            homepageContent: 'Photo and story sharing application for young professionals. Photo and story sharing application for young professionals.Photo and story sharing application for professionals',
            webBuilders: [['Developers', 'James Murphy'], ["Design", "Frontend Mentor"], ["Client", "Personal Project"], ["Year", "2022"]],
            exampleOf: "Front End Development Example",
            webBuildDescription: "This was a personal project to develop front end exerience with a multi page layout. The design was taken from Frontend Mentor. This was a personal project to develop front end exerience with a multi page layout. The design was taken from Frontend Mentor. This was a personal project to develop front end exerience with a multi page layout. The design was taken from Frontend Mentor.",
            webLiveUrl: 'https://photosnap-website.herokuapp.com/',
            webGitRepo: "https://github.com/jamgorilla/photosnap-website",
            webSiteList: [
                {title: "Development Tools", 
                    Explanation: "This site was built using web development framework Next.js to allow server side rendering and as the front end framework. Used Next.js for",
                    image1: '/../public/assets/photosnap-hero-section.png',
                    image2: '/../public/assets/photosnap-list-section.png'
                },
                {title: "Hosting and Process", 
                    Explanation: "For hosting I used heroku for workflow management and project management used trello and for version control used Github using a regular process of continuous integration ",
                    image1: '/../public/assets/photosnap-hero-section.png',
                    image2: '/../public/assets/photosnap-list-section.png'
                }]
          },{
            title: "Space Tourism",
            id: "2",
            image1: '/../public/assets/space-tourism-homepage.png',
            image2: '/../public/assets/space-tourism-planets.png',
            homepageContent: 'Photo and story sharing application for young professionals. Photo and story sharing application for young professionals.Photo and story sharing application for professionals',
            webBuilders: [['Developers', 'James Murphy'], ["Design", "Frontend Mentor"], ["Client", "Personal Project"], ["Year", "2022"]],
            exampleOf: "Front End Development Example",
            webBuildDescription: "This was a personal project to test etc with design taken from Frontend Mentor ",
            webLiveUrl: 'https://space-tourism-node.herokuapp.com/views/index',
            webGitRepo: "https://github.com/jamgorilla/space-tourism-node-version",
            webSiteList: [["Title", "Development Tools"], ["Explanation", "PPPP"],["Title", "Development Tools"], ["Explanation", "PPPP"],
            ["Title", "Development Tools"], ["Explanation", "PPPP"]]

          },{
            title: "Countries List",
            id: "3",
            image1: '/../public/assets/rest-countries-app-home.png',
            image2: '/../public/assets/rest-countries-app.png',
            homepageContent: 'Photo and story sharing application for young professionals. Photo and story sharing application for young professionals.Photo and story sharing application for professionals',
            webBuilders: [['Developers', 'James Murphy'], ["Design", "Frontend Mentor"], ["Client", "Personal Project"], ["Year", "2022"]],
            exampleOf: "Front End Development Example",
            webBuildDescription: "This was a personal project to test etc with design taken from Frontend Mentor ",
            webLiveUrl: 'https://rest-countries-application.herokuapp.com/',
            webGitRepo: "https://github.com/jamgorilla/rest-countries-api",
            webSiteList: [["Title", "Development Tools"], ["Explanation", "PPPP"],["Title", "Development Tools"], ["Explanation", "PPPP"],
            ["Title", "Development Tools"], ["Explanation", "PPPP"]]
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
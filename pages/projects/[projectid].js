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
            image2: '/../public/assets/photosnap-list-section.png'
          },{
            title: "Space Tourism",
            id: "2",
            image1: '/../public/assets/space-tourism-homepage.png',
            image2: '/../public/assets/space-tourism-planets.png'
          },{
            title: "Countries List",
            id: "3",
            image1: '/../public/assets/rest-countries-app-home.png',
            image2: '/../public/assets/rest-countries-app.png'
          }
      ]

    const projectid = context.params.projectid; 
    
    return {
        props: {
          projects: projectArrayOfObject[projectid-1]
        }
      }
}


export default IndividualProjectPage;
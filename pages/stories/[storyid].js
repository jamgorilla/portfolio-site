import { useRouter } from 'next/router';
//import { getStaticProps } from '..';
import StoriesDetail from '../../components/stories/StoriesDetail';


function IndividualStoryPage(props) {
    const router = useRouter();

    const storyid = parseInt(router.query.storyid);

    

    // send a request to the backend API
    // to fetch the news item with storyid

    return ( 
        <StoriesDetail 
            image={ props.stories.image }
            title={ props.stories.title }
            author={ props.stories.author }
            storyid={ storyid }
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                storyid: "1",
            },
        },
        {
            params: {
                storyid: "2",
            }
        },
        {
            params: {
                storyid: "3",
            }
        },
        {
            params: {
                storyid: "4",
            }
        },
        {
            params: {
                storyid: "5",
            }
        },
        {
            params: {
                storyid: "6",
            }
        },
        {
            params: {
                storyid: "7",
            }
        },
        {
            params: {
                storyid: "8",
            }
        }
        ]
    }
}

export async function getStaticProps(context) {

    const storyArrayOfObject = [
        {
          title: "The Moauntains",
          author: "John Appleseed",
          id: "1",
          image: '/assets/stories/desktop/mountains.jpg',
          content: "ipsum lorum"
        },{
          title: "Sunset Cityscapes",
          author: "John Appleseed",
          id: "2",
          image: '/assets/stories/desktop/cityscapes.jpg',
          content: "ipsum lorum"
        },{
          title: "18 Days Voyage",
          author: "John Appleseed",
          id: "3",
          image: '/assets/stories/desktop/18-days-voyage.jpg',
          content: "ipsum lorum"
        },{
          title: "Architecturals",
          author: "John Appleseed",
          id: "4",
          image: '/assets/stories/desktop/architecturals.jpg',
          content: "ipsum lorum"
        },{
          title: "World Tour 2019",
          author: "John Appleseed",
          id: "5",
          image: '/assets/stories/desktop/world-tour.jpg',
          content: "ipsum lorum"
        },{
          title: "Unforeseen Corners",
          author: "John Appleseed",
          id: "6",
          image: '/assets/stories/desktop/unforeseen-corners.jpg',
          content: "ipsum lorum"
        },{
          title: "Kind on Africa Part 2",
          author: "John Appleseed",
          id: "7",
          image: '/assets/stories/desktop/king-on-africa.jpg',
          content: "ipsum lorum"
        },{
          title: "The Trip to Nowhere",
          author: "John Appleseed",
          id: "8",
          image: '/assets/stories/desktop/trip-to-nowhere.jpg',
          content: "ipsum lorum"
        }
      ]

    const storyid = context.params.storyid; 
    
    return {
        props: {
          stories: storyArrayOfObject[storyid-1]
        }
      }
}


export default IndividualStoryPage;
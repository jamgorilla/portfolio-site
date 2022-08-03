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
            subtitle={ props.stories.subtitle }
            date={ props.stories.date }
            author={ props.stories.author }
            content={ props.stories.content }
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
          title: "The Mountains",
          subtitle: "Escape to the Hills",
          date: "April 16th 2020",
          author: "John Appleseed",
          id: "1",
          image: '/assets/stories/desktop/mountains.jpg',
          content: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
          title: "Sunset Cityscapes",
          subtitle: "Summer in the City",
          date: "April 14th 2020",
          author: "John Appleseed",
          id: "2",
          image: '/assets/stories/desktop/cityscapes.jpg',
          content: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
          title: "18 Days Voyage",
          subtitle: "Beyond the thunderdome",
          date: "April 11th 2020",
          author: "John Appleseed",
          id: "3",
          image: '/assets/stories/desktop/18-days-voyage.jpg',
          content: "ipsum lorum"
        },{
          title: "Architecturals",
          subtitle: "Buildings without boundaries",
          date: "April 9th 2020",
          author: "John Appleseed",
          id: "4",
          image: '/assets/stories/desktop/architecturals.jpg',
          content: "ipsum lorum"
        },{
          title: "World Tour 2019",
          subtitle: "Circling the Globe",
          date: "April 7th 2020",
          author: "John Appleseed",
          id: "5",
          image: '/assets/stories/desktop/world-tour.jpg',
          content: "ipsum lorum"
        },{
          title: "Unforeseen Corners",
          subtitle: "Forgotten Wilderness",
          date: "April 3rd 2020",
          author: "John Appleseed",
          id: "6",
          image: '/assets/stories/desktop/unforeseen-corners.jpg',
          content: "ipsum lorum"
        },{
          title: "King on Africa Part 2",
          subtitle: "Last March",
          date: "March 29th 2020",
          author: "John Appleseed",
          id: "7",
          image: '/assets/stories/desktop/king-on-africa.jpg',
          content: "ipsum lorum"
        },{
          title: "The Trip to Nowhere",
          subtitle: "Come as you are",
          date: "March 21st 2020",
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
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
        },
        { 
            params: {
                storyid: "9",
            }
        },
        {
            params: {
                storyid: "10",
            }
        },
        {
            params: {
                storyid: "11",
            }
        },
        {
            params: {
                storyid: "12",
            }
        },
        {
            params: {
                storyid: "13",
            }
        },
        {
            params: {
                storyid: "14",
            }
        },
        {
            params: {
                storyid: "15",
            }
        },
        {
            params: {
                storyid: "16",
            }
        }
        ]
    }
}

export async function getStaticProps(context) {

    const storyArrayOfObject = [
        {
          title: "The Mountains",
          subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
          author: "John Appleseed",
          id: "1",
          date: "19th May 2022",
          image: '/assets/stories/desktop/mountains.jpg',
          content: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
          title: "Sunset Cityscapes",
          subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
          author: "John Appleseed",
          id: "2",
          date: "16th April 2022",
          image: '/assets/stories/desktop/cityscapes.jpg',
          content: "This time I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
          title: "18 Days Voyage",
          subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
          author: "John Appleseed",
          id: "3",
          date: "11th May 2019",
          image: '/assets/stories/desktop/18-days-voyage.jpg',
          content: "Great times without the mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
          title: "Architecturals",
          subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
          author: "John Appleseed",
          id: "4",
          date: "20th December 2022",
          image: '/assets/stories/desktop/architecturals.jpg',
          content: "For this time I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
          title: "World Tour 2019",
          subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
          author: "John Appleseed",
          id: "5",
          date: "1st May 2023",
          image: '/assets/stories/desktop/world-tour.jpg',
          content: "My time to explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
          title: "Unforeseen Corners",
          subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
          author: "John Appleseed",
          id: "6",
          date: "3rd October 2022",
          image: '/assets/stories/desktop/unforeseen-corners.jpg',
          content: "We have time to show you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
          title: "Kind on Africa Part 2",
          subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
          author: "John Appleseed",
          id: "7",
          date: "2nd June 2023",
          image: '/assets/stories/desktop/king-on-africa.jpg',
          content: "There is always time to tell you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
          title: "The Trip to Nowhere",
          subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
          author: "John Appleseed",
          id: "8",
          date: "11th September 2022",
          image: '/assets/stories/desktop/trip-to-nowhere.jpg',
          content: "Quite time allows us to forget this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
        },{
            title: "Rage of the Sea",
            subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
            author: "John Appleseed",
            id: "9",
            date: "19th May 2022",
            image: '/assets/stories/desktop/rage-of-the-sea.jpg',
            content: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
          },{
            title: "Running Free",
            subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
            author: "John Appleseed",
            id: "10",
            date: "16th April 2022",
            image: '/assets/stories/desktop/running-free.jpg',
            content: "This time I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
          },{
            title: "Behind the Waves",
            subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
            author: "John Appleseed",
            id: "11",
            date: "11th May 2019",
            image: '/assets/stories/desktop/behind-the-waves.jpg',
            content: "Great times without the mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
          },{
            title: "Calm Waters",
            subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
            author: "John Appleseed",
            id: "12",
            date: "20th December 2022",
            image: '/assets/stories/desktop/calm-waters.jpg',
            content: "For this time I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
          },{
            title: "The Milky Way",
            subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
            author: "John Appleseed",
            id: "13",
            date: "1st May 2023",
            image: '/assets/stories/desktop/milky-way.jpg',
            content: "My time to explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
          },{
            title: "Night of the Dark Forest",
            subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
            author: "John Appleseed",
            id: "14",
            date: "3rd October 2022",
            image: '/assets/stories/desktop/dark-forest.jpg',
            content: "We have time to show you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
          },{
            title: "Somwarpet's Beauty",
            subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
            author: "John Appleseed",
            id: "15",
            date: "2nd June 2023",
            image: '/assets/stories/desktop/somwarpet.jpg',
            content: "There is always time to tell you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
          },{
            title: "Land of Dreams",
            subtitle: "Explore the world of tall hills. An epic journey in the heart of the Nepalese mountains. Told by one man and his trusty sidekick",
            author: "John Appleseed",
            id: "16",
            date: "11th September 2022",
            image: '/assets/stories/desktop/land-of-dreams.jpg',
            content: "Quite time allows us to forget this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
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
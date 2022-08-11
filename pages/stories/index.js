import Link from 'next/link';
import Image from 'next/image'
import moons from '../../public/assets/stories/desktop/moon-of-appalacia.jpg' 
import { Fragment } from 'react';
import StoriesList from '../../components/stories/StoriesList';
import Invite from '../../components/invite/Invite';


function Stories( props ) {
    
    return <Fragment>
      <div className='featured-story-container' >
          <Image
              className='featured-story-image'
              src={ moons }
              alt="Should be image"
              layout='fill'
              objectFit='cover'
              />
          <div className='featured-story-text'>
              <h4>Last month featured story</h4>
              <h1>Hazy full moon of the appalacia</h1>
              <div className='feature-date-n-title-container'>
              <p>March 2nd 2020</p>
              <p className='feature-author'>by John Appleseed</p>
              </div>
              <p className='feature-story-content'>The dissected plateau area, while not actually made up of geological mountains, is popularly called &quot;mountains,&quot; especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
              <Invite />
          </div>
        </div>
        <StoriesList story={ props.stories }/>
        </Fragment>
}

export async function getStaticProps() {
    // fetch data from an API
  
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
  
    return {
      props: {
        stories: storyArrayOfObject
      }
    }
  }
  

export default Stories;
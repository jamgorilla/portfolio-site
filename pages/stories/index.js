import Link from 'next/link';
import Image from 'next/image'
import moons from '../../public/assets/stories/desktop/moon-of-appalacia.jpg' 
import { Fragment } from 'react';
import StoriesList from '../../components/stories/StoriesList';

function Stories( props ) {
    
    return <Fragment>
        <Image 
            className='featured-story-image'
            src={ moons }
            width="1440px"
            height="650px"
            alt="Should be image"
            layout='responsive'
        />
        <div className='featured-story-text'>
            <h4>Last month featured story</h4>
            <h1>Hazy full moon of the appalacia</h1>
            <p>March 2nd 2020</p>
            <p><strong>by John Appleseed</strong></p>
            <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called &quot;mountains,&quot; especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
        </div>
        <StoriesList story={ props.stories }/>
        <ul>
            <li><Link href='/stories/Mountains'>Mountains</Link></li>
            <li><Link href='/stories/Sunset'>Sunset</Link></li>
        </ul>
        </Fragment>
}

export async function getStaticProps() {
    // fetch data from an API
  
    const storyArrayOfObject = [
      {
        title: "The Mountains",
        author: "John Appleseed",
        id: "1",
        image: '/assets/stories/desktop/mountains.jpg',
        content: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee"
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
  
    return {
      props: {
        stories: storyArrayOfObject
      }
    }
  }
  

export default Stories;
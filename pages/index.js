import Head from 'next/head'
import lake from '../starter-code/assets/home/desktop/create-and-share.jpg' 
import laptop from '../starter-code/assets/home/desktop/beautiful-stories.jpg'
import camera from '../starter-code/assets/home/desktop/designed-for-everyone.jpg'
import arrow from '../starter-code/assets/shared/desktop/arrow.svg' 
import Image from 'next/image'
import Link from 'next/link'
import StoriesList from '../components/stories/StoriesList.js'
import Invite from '../components/invite/Invite.js'



function Home(props) {



  return (
    <div>
      <Head>
        <title>PHOTOSNAP</title>
        <meta name="description" content="Photo and story sharing platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main>
        <div className='section-container'>
          <div className='right-image-container'>

          <Image 
              className='lake-photographer-picture section-picture'
              src={ lake }  
              layout='responsive' 
              alt="man standing by lake"/>

          </div>
          <div className='text-box text-box-left black-text-container'>
            <h1>
              Create and share your photo Stories
            </h1>
            <p>
              Photosnap is a platform for photographers and visual storytellers. We make it 
              easy to share photos, tell stories and connect with others.
            </p>
            <Invite />
          </div>
        </div> {/* section container */}

        <div className='section-container'>
        <div className='left-image-container'>

        <Image 
            className='laptop-on-desk-picture section-picture'
            src={ laptop }  
            layout='responsive' 
            alt="man standing by lake"/>

        </div>
        <div className='text-box text-box-right white-text-container'>
          <h1>
          Beautiful stories every time
          </h1>
          <p>
            We provide design templates to ensure your stories look terrific. Easily add 
            photos, text, embed maps and media from other networks. Then share your story 
            with everyone.
          </p>
          <div className='view-stories-flex-container'>
              <Link href="/stories" className='stories-link'><h4>View the stories</h4></Link>
              <Image 
                layout="fixed" 
                width="50px" 
                height="15px" 
                alt="arrow"
                className='arrow' 
                src={ arrow }/>
            </div>
        </div>
      </div> {/* section container */}

      <div className='section-container'>
        <div className='right-image-container'>

        <Image 
            className='laptop-on-desk-picture section-picture'
            src={ camera }  
            layout='responsive' 
            alt="man standing by lake"/>

        </div>
        <div className='text-box text-box-left white-text-container'>
          <h1>
          Designed for everyone
          </h1>
          <p>
          Photosnap can help you create stories that resonate with your audience.  Our 
          tool is designed for photographers of all levels, brands, businesses you name it.
          </p>
          <div className='view-stories-flex-container'>
              <Link href="/stories" className='stories-link'><h4>View the stories</h4></Link>
              <Image 
                layout="fixed" 
                width="50px" 
                height="15px" 
                alt="arrow"
                className='arrow' 
                src={ arrow }/>
            </div>
        </div>
      </div> {/* section container */}

      <StoriesList story={ props.stories } />

      <div className='features-container'>
        <div className='single-feature-container'>
          <Image 
            src="/assets/features/desktop/responsive.svg" 
            alt="responsive" 
            width="72px"
            height="72px"
            />
            <h4>100% Responsive</h4>
            <p>No matter which the device you’re on, our site is fully responsive and stories 
                look beautiful on any screen.</p>
        </div>
        <div className='single-feature-container'>
          <div className='image-container'>
            
          <Image 
            src="/assets/features/desktop/no-limit.svg" 
            alt="responsive" 
            width="72px"
            height="36px"
            className='no-limit'
            />
            </div>
            <h4>No Photo Upload Limit</h4>
            <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and 
                share all of your stories in one go.</p>
            </div>
            <div className='single-feature-container'>
              <Image 
                src="/assets/features/desktop/embed.svg" 
                alt="responsive" 
                width="71px"
                height="72px"
                />
                <h4>Available to Embed</h4>
                <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
                    Google Maps, and more.</p>
            </div>

      </div> {/* features-container */}


      </main>

    </div>
  )
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


export default Home;
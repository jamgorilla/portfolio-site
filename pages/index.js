import Head from 'next/head'
import lake from '../starter-code/assets/home/desktop/create-and-share.jpg' 
import laptop from '../starter-code/assets/home/desktop/beautiful-stories.jpg'
import camera from '../starter-code/assets/home/desktop/designed-for-everyone.jpg'
import mountain from '../starter-code/assets/stories/desktop/mountains.jpg'

import arrow from '../starter-code/assets/shared/desktop/arrow.svg' 
import Image from 'next/image'
import Link from 'next/link'
import StoriesList from '../components/stories/StoriesList.js'


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
            <div className='invite-flex-container'>
              <Link href="/pricing" className='invite-link'><h4>Get an invite</h4></Link>
              <Image 
                layout="fixed" 
                width="50px" 
                height="15px" 
                className='arrow'
                alt="arrow" 
                src={ arrow }/>
            </div>
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


export default Home;
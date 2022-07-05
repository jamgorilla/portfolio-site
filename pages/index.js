import Head from 'next/head'
import MainNavigation from '../components/mainNavigation/MainNavigation.js'
import lake from '../starter-code/assets/home/desktop/create-and-share.jpg' 
import laptop from '../starter-code/assets/home/desktop/beautiful-stories.jpg'
import camera from '../starter-code/assets/home/desktop/designed-for-everyone.jpg'
import arrow from '../starter-code/assets/shared/desktop/arrow.svg' 
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>PHOTOSNAP</title>
        <meta name="description" content="Photo and story sharing platform" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <MainNavigation />

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

   
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

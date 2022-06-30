import Head from 'next/head'
import MainNavigation from '../components/mainNavigation/MainNavigation.js'
import lake from '../starter-code/assets/home/desktop/create-and-share.jpg' 
import laptop from '../starter-code/assets/home/desktop/beautiful-stories.jpg'
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
        <Image 
            className='lake-photographer-picture'
            src={ lake }  
            layout='responsive' 
            alt="man standing by lake"/>

        <div className='text-box black-text-container'>
          <h1>
            Create and share your photo Stories
          </h1>
          <p>
            Photosnap is a platform for photographers and visual storytellers. We make it 
            easy to share photos, tell stories and connect with others.
          </p>
          <div className='invite-flex-container'>
            <Link href="/pricing" className='invite-link'><h4>Get an invite</h4></Link>
            <Image layout="fixed" width="50px" height="15px" className='arrow' src={ arrow }/>
          </div>
        </div>

        <Image 
            className='laptop on desk-picture'
            src={ laptop }  
            layout='responsive' 
            alt="man standing by lake"/>


      <div className='text-box white-text-container'>
        <h1>
        Beautiful stories every time
        </h1>
        <p>
          We provide design templates to ensure your stories look terrific. Easily add 
          photos, text, embed maps and media from other networks. Then share your story 
          with everyone.
        </p>
        <div className='view-stories-flex-container'>
            <Link href="/stories" className='invite-link'><h4>Get an invite</h4></Link>
            <Image layout="fixed" width="50px" height="15px" className='arrow' src={ arrow }/>
          </div>
      </div>

        <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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

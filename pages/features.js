import arrow from '../starter-code/assets/shared/desktop/arrow.svg' 
import Image from 'next/image'
import Link from 'next/link'
import hero from '../starter-code/assets/features/desktop/hero.jpg' 


function Features() {
    return (
        <>
        <div className='section-container'>
        <div className='right-image-container'>

        <Image 
            className='hero-photographer-picture section-picture'
            src={ hero }  
            layout='responsive' 
            alt="man standing by lake"
            />

        </div>
        <div className='text-box text-box-left black-text-container'>
          <h1>
            Features
          </h1>
          <p>
          We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.
          </p>
        </div>
      </div>

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
      <div className='features-container'>
        <div className='single-feature-container'>
          <Image 
            src="/assets/features/desktop/custom-domain.svg" 
            alt="responsive" 
            width="72px"
            height="72px"
            />
            <h4>100% Responsive</h4>
            <p>No matter which the device you’re on, our site is fully responsive and stories 
                look beautiful on any screen.</p>
        </div>
        <div className='single-feature-container'>
          {/* <div className='image-container'> */}
            
          <Image 
            src="/assets/features/desktop/boost-exposure.svg" 
            alt="responsive" 
            width="72px"
            height="72px"
            />
            {/* </div> */}
            <h4>No Photo Upload Limit</h4>
            <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and 
                share all of your stories in one go.</p>
            </div>
            <div className='single-feature-container'>
              <Image 
                src="/assets/features/desktop/drag-drop.svg" 
                alt="responsive" 
                width="91px"
                height="72px"
                />
                <h4>Available to Embed</h4>
                <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
                    Google Maps, and more.</p>
            </div>

      </div> {/* features-container */}


      </>
    )
}

export default Features;
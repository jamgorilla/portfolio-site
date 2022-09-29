import Head from 'next/head' 
import Image from 'next/image'
import Link from 'next/link'
import man from '../public/assets/jm-photo-v0.7.png'
import photohero from '../public/assets/photosnap-hero-section.png'
import photolist from '../public/assets/photosnap-list-section.png'

//import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import useRouter from 'next/router'
import React, { useEffect, useState, useRef } from 'react'


function Home(props) {

// fade out animation for photo image scroll down
const scrollAnimation = () => {
  
  //tracks Y scroll of the window
  let scrollYaxis = window.scrollY;

  const photoImage = document.querySelector('.man-container');
  
  //controls the speed at which the personal image fades
  photoImage.style.opacity = 1 - scrollYaxis/900 ;
}

useEffect(() => {
  window.addEventListener('scroll', scrollAnimation)
},[])


////////////////////////////////////////////////////////////
//////////// intersection observer /////////////////////////
///////////project section animations///////////////////////

// need to use refs as the useEffect dependency in the square brackets 
// because document is undefined before useEffect runs after the initial render 
const firstprojectsection = useRef(null);

//useEffect needed to access document after initial render
useEffect(() => {
  
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
  const animatedSections = document.querySelectorAll('.anim')

  const observer = new IntersectionObserver((entries) => {
    //this is where the animations introduced to the section

    entries.forEach(entry => {

        if(entry.intersectionRatio > 0) {
          entry.target.style.animation = `${ entry.target.dataset.direction === 'false' ? 'anim1' : 'anim2' } 1s forwards ease-out`;
        } else {
          entry.target.style.animation = 'none';
        }
    })

  }, options);
  
  animatedSections.forEach(image => {
    observer.observe(image)
  })

}, [firstprojectsection])

/////////



  return (
    <div>
      <Head>
        <title>James Murphy Portfolio</title>
        <meta name="description" content="James Murphy Web Development Portfolio" />
        <link rel="icon" href="/assets/JM-logo-v0.2.svg" />
      </Head>
      
      
      <div className='hero-section-container'>


          <content className="title-section">
          <h4>James Murphy</h4>
          <h1>
          Web developer
          </h1>
          <p className='scroll' >
            We provide design templates to ensure your stories look terrific. Easily add 
            photos, text, embed maps and media from other networks. Then share your story 
            with everyone.
          </p>
          <Link href="/"><h3>View Projects</h3></Link>


          </content>

          <div className='man-container'>
            <Image 
            src={ man }
            layout='responsive'
            height={'3031'}
            width={'2078'}
            alt="logo"
            className='snack-man'
            />
          </div>

        </div> {/*  hero-section-container */}

        <h1 className='projects-title'>Projects</h1>
        
        <div className="project-list-container">


          <div 
            className='photohero-container anim' 
            ref={ firstprojectsection }
            data-direction={false}
            >
            <Image
              src={ photohero }
              layout='responsive'
              height={'3001'}
              width={'4505'}
              alt="logo"
              className='photohero'  
              />
          </div>

          <div 
            className='photolist-container anim'
            data-direction={true}
            >  
            <Image
              src={ photolist }
              layout='responsive'
              height={'3055'}
              width={'4512'}
              alt="logo"
              className='photolist'  
              />    
          </div>

        </div>


        <div className="project-list-container2">

          <div 
            className='photohero-container anim' 
            data-direction={false}
            >
            <Image
              src={ photohero }
              layout='responsive'
              height={'3001'}
              width={'4505'}
              alt="logo"
              className='photohero'  
              />
          </div>

          <div 
            className='photolist-container anim' 
            data-direction={true}>  
            <Image
              src={ photolist }
              layout='responsive'
              height={'3055'}
              width={'4512'}
              alt="logo"
              className='photolist'  
              />    
          </div>

        </div>
    </div>
  )
}


export default Home;
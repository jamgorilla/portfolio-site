import Head from 'next/head' 
import Image from 'next/image'
import Link from 'next/link'
import man from '../public/assets/jm-photo-v0.7.png' 
import ProjectList from '../components/projectList/ProjectList'



//import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';

import React, { useEffect, useState, useRef } from 'react'


function Home(props) {

//const [axis, setAxis] = useState(0);


useEffect(() => {
  
  // fade out animation for photo image scroll down
  const scrollAnimation = () => {
    
    //tracks Y scroll of the window
    let scrollYaxis = window.scrollY;
  
    const photoImage = document.querySelector('.man-container');
  
    //controls the speed at which the personal image fades
    photoImage.style.opacity = 1 - scrollYaxis/900 ;
    
  }
    window.addEventListener('scroll', scrollAnimation);

    return () => {
    window.removeEventListener('scroll', scrollAnimation);
    }
  
},[])

const numList = [0,1,2,3,4];

  return (
    <div>
      <Head>
        <title>James Murphy Portfolio</title>
        <meta name="description" content="James Murphy Web Development Portfolio" />
        <link rel="icon" href="/assets/JM-logo-v0.2.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/xqn6tpy.css"></link>
      </Head>
      
      
      <div className='hero-section-container'>

      {/* design develop lettering animation */}
      {/* <p className='outside'>
  <span>
   design and develop
  </span>
</p> */}

          <div className="title-section">
          <h4>James Murphy</h4>
          <h1>
          Website Design & Development
          </h1>
          <p className='scroll' >
            We provide design templates to ensure your stories look terrific. Easily add 
            photos, text, embed maps and media from other networks. Then share your story 
            with everyone.
          </p>
          
          <Link href="#projects-section"><p  className='view-projects-button'>View Projects</p></Link>
          


          </div>

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

        <h1 id="projects-section" className='projects-title'>Projects</h1>
        
        <ProjectList 
              projects={ props.projects }
              />
    </div>
  )
}

export async function getStaticProps() {
  // fetch data from an API

  const projectArray = [
    {
      title: "Photosnap",
      id: "1",
      image1: '/../public/assets/photosnap-hero-section.png',
      image2: '/../public/assets/photosnap-list-section.png'
    },{
      title: "Space Tourism",
      id: "2",
      image1: '/../public/assets/space-tourism-homepage.png',
      image2: '/../public/assets/space-tourism-planets.png'
    },{
      title: "Countries List",
      id: "3",
      image1: '/../public/assets/rest-countries-app-home.png',
      image2: '/../public/assets/rest-countries-app.png'
    }
  ]

  return {
    props: {
      projects: projectArray
    }
  }
}

export default Home;
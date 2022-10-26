import Head from 'next/head' 
import Image from 'next/image'
import Link from 'next/link'
import man from '../public/assets/jm-photo-v0.7.png' 
import ProjectList from '../components/projectList/ProjectList'
import HeroAnimation from '../components/heroAnimation/HeroAnimation'


//import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';

import React, { useEffect, useState, useRef } from 'react'



function Home(props) {


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
      </Head>
      
      
      <div className='hero-section-container'>

      {/* design develop lettering animation */}
      {/* <p className='outside'>
  <span>
   design and develop
  </span>
</p> */}

          <HeroAnimation />

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
      description: "Photo and story sharing application for young professionals. Photo and story sharing application for young professionals.Photo and story sharing application for young professionals",
      id: "1",
      image1: '/../public/assets/photosnap-hero-section.png',
      image2: '/../public/assets/photosnap-list-section.png'
    },{
      title: "African Development Choices",
      description: "UK based social enterprise with a mission to empower local communities to make more informed choices in the management of public resources.",
      id: "2",
      image1: '/../public/assets/ADC-homepage-v2.png',
      image2: '/../public/assets/ADC-second-page-v2.png'
    },{
      title: "Space Tourism",
      description: "",
      id: "3",
      image1: '/../public/assets/space-tourism-homepage-v2.png',
      image2: '/../public/assets/space-tourism-planets-v2.png'
    },{
      title: "Countries List",
      description: "",
      id: "4",
      image1: '/../public/assets/rest-countries-app-home-v2.png',
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
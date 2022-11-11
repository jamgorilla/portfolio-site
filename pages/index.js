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
          I am a Full Stack Software Engineer with a focus on Front-End Development and Design. I love to help new and growing businesses launch their products and attract new customers.
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
      description: "Photosnap website is a photo sharing and stroytelling application aimed at anyone with a passion for photograph who has a story to go along with it. This was a personal project built in 2022 with designs taken from Frontend Mentor.",
      id: "1",
      image1: '/../public/assets/photosnap-hero-section.jpg',
      image2: '/../public/assets/photosnap-list-section.jpg'
    },{
      title: "African Development Choices",
      description: "UK based social enterprise with a mission to empower local communities to make more informed choices in the management of public resources.",
      id: "2",
      image1: '/../public/assets/ADC-homepage-v3.jpg',
      image2: '/../public/assets/ADC-second-page-v2.jpg'
    },{
      title: "Space Tourism",
      description: "The Space Tourism website is an informational and experiencial visit to space. This was a personal project built in 2022 with designs taken from Frontend Mentor.",
      id: "3",
      image1: '/../public/assets/space-tourism-homepage.jpg',
      image2: '/../public/assets/space-tourism-planets.jpg'
    },{
      title: "Countries List",
      description: "The Countries list website is an informational which presents topical information on various countries. This was a personal project built in 2022 with designs taken from Frontend Mentor.",
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
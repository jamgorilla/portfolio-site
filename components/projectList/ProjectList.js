import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import ProjectItem from './ProjectItem'

// import photosnaphero from '../../public/assets/photosnap-hero-section.png'
// import photosnaplist from '../../public/assets/photosnap-list-section.png'
// import spaceTourismHomepage from '../../public/assets/space-tourism-homepage.png'
// import spaceTourismPlanets from '../../public/assets/space-tourism-planets.png'



function ProjectList (props) {

    // const photoPaths = [photosnaphero, photosnaplist, spaceTourismHomepage, spaceTourismPlanets];

//////////// intersection observer /////////////////////////
///////////project section animations///////////////////////

// need to use refs as the useEffect dependency in the square brackets 
// because document is undefined before useEffect runs after the initial render 
// const firstprojectsection = useRef(null);

// //useEffect needed to access document after initial render
// useEffect(() => {
  
//   let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.0
//   }
//   const animatedSections = document.querySelectorAll('.anim')

//   const observer = new IntersectionObserver((entries) => {
//     //this is where the animations introduced to the section

//     entries.forEach(entry => {

//         if(entry.intersectionRatio > 0) {
//           entry.target.style.animation = `${ entry.target.dataset.direction === 'false' ? 'anim1' : 'anim2' } 1s forwards ease-out ${ entry.target.dataset.delay === '1' ? '0.4s' : ''} `;
//         } else {
//           entry.target.style.animation = 'none';
//         }
//     })

//   }, options);
  
//   animatedSections.forEach(image => {
//     observer.observe(image)
//   })

// }, [firstprojectsection])

/////////

    return (
        <ul className="project-list-ul">
            {props.projects.map((project) => (
                <ProjectItem 
                    title={project.title}
                    id={project.id}
                    key={project.id}
                    image1={project.image1}
                    image2={project.image2}
                    
                />
            ))}
        </ul>
    )
}


  

export default ProjectList;
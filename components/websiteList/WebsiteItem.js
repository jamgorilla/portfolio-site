import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import CustomForwardImage from './CustomForwardImage.js';



function WebsiteItem (props) {

    // const photoPaths = [photosnaphero, photosnaplist, spaceTourismHomepage, spaceTourismPlanets];

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
    threshold: 0.0
  }
  const animatedSections = document.querySelectorAll('.anim')

  const observer = new IntersectionObserver((entries) => {
    //this is where the animations introduced to the section

    
    entries.forEach(entry => {
        

        
        if(entry.intersectionRatio > 0) {
          entry.target.style.animation = `${ entry.target.dataset.direction === 'false' ? 'anim1' : 'anim2' } 1s forwards ease-out ${ entry.target.dataset.delay ===  'true' ? '0.4s' : '' } `;
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
        <li>
                <div className="project-list-container">

                <div className='web-text-n-line anim' 
                ref={ firstprojectsection }
                data-direction={false}>

                    <h2 className='anim' data-direction={false}>{ props.title }</h2>
                    <p className='web-site-description anim' data-direction={false}>{ props.explanation }</p>
                    <div className='orange-line anim' data-direction={false} data-delay={true}></div>
                    {/* <Link href={'/projects/' + props.id } ><p className="see-details anim" data-direction={false} >See Details</p></Link> */}

                </div>

                <div 
                className='web-photolist-container anim'
                data-direction={true}
                >  
                              <Image 
                                src={ props.image2 }
                                layout='responsive'
                                height={'3055'}
                                width={'4512'}
                                alt="logo"
                                className='photolist'
                              />
                </div>
            </div>
        </li>
    )
}


  

export default WebsiteItem;
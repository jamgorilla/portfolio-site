import { Fragment  } from 'react';
import Image from 'next/image'
import CustomForwardImage from './CustomForwardImage.js';
import Link from 'next/link'
import WebsiteList from '../websiteList/WebsiteList'



function ProjectDetail(props) {

    //props.webSiteList

    return (
        <Fragment>
            <div className="project-detail-page-body">
            <div className="project-detail-top-section">
                <div className="project-detail-top-section-left">

                    <h2 className='project-detail-title'>
                      { props.title }
                    </h2>

                    <ul className="website-list-ul">
                        {props.webBuilders.map((project) => (
                           <li className='text-flex-to-row' key={ props.projectid }>
                           <p><span>{ project[0] }</span>{ project[1] }</p>
                       </li>
                        ))}
                    </ul>

                    <div className='orange-line anim' data-direction={false} data-delay={true}></div>
                    
                    <div className='detail-page-link-container'>
                        <Link href="https://photosnap-website.herokuapp.com/"><p  className='view-projects-button'>Live Site</p></Link>
                        <Link href="https://github.com/jamgorilla/photosnap-website"><p  className='view-projects-button'>Git Repo</p></Link>
                    </div>
                
                </div>
                <div className="project-detail-top-section-right">

                    <h4 className='project-detail-subtitle'>{ props.exampleOf }</h4>
                    <p className='project-detail-content'>{ props.webBuildDescription }</p>
        
                </div>

            </div>

            <div className='project-detail-section-image-container'>
                <Link href={ '/' } className="project-detail-section-image">
                    <a>
                        <CustomForwardImage
                        className='detail-page-image'
                        src={ props.image1 }  
                        width="360px"
                        height="250px"
                        layout='responsive' 
                        alt="dynamically generated story image"
                        />
                </a>
                </Link>
            </div>

            {/* <ul className="project-list-ul">
                        {props.webSiteList.map((project) => (
                           <li className='text-flex-to-row' key={ props.projectid }>
                           <p><span>{ project[0] }</span>{ project[1] }</p>
                       </li>
                        ))}
                    </ul> */}

                {/* <div className='project-details-tools-container'>
                    <div className='tools-section-container'>
                        <h2>{ props.title }</h2>
                        <p>This fully responsive website was built using Next.js as a front end web development framework in order to allow server side rendering for better SEO with the benefits of a single page application. </p>
                        <div className='orange-line anim' data-direction={false} data-delay={true}></div>
                    </div>
                    <div>
                        <Image
                            className='detail-page-image'
                            src={ props.image1 }  
                            width="360px"
                            height="250px"
                            layout='responsive' 
                            alt="dynamically generated story image"
                            />
                    </div>
                </div> */}

                <WebsiteList projects={ props.webSiteList }/> 

            </div>
        </Fragment>
    );
}



export default ProjectDetail;
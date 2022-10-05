import { Fragment  } from 'react';
import Image from 'next/image'
import CustomForwardImage from './CustomForwardImage.js';
import Link from 'next/link'
import ProjectList from './ProjectList'



function ProjectDetail(props) {

    return (
        <Fragment>
            <div className="project-detail-page-body">
            <div className="project-detail-top-section">
                <div className="project-detail-top-section-left">

                    <h2 className='project-detail-title'>
                      { props.title }
                    </h2>
                    <div className='text-flex-to-row'>
                        <p><span>Developer</span>James Murphy</p>
                    </div>
                    <div className='text-flex-to-row'>
                        <p><span>Design</span>Frontend Mentor</p>

                    </div>
                    <div className='text-flex-to-row'>
                        <p><span>Client</span>Personal Project</p>
                    </div>
                    <div className='text-flex-to-row'>
                        <p><span>Year</span>2022</p>
                    </div>

                    <div className='orange-line anim' data-direction={false} data-delay={true}></div>
                    
                    <div className='detail-page-link-container'>
                        <Link href="https://photosnap-website.herokuapp.com/"><p  className='view-projects-button'>Live Site</p></Link>
                        <Link href="https://github.com/jamgorilla/photosnap-website"><p  className='view-projects-button'>Git Repo</p></Link>
                    </div>
                
                </div>
                <div className="project-detail-top-section-right">

                    <h4 className='project-detail-subtitle'>Front end development example</h4>
                    <p className='project-detail-content'>Loreum ispem blah blah. Loreum ispem blah blah. Loreum ispem blah blah. Award winning design services lyseum lorem epsim black you them for the salmon tree real magic boom splash. Award winning design services lyseum lorem epsim black you them for the salmon tree real magic boom splash. Award winning design services lyseum lorem epsim black you them for the salmon tree real magic boom splashAward winning design services lyseum lorem epsim black you them for the salmon</p>
        
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

                <div className='project-details-tools-container'>
                    <div>
                        <h2>Tools & Technology</h2>
                        <p>This fully responsive website was built using Next.js as a front end web development framework in order to allow server side rendering for more effective SEO with the benefits of a single page application. </p>
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
                </div>
            </div>
        </Fragment>
    );
}



export default ProjectDetail;
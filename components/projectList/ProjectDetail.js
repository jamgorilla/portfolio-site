import { Fragment  } from 'react';
import Image from 'next/image'


function ProjectDetail(props) {

    return (
        <Fragment>
        <div className='section-container'>
          <div className='right-image-container detail-page-image-container'>

          <Image 
              className='detail-page-image'
              src={ props.image1 }  
              width="360px"
              height="500px"
              layout='responsive' 
              alt="dynamically generated story image"/>

          </div>
          <div className='text-box text-box-left black-text-container detail-page-black-section'>
            <h1>
              { props.title }
            </h1>
            <h5 className='story-detail-subtitle'>
              { props.subtitle }
            </h5>
              <div className='date-and-author'>
                <h5>{ props.date }</h5>
                <p>by { props.author }</p>
            </div>
          </div>
        </div> {/* section container */}

        <div className="story-detail-content-container">
            <p className='story-detail-content'>{ props.content }</p>
        </div>

        </Fragment>
    );
}

export default ProjectDetail;
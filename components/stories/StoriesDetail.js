
import { Fragment, useEffect, useRef } from 'react';
import Image from 'next/image'


function StoriesDetail(props) {

    //const parallax = document.getElementById('detail-page-main-content');

    // const pageContainer = useRef(null);
    
    // console.log("before", pageContainer)
    
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         let offset = window.pageYOffset;
    //         if (pageContainer.current === null) {
    //             console.log("return", pageContainer)
                
    //             return;
    //         } else {
    //             console.log("run", pageContainer)

    //             pageContainer.current.style.backgroundPositionY = offset*0.7 + 'px';
    //          }
    //     })
    // },[pageContainer])

    return (
        <Fragment>
            {/* <div className='gradient-overlay'>
                <img className="main-picture" src={ props.image } alt={ props.title } />
            </div> */}
        
        {/* <div className='white-div'></div>
        <div style={{ backgroundImage: `url(${ props.image })` }} ref={ pageContainer } className='detail-page-main-content'>
            <div className='text-holding-div'>
                <title>{ props.title }</title>
                <h1>{ props.title }</h1>
                <br></br>

                <h4>{ props.subtitle }</h4>
                <br></br>
            <div className='date-and-author'>
                <h5>{ props.date }</h5>
                <p>{ props.author }</p>
            </div>
                <p>{ props.content }</p>
            </div>
        </div> */}
        
        <div className='section-container'>
          <div className='right-image-container detail-page-image-container'>

          <Image 
              className='detail-page-image'
              src={ props.image }  
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

export default StoriesDetail;
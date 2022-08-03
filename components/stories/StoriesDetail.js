
import { Fragment, useEffect, useRef } from 'react';

function StoriesDetail(props) {

    //const parallax = document.getElementById('detail-page-main-content');

    const pageContainer = useRef(null);
    
    console.log("before", pageContainer)
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let offset = window.pageYOffset;
            if (pageContainer.current === null) {
                console.log("return", pageContainer)
                
                return;
            } else {
                console.log("run", pageContainer)

                pageContainer.current.style.backgroundPositionY = offset*0.7 + 'px';
             }
        })
    },[pageContainer])

    return (
        <Fragment>
            {/* <div className='gradient-overlay'>
                <img className="main-picture" src={ props.image } alt={ props.title } />
            </div> */}
        
        <div className='white-div'></div>
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
        </div>
        
        </Fragment>
    );
}

export default StoriesDetail;
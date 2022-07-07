
import { Fragment } from 'react';

function StoriesDetail(props) {
    return (
        <Fragment>
            <div className='gradient-overlay'>
                <img className="main-picture" src={ props.image } alt={ props.title } />
            </div>
        
        <div className='detail-page-main-content'>
            <title>{ props.title }</title>
            <h1>{ props.title }</h1>
            <p>{ props.author }</p>
            <p>{ props.content }</p>
        </div>
        <div className='spacer'></div>
        </Fragment>
    );
}

export default StoriesDetail;
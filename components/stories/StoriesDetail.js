
import { Fragment } from 'react';

function StoriesDetail(props) {
    return (
        <Fragment>
        <title>{ props.title }</title>
        <h1>IndividualStoryPage Page { props.storyid }</h1>
        <img src={ props.image } alt={ props.title } />
        <p>{ props.author }</p>
        </Fragment>
    );
}

export default StoriesDetail;
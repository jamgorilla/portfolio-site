 import StoreisItem from './StoriesItem';

 function StoriesList(props) {
    return (
        <ul className='stories-list-ul-container'>
            {props.story.map((story) => (
                <StoreisItem 
                    key={story.id}
                    id={story.id}
                    image={story.image}
                    title={story.title}
                    author={story.author}
                    content={story.content}
                />
            ))}
        </ul>
    )
 }

 export default StoriesList;
import Image from 'next/image'
import arrow from '../../starter-code/assets/shared/desktop/arrow.svg' 
import Link from 'next/link'


function StoriesItem(props) {

    // const router = useRouter();

    // function showStoryHandler() {
    //     router.push('/' + props.id)
    // }

    

   return (
       <li>
           <Image  
            className='story-thumbnail'
            src={ props.image }
            width="360px"
            height="500px"
            alt="Should be image"
            layout='responsive'
            />
            <Link href={ '/stories/' + props.id } >
            <div className='details-container'>
                <p className='title'>{ props.title }</p>     
                <p>{ props.author }</p> 
                <div className='straight-line'></div>
                    <h4>Read story 
                        <Image src={ arrow } className="arrow" alt="arrow"/>
                    </h4>
            </div>
            </Link>
       </li>
   )
}

export default StoriesItem;
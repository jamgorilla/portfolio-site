import Image from 'next/image'
import test from '../../starter-code/assets/stories/desktop/mountains.jpg'


function StoriesItem(props) {

    // const styled={
    //     backgroundImage: new URL('/../../starter-code/assets/stories/desktop/mountains.jpg')
    // }

   return (
       <li><Image 
            src={ test }
            width="300px"
            height="300px"
            alt="Should be image"
            />
       </li>
   )
}

export default StoriesItem;
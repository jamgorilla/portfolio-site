import Link from 'next/link';
import Image from 'next/image'
import arrow from '../../starter-code/assets/shared/desktop/arrow.svg' 

function Invite () {
    return (
        <div className='invite-flex-container'>
              <Link href="/pricing" className='invite-link'><h4>Get an invite</h4></Link>
              <Image 
                layout="fixed" 
                width="50px" 
                height="15px" 
                className='arrow'
                alt="arrow" 
                src={ arrow }/>
            </div>
    )
}

export default Invite;
import logo from '../../starter-code/assets/shared/desktop/logo-white.svg';
import facebook from '../../starter-code/assets/shared/desktop/facebook.svg';
import youtube from '../../starter-code/assets/shared/desktop/youtube.svg';
import twitter from '../../starter-code/assets/shared/desktop/twitter.svg';
import pinterest from '../../starter-code/assets/shared/desktop/pinterest.svg';
import instagram from '../../starter-code/assets/shared/desktop/instagram.svg';
import Invite from '../invite/Invite.js' 
 


import Image from 'next/image'
import Link from 'next/link'


function Footer() {
    return <footer>
        {/* <div className='footer-left-section'> */}

            <div className='photosnap-logo'>
                <Link href="/" >
                    <Image 
                        src={ logo } 
                        className="logo" 
                        alt="photosnap-logo" 
                        />
                </Link>
            </div>
            <div className='social-icons'>
                    <Image 
                        src={ facebook } 
                        className="facebook-logo" 
                        alt="facebook-logo" 
                        />
                    <Image 
                        src={ youtube } 
                        className="youtube-logo" 
                        alt="youtube-logo" 
                        />
                    <Image 
                        src={ twitter } 
                        className="twitter-logo" 
                        alt="twitter-logo" 
                        />
                    <Image 
                        src={ pinterest } 
                        className="pinterest-logo" 
                        alt="pinterest-logo" 
                        />
                    <Image 
                        src={ instagram } 
                        className="instagram-logo" 
                        alt="instagram-logo" 
                        />
            </div>
                        {/* </div> */}
        <div className='footer-middle-section'>
            <ul>
                <li><Link href="/"><h4>home</h4></Link></li>
                <li><Link href="/stories/"><h4>Stories</h4></Link></li>
                <li><Link href="/features"><h4>Features</h4></Link></li>
                <li><Link href="/pricing"><h4>Pricing</h4></Link></li>
            </ul>
        </div>
        <div className='footer-right-section'>
            <Invite />
            <p>Copyright 2022. All Rights Reserved</p>
        </div>

    </footer>
}

export default Footer;
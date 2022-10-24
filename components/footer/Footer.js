// import logo from '../../starter-code/assets/shared/desktop/logo-white.svg';
// import facebook from '../../starter-code/assets/shared/desktop/facebook.svg';
// import youtube from '../../starter-code/assets/shared/desktop/youtube.svg';
// import twitter from '../../starter-code/assets/shared/desktop/twitter.svg';
// import pinterest from '../../starter-code/assets/shared/desktop/pinterest.svg';
// import instagram from '../../starter-code/assets/shared/desktop/instagram.svg';
//import Invite from '../invite/Invite.js'
import logo from '../../public/assets/JM-logo-v0.5.svg'
import logoGrey from '../../public/assets/JM-logo-medium-grey.svg'

import Image from 'next/image'
import Link from 'next/link'
import CustomFooterForwardImage from './/CustomFooterForwardImage'

function Footer() {

    function returnFunc () {
        return;
    }
    return <footer>
        <div className='footer-first-section'>
            <Image 
            src={ logoGrey }
            //layout='responsive'
            height={'58px'}
            width={'58px'}
            alt="logo"
            className='JM-logo'
            />
            <div className='name-and-role'>
                <h2 className='header-name'>James Murphy</h2>
                <h4 className='header-job-title'>UI Designer & Web Developer</h4>
            </div>

            <h4>Socail media links fiver, linkedin</h4>
        </div>

        <div className='footer-second-section'>
                <h2>Title</h2>
                <ul>
                    <li>Things</li>
                    <li>Things</li>
                    <li>Things</li>
                </ul>

        </div>

        <div className='footer-third-section'>
                <h2>Title</h2>
                <ul>
                    <li>Things</li>
                    <li>Things</li>
                    <li>Things</li>
                </ul>

        </div>

    </footer>
}

export default Footer;
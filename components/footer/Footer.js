// import logo from '../../starter-code/assets/shared/desktop/logo-white.svg';
// import facebook from '../../starter-code/assets/shared/desktop/facebook.svg';
// import youtube from '../../starter-code/assets/shared/desktop/youtube.svg';
// import twitter from '../../starter-code/assets/shared/desktop/twitter.svg';
// import pinterest from '../../starter-code/assets/shared/desktop/pinterest.svg';
// import instagram from '../../starter-code/assets/shared/desktop/instagram.svg';
//import Invite from '../invite/Invite.js'
import logo from '../../public/assets/JM-logo-v0.5.svg'

import FEMlogoOrange from '../../public/assets/frontend-mentor-logo-orange.png'
import GHLogoOrange from '../../public/assets/github-logo-orange.png'


import fiverrlogo from '../../public/assets/fiverr-logo-grey.png'
import fiverrlogoOrange from '../../public/assets/fiverr-logo-orange.png'


import logoGrey from '../../public/assets/JM-logo-medium-grey.svg'

import Image from 'next/image'
import Link from 'next/link'
import CustomFooterForwardImage from './/CustomFooterForwardImage'

function Footer() {

    let d = new Date(); 
    let currentYear = d.getFullYear();

    function returnFunc () {
        return;
    }
    return <footer>
        <div className='footer-first-section'>
            <div className='footer-JM-logo-container'>
                <Image 
                src={ logoGrey }
                //layout='responsive'
                height={'58px'}
                width={'58px'}
                alt="logo"
                className='footer-JM-logo'
                />
            </div>
        </div>

            <div className='footer-name-and-role'>
                <h2 className='header-name'>James Murphy</h2>
                <h4 className='header-job-title'>UI Designer & Web Developer</h4>
            </div>

            <div className='social-media-icons-container'>
                <div className='icon-container'>
                    <Link href="https://www.fiverr.com/jamesmurphytech?public_mode=true" className="icon-container">
                        <a>
                            <CustomFooterForwardImage
                            className='footer-ffiver-logo'
                            src={ fiverrlogoOrange }  
                            height={'30px'}
                            width={'30px'}
                            alt="ffiver-logo"
                            />
                        </a>
                    </Link>
                </div>
                <div className='icon-container'>
                    <Link href="https://www.frontendmentor.io/profile/jamgorilla" className="icon-container">
                        <a>
                            <CustomFooterForwardImage
                            className='footer-frontendmentor-logo'
                            src={ FEMlogoOrange }  
                            height={'30px'}
                            width={'30px'}
                            label="FrontEnd Mentor"
                            alt="frontendMentor-logo"
                            />
                        </a>
                    </Link>
                </div>
                <div className='icon-container'>
                    <Link href="https://github.com/jamgorilla" className="icon-container">
                        <a>
                            <CustomFooterForwardImage
                            className='footer-github-logo'
                            src={ GHLogoOrange }  
                            height={'30px'}
                            width={'30px'}
                            alt="github-logo"
                            />
                        </a>
                    </Link>
                </div>
                <div className='icon-container'>
                    <Link href="https://www.fiverr.com/jamesmurphytech?public_mode=true" className="icon-container">
                        <a>
                            <CustomFooterForwardImage
                            className='footer-ffiver-logo'
                            src={ FEMlogoOrange }  
                            height={'30px'}
                            width={'30px'}
                            alt="ffiver-logo"
                            />
                        </a>
                    </Link>
                </div>
            </div>

        <div className='footer-second-section'>
                <h2>Sitemap</h2>

        </div>
                <ul className='footer-second-section-ul'>
                    <li><Link href="/"><p><span>Home</span></p></Link></li>
                    <li><Link href="/#projects-section"><p><span>Projects</span></p></Link></li>
                    <li><Link href="/"><p><span>About Me</span></p></Link></li>
                    <li><Link href="/contact"><p><span>Contact</span></p></Link></li>
                </ul>

        <div className='footer-third-section'>
                <h2>Latest Projects</h2>
        </div>
                <ul  className='footer-third-section-ul'>
                    <li><Link href="/projects/1"><p><span>Photosnap</span></p></Link></li>
                    <li><Link href="/projects/2"><p><span>ADC</span></p></Link></li>
                    <li><Link href="/projects/3"><p><span>Space Tourism</span></p></Link></li>
                    <li><Link href="/projects/4"><p><span>Countries List</span></p></Link></li>
                </ul>

        <p className='copyright-container'>Copyright &#xA9; {currentYear} JMurphyTech</p>

    </footer>
}

export default Footer;
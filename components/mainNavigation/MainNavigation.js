import CustomForwardImage from './CustomForwardImage.js';
import Image from 'next/image'
import logo from '../../public/assets/JM-logo-v0.5.svg'
//import logo from '../../public/assets/JM-logo-thin-orange.svg'

import logoGrey from '../../public/assets/JM-logo-medium-grey.svg'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function MainNavigation() {


    const [open, setOpen] = useState(false);

    function toggleNavMenu () {
        setOpen((prev) => !prev );
    }

    useEffect(() => {
        if (open === true) {
            //add open class to body
            document.body.classList.add( 'open' );
        } else {
            //remove open class from body
            document.body.classList.remove( 'open' );
        }
    }, [open])
    
    return <nav className='main-navigation'>
        <div className='left-section-nav'>
            <Image 
            src={ open ? logoGrey : logo }
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
        </div>
        <div className='right-section-nav'>
            <div 
                className={ `hamburger-container btn1 ${open && 'open'}` }
                onClick={ toggleNavMenu }>
                <div className='icon-left'></div>
                <div className='icon-right'></div>
            </div>
        </div>
        <ul className='menu-container'>
            <li><Link href="/"><h1 onClick={ toggleNavMenu }>Home</h1></Link></li>
            <li><Link href="/#projects-section"><h1 onClick={ toggleNavMenu }>Projects</h1></Link></li>
            <li><Link href="/aboutme"><h1 onClick={ toggleNavMenu }>About me</h1></Link></li>
            <li><Link href="/contact"><h1 onClick={ toggleNavMenu }>Contact</h1></Link></li>        
        </ul>

    </nav>
}

export default MainNavigation;
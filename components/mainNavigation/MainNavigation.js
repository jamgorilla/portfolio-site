import logo from '../../starter-code/assets/shared/desktop/logo.svg';
import hamburger from '../../starter-code/assets/shared/mobile/menu.svg';
import cross from '../../starter-code/assets/shared/mobile/close.svg';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function MainNavigation() {

    const [ mobileMenuOpen, setMobileMenuOpen  ] = useState(false);

    function hamburgerHandler(event){

        const isLogo = event.target.className;

        if (isLogo === "logo") {
            setMobileMenuOpen((prev) => {
                return false;
            })
        } else {
            setMobileMenuOpen((prev) => {
                return !prev;
            })
        }        
    }

    return <nav className='main-navigation'>
        <div className='photosnap-logo'>
            <Link href="/" >
                <Image 
                    src={ logo } 
                    className="logo" 
                    alt="photosnap-logo" 
                    onClick={ hamburgerHandler }
                />
            </Link>
        </div>
            <div className={`nav-page-links-container ${ mobileMenuOpen }`}>
                <Link href='/stories'><h4 onClick={ hamburgerHandler }>Stories</h4></Link>
                <Link href='/features'><h4 onClick={ hamburgerHandler }>Features</h4></Link>
                <Link href='/pricing'><h4 onClick={ hamburgerHandler }>Pricing</h4></Link>
            </div>
            <div className='button-burger-container'>
                <Image 
                    src={ mobileMenuOpen === true ? cross : hamburger } 
                    open={ mobileMenuOpen }
                    className='hamburger' 
                    alt="hamburger" 
                    layout='fixed'
                    onClick={ hamburgerHandler }
                />
                    <button className={`get-an-invite ${ mobileMenuOpen }`}>
                        <Link href='/pricing'><h4 onClick={ hamburgerHandler }>get an invite</h4>
                        </Link>
                    </button>
            </div>
    </nav>
}

export default MainNavigation;
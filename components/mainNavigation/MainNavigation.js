import logo from '../../starter-code/assets/shared/desktop/logo.svg';
import hamburger from '../../starter-code/assets/shared/mobile/menu.svg';
import Image from 'next/image'
import Link from 'next/link'

function mainNavigation() {
    return <nav className='main-navigation'>
        <div className='photosnap-logo'>
            <Image 
                src={ logo } 
                className="logo" 
                alt="photosnap-logo" 
            />
        </div>
            <div className='nav-page-links-container'>
                <Link href='/stories'><h4>Stories</h4></Link>
                <Link href='/features'><h4>Features</h4></Link>
                <Link href='/pricing'><h4>Pricing</h4></Link>
            </div>
            <div className='button-burger-container'>
                <Image 
                    src={ hamburger } 
                    className="hamburger" 
                    alt="hamburger" 
                />
                <Link href='/pricing'>
                    <button className='get-an-invite-btn'>
                        <h4>get an invite</h4>
                    </button>
                </Link>
            </div>
    </nav>
}

export default mainNavigation;
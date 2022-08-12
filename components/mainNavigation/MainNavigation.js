import logo from '../../starter-code/assets/shared/desktop/logo.svg';
import hamburger from '../../starter-code/assets/shared/mobile/menu.svg';
import cross from '../../starter-code/assets/shared/mobile/close.svg';
import CustomForwardImage from './CustomForwardImage.js';
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function MainNavigation() {

    const [ mobileMenuOpen, setMobileMenuOpen  ] = useState(false);

    const size = useWindowSize();
    
    function hamburgerHandler(event){

        const isLogo = event.target.className;

        if (size.width > 768) {
            setMobileMenuOpen((prev) => {
                return false;
            })
        } else if (isLogo === "logo") {
            setMobileMenuOpen((prev) => {
                return false;
            })
        } else {
            setMobileMenuOpen((prev) => {
                return !prev;
            })
        }        
    }


// Hook for detecting window size
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  

    return <nav className='main-navigation'>
        <div className='photosnap-logo'>
            <Link href="/" >
                <CustomForwardImage 
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
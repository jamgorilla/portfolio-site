import Image from 'next/image'
import React from 'react' 

function CustomFooterForwardImage ({ src, className, alt, onClick}, ref ) {
    return (
        <Image 
            src={ src } 
            className={ className } 
            alt={ alt }
            onClick={ onClick } 
        />
    )
}

const forwardFooterInput = React.forwardRef( CustomFooterForwardImage );

export default forwardFooterInput;
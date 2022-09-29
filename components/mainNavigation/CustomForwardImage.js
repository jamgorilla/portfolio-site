import Image from 'next/image'
import React from 'react'

function CustomForwardImage ({ src, className, alt, onClick}, ref ) {
    return (
        <Image 
            src={ src } 
            className={ className } 
            alt={ alt }
            onClick={ onClick } 
        />
    )
}

const forwardInput = React.forwardRef( CustomForwardImage );

export default forwardInput;
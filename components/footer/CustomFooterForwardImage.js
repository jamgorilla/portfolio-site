import Image from 'next/image'
import React from 'react'

function CustomFooterForwardImage ({ src, className, alt}, ref ) {
    return (
        <Image 
            src={ src } 
            className={ className } 
            alt={ alt }
        />
    )
}

const forwardFooterInput = React.forwardRef( CustomFooterForwardImage );

export default forwardFooterInput;
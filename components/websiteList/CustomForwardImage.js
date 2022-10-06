import Image from 'next/image'
import React from 'react'

function CustomForwardImage ({ src, className, layout, height, width, alt}, ref ) {
    return (
        <Image 
            src={ src } 
            className={ className } 
            layout={ layout }
            height={ height }
            width={ width }
            alt={ alt }
        />
    )
}

const forwardInput = React.forwardRef( CustomForwardImage );

export default forwardInput;
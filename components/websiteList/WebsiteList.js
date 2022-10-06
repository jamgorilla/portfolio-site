import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import WebsiteItem from './WebsiteItem'



function WebsiteList (props) {


    return (
        <ul className="web-list-ul">
            {props.projects.map((project) => (
                <WebsiteItem 
                    title={project.title}
                    id={project.id}
                    key={project.id}
                    image1={project.image1}
                    image2={project.image2}
                    
                />
            ))}
        </ul>
    )
}


  

export default WebsiteList;
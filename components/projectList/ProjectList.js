import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import ProjectItem from './ProjectItem'



function ProjectList (props) {

    return (
        <ul className="project-list-ul">
            {props.projects.map((project) => (
                <ProjectItem 
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


  

export default ProjectList;
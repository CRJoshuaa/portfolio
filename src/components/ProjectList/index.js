import "./index.scss"

import React from 'react'
import Project from "./Project"
import { projects } from "../../data/projects"

const ProjectList = () => {
  return (
    <div className="project-list">
      <div className="project-list-text">
        <h1 className="project-list-title"> Projects</h1>
        <p className="project-list-description">
          Here are a few of the projects that I have worked on. These projects 
          were completed both during my university career as well as during my free time
        </p>
      </div>
      <div className="project-list-body">
       {projects.map(item=>(
        <Project 
          key={item.id}
          img={item.img}
          link={item.link}
        />
       ))}
      </div>
    </div>
  )
}

export default ProjectList
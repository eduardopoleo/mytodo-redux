import React, { Component, PropTypes } from 'react';
import Project from './Project'

const ProjectList = ({projects}) => (
  <div>
    <div>
      { projects.map((project, index)=>{
          return(
            <Project key={index} name={project.name} description={project.description}>
            </Project>
          )
        })
      }
    </div>
  </div>
)

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectList

import React, { PropTypes } from 'react';
import Project from './Project'

const ProjectList = ({projects, onFormChange, onAddProjectTodo}) => (
  <div>
    <div>
      { projects.map((project, index)=>{
          return(
            <Project key={index}
                     id={index}
                     name={project.name}
                     description={project.description}
                     formValue={project.formValue}
                     onFormChange={onFormChange}
                     onAddProjectTodo={onAddProjectTodo}
                     todos={project.todos}>
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

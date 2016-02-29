import React, { PropTypes } from 'react';

const Project = ({name, description, formValue, onFormChange, id, onAddProjectTodo}) => (
  <div>
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      Add a Todo for this project!
      <input type='text' value={formValue} onChange={onFormChange.bind(this, id)}></input>
      <button type='submit' onClick={onAddProjectTodo.bind(this, formValue, id)}>
        Add todo
      </button>
    </div>
  </div>
)

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default Project

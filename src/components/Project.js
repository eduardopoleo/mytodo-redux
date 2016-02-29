import React, { PropTypes } from 'react';

const Project = ({name, description, formValue, onFormChange}) => (
  <div>
    <div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        Add a Todo for this project!
        <input type='text' value={formValue} onChange={onFormChange}></input>
      </div>
    </div>
  </div>
)

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default Project

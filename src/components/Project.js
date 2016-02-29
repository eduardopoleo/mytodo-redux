import React, { PropTypes } from 'react';

const Project = ({name, description}) => (
  <div>
    <div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  </div>
)

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default Project

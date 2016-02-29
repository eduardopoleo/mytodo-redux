import React, { Component, PropTypes } from 'react';

const Form = ({name, description, onNameChange, onDescriptionChange }) => (
  <div>
    <input value={name} onChange={onNameChange} type='text' placeholder='name'/>
    <input value={description} onChange={onDescriptionChange} type='text' placeholder='description'/>
  </div>
)

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  onDescriptionChange: PropTypes.func.isRequired
}

export default Form

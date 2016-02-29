import React, { Component, PropTypes } from 'react';

const Form = ({name, onNameChange}) => (
  <div>
    <input value={name} onChange={onNameChange} type='text' placeholder='name'/>
  </div>
)

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
}

export default Form

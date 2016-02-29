import React, { Component, PropTypes } from 'react';

const Form = ({name, onChangeName}) => (
  <div>
    <input value={name} onChange={onChangeName} type='text' placeholder='name'/>
  </div>
)

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
}

export default Form

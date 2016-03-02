import React, { PropTypes } from 'react';

const Project = ({name, description, formValue, todos, id, onFormChange, onAddProjectTodo}) => (
  <div>
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      Add a Todo for this project!
      <input type='text' value={formValue} onChange={onFormChange.bind(this, id)}></input>
      <button type='submit' onClick={onAddProjectTodo.bind(this, formValue, id)}>
        Add todo
      </button>
      <ul>
        { todos.map((t) => {
            return (
              <li> {t.text} </li>
            )
          })
        }
      </ul>
    </div>
  </div>
)

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default Project

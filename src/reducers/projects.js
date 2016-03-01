import {find} from 'lodash'

const findProjectbyId = (projects, id) => {
  return(
    find(projects, (item) => {
      return id === item.id;
    })
  )
}

const projects = (state=[], action) => {
  let project = findProjectbyId(state, action.id)

  switch (action.type) {
    case 'ADD_PROJECT':
      return(
        [
          ...state,
          {
            id: state.length,
            name: action.name,
            description: action.description,
            todos: []
          }
        ]
      )
    case 'UPDATE_PROJECT_FORM':
      return(
        [
          ...state.slice(0, action.id),
          {
            ...project,
            formValue: action.text
          },
          ...state.slice(action.id + 1)
        ]
      )
    case 'ADD_PROJECT_TODO':
      console.log(state, action)
      return(
        [
          ...state.slice(0, action.id),
          {
            ...project,
            todos: [
              ...project.todos,
              action.todo
            ],
            formValue: ""
          },
          ...state.slice(action.id + 1)
        ]
      )
    default:
      return state
  }
}

export default projects;

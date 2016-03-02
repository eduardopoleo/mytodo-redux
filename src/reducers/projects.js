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
    case 'CREATE_PROJECT':
      return(
        [
          {
            id: action.project.id,
            name: action.project.name,
            description: action.project.description,
            todos: action.project.todos
          },
          ...state
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
    case 'FETCH_PROJECTS':
      return(
        [
          ...action.projects
        ]
      )
    default:
      return state
  }
}

export default projects;

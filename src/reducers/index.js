import {find} from 'lodash'

export const form = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_NAME':
      return (
        {
          ...state,
          name: action.text
        }
      )
    case 'UPDATE_FORM_DESCRIPTION':
      return (
        {
          ...state,
          description: action.text
        }
      )
    case 'ADD_PROJECT':
    return (
      {
        name: "",
        description: ""
      }
    )
    default:
      return state
  }
}

const findProjectbyId = (projects, id) => {
  return(
    find(projects, (item) => {
      return id === item.id;
    })
  )
}

export const projects = (state=[], action) => {
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

import { combineReducers } from 'redux'
const projectApp = combineReducers({
  form,
  projects
})

export default projectApp


// [
//   {
//     id,
//     name,
//     description
//     todos :{
//       taks
//       deadline
//     }
//   }
// ]

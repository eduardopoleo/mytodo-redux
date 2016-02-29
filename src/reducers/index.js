export const form = (state=[], action) => {
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

export const projects = (state=[], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return(
        [
          ...state,
          {
            name: action.name,
            description: action.description,
            todos: []
          }
        ]
      )
    default:
      return state
  }
}



import { combineReducers } from 'redux'
//Combine reducer will wrap the state in an object
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

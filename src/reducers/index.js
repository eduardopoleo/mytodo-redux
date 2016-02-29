export const form = (state=[], action) => {
  switch (action.type) {
    case 'UPDATE_FORM_NAME':
    console.log("state", state, "action", action)
      return(
        {
          ...state,
          name: action.text
        }
      )
    case 'UPDATE_FORM_DESCRIPTION':
    console.log("state", state, "action", action)
      return(
        {
          ...state,
          description: action.text
        }
      )
    default:
      return state
  }
}

import { combineReducers } from 'redux'
//Combine reducer will wrap the state in an object
const projectApp = combineReducers({
  form
})

export default projectApp

// console.log("state", state, "action", action)

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

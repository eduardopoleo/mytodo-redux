export const form = (state=[], action) => {
  switch (action.type) {
    case 'UPDATE_FORM_NAME':
      return(
        {
          ...state,
          name: action.name
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

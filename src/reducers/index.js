let nextProject = 0;
export const Project = (state={}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      [
        ...state,
        {
          id: nextProject++,
          name: action.name,
          description: action.description,
          todos: []
        }
      ]
    default:
      return state
  }
}

import { combineReducers } from 'redux'

const projectApp = combineReducers({
  Project
})

//Why can't I just export the reducer it self why I need to combine it?
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

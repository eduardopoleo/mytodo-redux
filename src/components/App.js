import React, { Component } from 'react';

import ProjectList from './ProjectList'
import AddProject from './AddProject'

export default class App extends Component {
  render() {
    return (
      <div>
        <AddProject/>
        <ProjectList/>
      </div>
    );
  }
}

// [
//   Projects: {
//     id,
//     name,
//     description
//     todos :{
//       taks
//       deadline
//     }
//   }
// ]

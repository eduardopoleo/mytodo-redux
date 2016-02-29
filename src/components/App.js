import React, { Component } from 'react';

import Projects from '../containers/Projects'
import Form from '../containers/Form'

export default class App extends Component {
  render() {
    return (
      <div>
        <Form/>
        <Projects/>
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

import React, { Component } from 'react';
import ProjectList from './components/ProjectList'

const projects = [
  {
    name: 'First project',
    description: 'firs decr'
  },
  {
    name: 'Second project',
    description: 'second desc'
  }
]

export default class App extends Component {
  render() {
    return (
      <ProjectList projects={projects}/>
    );
  }
}

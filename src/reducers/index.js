import { combineReducers } from 'redux'
import form from './form';
import projects from './projects';

const projectApp = combineReducers({
  form,
  projects
})

export default projectApp;

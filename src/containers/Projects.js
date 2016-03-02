import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList'
import { updateProjectForm, addProjectTodo } from '../actions'
import fetchProjects from '../utils/async'

const initState = [
    {
      name: 'Something',
      description: "nothing",
    }
]

const mapStateToProps = (state) => {
  return {
    projects: state.projects || initState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFormChange: (id, event) => {
      dispatch(updateProjectForm(event.target.value, id))
    },
    onAddProjectTodo: (todo, id) => {
      dispatch(addProjectTodo(todo, id))
    },
    fetchProjects: () => {
      fetchProjects(dispatch)
    }
  }
}

const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default Projects

import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList'
import { updateProjectForm } from '../actions'

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
    }
  }
}

const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default Projects

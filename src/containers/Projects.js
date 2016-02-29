import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList'
import { updateProjectFrom } from '../actions'

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
    onFormChange: (event) => {
      dispatch(updateProjectFrom(event.target.value))
    }
  }
}

const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default Projects

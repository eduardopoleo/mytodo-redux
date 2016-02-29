import { connect } from 'react-redux'
import ProjectList from '../components/ProjectList'

const initState = [
    {
      name: 'Something',
      description: "nothing"
    }
]

const mapStateToProps = (state) => {
  return {
    projects: state.projects || initState
  }
}

const Projects = connect(
  mapStateToProps,
  null
)(ProjectList)

export default Projects

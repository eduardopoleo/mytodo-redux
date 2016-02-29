import { connect } from 'react-redux'
import { updateFormName } from '../actions'
import Form from '../components/Form'

const initState = [
  {
    name: 'Something',
    description: "nothing"
  }
]

const mapStateToProps = (state) => {
  return {
    name: state.form.name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNameChange: (event) => {
      dispatch(updateFormName(event.target.value))
    }
  }
}

const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default Projects

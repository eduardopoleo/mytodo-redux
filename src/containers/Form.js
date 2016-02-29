import { connect } from 'react-redux'
import { updateFormName, updateFormDescription } from '../actions'
import Form from '../components/Form'

const mapStateToProps = (state) => {
  return {
    name: state.form.name,
    description: state.form.description
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNameChange: (event) => {
      dispatch(updateFormName(event.target.value))
    },
    onDescriptionChange: (event) => {
      dispatch(updateFormDescription(event.target.value))
    }
  }
}

const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default Projects

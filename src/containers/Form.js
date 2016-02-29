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
    onChangeName: (text) => {
      dispatch(updateFormName(text))
    }
  }
}

const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default Projects

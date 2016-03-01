const form = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_NAME':
      return (
        {
          ...state,
          name: action.text
        }
      )
    case 'UPDATE_FORM_DESCRIPTION':
      return (
        {
          ...state,
          description: action.text
        }
      )
    case 'ADD_PROJECT':
    return (
      {
        name: "",
        description: ""
      }
    )
    default:
      return state
  }
}

export default form;

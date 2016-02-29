// [
//   form: {
//     name:,
//     description:,
//   },
//   Projects: {
//     id,
//     name,
//     description
//     todos :{
//       taks
//       deadline
//     }
//   }
// ]

export const updateFormName = (text) => {
  return {
    type: 'UPDATE_FORM_NAME' ,
    text: text
  };
};

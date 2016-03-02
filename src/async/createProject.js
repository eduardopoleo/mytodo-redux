import $ from 'jquery'

export default function createProject(dispatch, name, description) {
  $.ajax({
      method: "POST",
      url: "http://localhost:2300/projects",
      data: { project: {name: name, description: description} },
      dataType: "json",
      xhrFields: { withCredentials: false}
    }).success(function(data){
      return dispatch({type:'CREATE_PROJECT', project: data.project});
    });
}

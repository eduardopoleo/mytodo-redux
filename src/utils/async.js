import $ from 'jquery'

export default function fetchProjects(dispatch) {
  $.ajax({
      method: "GET",
      url: "http://localhost:2300/projects",
      dataType: "json",
      xhrFields: { withCredentials: false}
    }).success(function(data){
      return dispatch({type:'FETCH_PROJECTS', projects: data.projects});
    });
}

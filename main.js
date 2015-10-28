$(document).ready(function() {

var herokuapp = "http://json-data.herokuapp.com/forms";

$.ajax({
  url: herokuapp,
  method: 'get',
  dataType: 'json'
}).then(function(data) {

  var newData = {"data": data};

  var template = $("#appInfo").text();

  var listHTML = Mustache.render(template, newData);

  $("#formTemplate").html(listHTML);

  });

});

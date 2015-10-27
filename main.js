$(document).ready(function() {

var herokuapp = "http://json-data.herokuapp.com/forms";

$.ajax({
  url: etsyURL,
  dataType: 'json',
  method: 'get'
}).then (function (data) {

  var filterMap = data.results.map(function(obj) {
    return {


    };
  });

  var newData = {filterMap: filterMap};

  var template = $("#").text();

  var listHTML = Mustache.render(template, newData);

  $("#pictureContainer").html(listHTML);

  });

});

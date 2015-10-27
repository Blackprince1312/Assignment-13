$(document).ready(function() {
  var filterMap = data.results.map(function(obj) {
    return {

    };
  });

  var newData = {filterMap: filterMap};

  var template = $("#").text();

  var listHTML = Mustache.render(template, newData);

  $("#pictureContainer").html(listHTML);


});

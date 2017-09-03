$(document).ready(function() {
  $.ajax({
    url: 'http://json-data.herokuapp.com/forms',
    method: 'GET',
    dataType: 'json',
    success: function(result) {
      result.forEach(function(element) {

        console.log(element);

        var options = element.options
        var select = function(options) {
          for (var i = 0; i < options.length; i++) {
            var optionsSelect = options[i].label
            var option = document.createElement("option");
            option.text = optionsSelect;
            option.value = "myvalue";
            var select = document.getElementById("formTemplate");
            select.appendChild(option);

          }
        }

        select(options);
        document.getElementById('formTemplate').innerHTML += `
          <input type="${element.type}" value="${element.label}"/>
          `
      })
    }
  })
})

// var result = jsObjects.filter(function(obj) {
//   return obj.b == 6;
// });
//
// console.log(result);

$(document).ready(function() {
  $.ajax({
    url: 'http://json-data.herokuapp.com/forms',
    method: 'GET',
    dataType: 'json',
    success: function(result) {

      result.forEach(function(element) {

        document.getElementById('formTemplate').innerHTML += `
          <input type="${element.type}" value="${element.label}"/>`

        var options = element.options
        var select = function(options) {
          for (var i = 0; i < options.length; i++) {
            var optionsSelect = options[i].label
            var node = document.createElement('option')
            var textnode = document.createTextNode(optionsSelect)
            node.appendChild(textnode)
            document.getElementById('formTemplate').innerHTML += `<select id="options"></select>`
            document.getElementById('options').appendChild(node)
          }
        }

        select(options)

      })

    }
  })
})

$(document).ready(function () {
  $('#submit').click(function () {
    $.ajax({
      url:'http://json-data.herokuapp.com/forms',
      method:'GET',
      dataType: 'json',
      success: function (result) {
        $('#formTemplate').html(`<p> ${result}</p>`)
        console.log(result);
      }
    })
  })
})

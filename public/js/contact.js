var submitForm = function() {
  //prevent reload
  event.preventDefault();

  //grab details from form
  var profile = {
    name: $("#name").val().trim(),
    gender: $("#gender").val().trim(),
    email:  $("#email").val().trim(),
    city: $("#city").val().trim(),
    state: $("#state").val().trim(),
    crafts: $("#craft").val().trim(),
    availability: $("#availability").val().trim(),
    description: $("#description").val().trim(),
  };

  //send profile values to database


  //clear form
  $("#name").val("")
  $("#email").val("")
  $("#city").val("")
  $("#state").val("")
  $("#craft").val("")
  $("#availability").val("")
  $("#description").val("")
}

//listener for the submit form button being clicked
$(".form_submit").on("click", submitForm());

function submitForm() {

  //grab details from form
  var profile = {
    name: $("#name").val(),
    gender: $("#gender").val(),
    email:  $("#email").val(),
    city: $("#city").val(),
    state: $("#state").val(),
    crafts: $("#craft").val(),
    availability: $("#availability").val(),
    description: $("#description").val(),
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
$("#submit").on("click", function(event){
    //prevent reload
    event.preventDefault();

    submitForm();

    $("#myModal").modal("show");
});

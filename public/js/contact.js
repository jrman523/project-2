function submitForm() {

  //grab details from form
  var city = $("#city").val();
  var state = $("#state").val();

  var profile = {
    name: $("#name").val(),
    gender: $("#gender").val(),
    email: $("#email").val(),
    location: `${city},  ${state}`,
    crafts: $("#craft").val(),
    availability: $("#availability").val(),
    description: $("#description").val(),
  };

  //send profile values to database
  $.post("/api/listing", profile)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
    });

  //clear form
  $("#name").val("");
  $("#email").val("");
  $("#city").val("");
  $("#state").val("");
  $("#craft").val("");
  $("#availability").val("");
  $("#description").val("");

}

//listener for the submit form button being clicked
$("#submit").on("click", function (event) {
  //prevent reload
  event.preventDefault();

  submitForm();

  $("#myModal").modal("show");
});

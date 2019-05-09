//listener for the submit form button being clicked
$("#gig-form").on("submit", function (event) {
  //prevent reload
  event.preventDefault();

  var city = $("#city").val();
  var state = $("#stateSearch").val();

  //grab details from form
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

  //send profile values to database
  console.log(profile);


  //clear form
  $("#gig-form")[0].reset();

  $("#myModal").modal("show");

});

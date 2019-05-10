//listener for the submit form button being clicked
var modalOpen = false;
$("#gig-form").on("submit", function (event) {
  //prevent reload
  event.preventDefault();

  var city = $("#city").val();
  var state = $("#stateSearch").val();

  //grab details from form
  var profile = {
    name: $("#name").val(),
    sex: $('input[name="radios"]:checked').val(),
    email: $("#email").val(),
    location: `${city}, ${state}`,
    craft: $("#craft").val(),
    available: $("#availability").val(),
    description: $("#description").val(),
    img: $("#image").val()
  };


  //send profile values to database
  $.post("/api/listing", profile)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
    });


  //clear form
  $("#gig-form")[0].reset();

  $("#myModal").modal("show");
  modalOpen = true;
});

$(document).on("click", "body *", ".close", function () {
  if (modalOpen === true) {
    $("#myModal").modal("hide");
    modalOpen = false;
  }
});

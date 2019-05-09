//listener for the submit form button being clicked
$("#gig-form").on("submit", function(event){
  //prevent reload
  event.preventDefault();

  console.log("quotes works");

  var city = $("#city").val();
  var state = $("#stateSearch").val();

  //grab details from form
  var profile = {
    name: $("#name").val(),
    gender: $('input[name="radios"]:checked').val(),
    email:  $("#email").val(),
    location: `${city}, ${state}`,
    crafts: $("#craft").val(),
    availability: $("#availability").val(),
    description: $("#description").val(),
  };

  
  //send profile values to database
  console.log(profile);


  //clear form
  $("#gig-form")[0].reset();

  $("#myModal").modal("show");
});

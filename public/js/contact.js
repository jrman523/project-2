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
<<<<<<< HEAD
  $("#name").val("")
  $("#email").val("")
  $("#city").val("")
  $("#state").val("")
  $("#craft").val("")
  $("#availability").val("")
  $("#description").val("")

}

//listener for the submit form button being clicked
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var close = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}

close.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(e) {
	console.log(e);
	if(e.target == modal) {
		modal.style.display = "none";
	}
}
=======
  $("#gig-form")[0].reset();

  $("#myModal").modal("show");
});
>>>>>>> 5dc25edaf77824b91f485bf0acc6b55b34e6d03d

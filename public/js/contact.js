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
window.onload = function () {
  $("#results").html("");
  getAll();
};

$("#search").on("click", function (event) {
  event.preventDefault();

  var craft = $("#craft").val();
  var location = $("#location").val();
  var available = $("#date").val();
  $("#results").html("");

  $.get(`/api/listing/${craft}/${location}/${available}`, function (data) {
    insert(data);
  });

  $("#search-form")[0].reset();
});


$("#all").on("click", function () {
  $("#results").html("");
  getAll();
});

function getAll() {
  $.get("/api/listing", function (data) {
    insert(data);
  });
}

function insert(res) {
  for (let i = 0; i < res.length; i++) {
    var col = $("<div class='col-lg-4 col-md-4 col-sm-12 col-xm-12'>");
    var card = $("<div class='card mb-3 text-center'>");
    var img = $("<img class='card-img-top' style='height:250px;'>").attr("src", res[i].img);
    var cardBody = $("<div class='card-body'>");
    var name = $("<h5 class='card-title'>").text(`${res[i].name}`);
    var date = $("<h6 class='card-subtitle mb-2 text-muted'>").text(`${res[i].available}`);
    var text = $("<p class='card-text'>").text(`${res[i].craft}`);
    var button = $("<button id='details' class='btn btn-primary'>See details</button>").attr("value", res[i].id);

    card.append(img);
    cardBody.append(name);
    cardBody.append(date);
    cardBody.append(text);
    cardBody.append(button);
    card.append(cardBody);
    col.append(card);
    $("#results").append(col);
  }
}

$(document).on("click", "#details", function () {
  var value = $(this).val();
  $("#searchModal").modal("show");
  $.get(`/api/person/${value}`, function (data) {
    console.log(data[0].craft);
    $("#name").text(data[0].name);
    $("#name-body").text(data[0].name);
    $("#craft-body").text(data[0].craft);
    $("#location-body").text(data[0].location);
    $("#description-body").text(data[0].description);
    $("#email-body").text(data[0].email);
  });
});

$(document).on("click", "body *", "#close", function () {
  $("#searchModal").modal("hide");
}); 
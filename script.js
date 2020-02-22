// // Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   var uluru = {lat: -25.344, lng: 131.036};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 4, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }

// function initMap() {
// }
var formBtn = $(".type-btn");
var bookBtn = $(".bookBtn");
var menuBtn = $(".menuBtn");
var genBtn = $(".genBtn");
var bookingForm = $("#bookingForm");
var menuForm = $("#menuForm");
var genForm = $("#generalForm");

bookBtn.on("click", function () {
  $(this).addClass("selected");
  menuBtn.removeClass("selected");
  genBtn.removeClass("selected");
  bookingForm.removeClass("d-none");
  menuForm.addClass("d-none");
  genForm.addClass("d-none");
  $("#Date").prop("required", true);
  $("#time").prop("required", true);
  $("#bookingPeople").prop("required", true);
  $("#bookingMessage").prop("required", true);
  $("#MenuMessage").removeAttr("required"); 
  $("#genMessage").removeAttr("required"); 
})
menuBtn.on("click", function () {
  $(this).addClass("selected");
  bookBtn.removeClass("selected");
  genBtn.removeClass("selected");
  menuForm.removeClass("d-none");
  bookingForm.addClass("d-none");
  genForm.addClass("d-none");
  $("#MenuMessage").prop("required", true);
  $("#Date").removeAttr("required");
  $("#time").removeAttr("required");
  $("#bookingPeople").removeAttr("required");
  $("#bookingMessage").removeAttr("required"); 
  $("#genMessage").removeAttr("required"); 
})
genBtn.on("click", function () {
  $(this).addClass("selected");
  bookBtn.removeClass("selected");
  menuBtn.removeClass("selected");
  genForm.removeClass("d-none");
  bookingForm.addClass("d-none");
  menuForm.addClass("d-none");
  $("#genMessage").prop("required");
  $("#MenuMessage").removeAttr("required");
  $("#Date").removeAttr("required");
  $("#time").removeAttr("required");
  $("#bookingPeople").removeAttr("required");
  $("#bookingMessage").removeAttr("required");  
})

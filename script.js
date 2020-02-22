var bookingForm = $("#bookingForm");
var menuForm = $("#menuForm");
var generalForm = $("#generalForm");
var activeForm = "";

var contactBtns = document.querySelectorAll(".contactBtn");
contactBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    $(".contactBtn").removeClass("selected"); // de-select all three buttons
    btn.classList.add("selected"); // select this button

    activeForm = getFormType(btn);
    
    switch (activeForm) {
      case "booking":
        showBookingForm();
        break;
      case "menu":
        showMenuForm();
        break;
      case "general":
        showGeneralForm();
        break;
    }

    $('input[name="formType"]').val(activeForm); // set the form type to submit so PHP knows what's up
    $("#submit").removeClass("d-none"); // show submit button
  });
});

function getFormType(btn) {
  if (btn.classList.contains("bookBtn")) {
    return "booking";
  }
  else if (btn.classList.contains("menuBtn")) {
    return "menu";
  }
  else if (btn.classList.contains("genBtn")) {
    return "general";
  }

  return "";
}

function showBookingForm() {
  menuForm.addClass("d-none");
  generalForm.addClass("d-none");
  bookingForm.removeClass("d-none");

  $("#date").prop("required", true);
  $("#time").prop("required", true);
  $("#bookingPeople").prop("required", true);
  $("#bookingMessage").prop("required", true);
  $("#menuMessage").removeAttr("required");
  $("#genMessage").removeAttr("required");
}

function showMenuForm() {
  bookingForm.addClass("d-none");
  generalForm.addClass("d-none");
  menuForm.removeClass("d-none");

  $("#menuMessage").prop("required", true);
  $("#date").removeAttr("required");
  $("#time").removeAttr("required");
  $("#bookingPeople").removeAttr("required");
  $("#bookingMessage").removeAttr("required");
  $("#genMessage").removeAttr("required");
}

function showGeneralForm() {
  bookingForm.addClass("d-none");
  menuForm.addClass("d-none");
  generalForm.removeClass("d-none");

  $("#genMessage").prop("required", true);
  $("#menuMessage").removeAttr("required");
  $("#date").removeAttr("required");
  $("#time").removeAttr("required");
  $("#bookingPeople").removeAttr("required");
  $("#bookingMessage").removeAttr("required");
}
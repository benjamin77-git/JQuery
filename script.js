$(document).ready(function () {
  $("#checkInput").click(function () {
    // Get the value entered in the input field
    var inputValue = $("#myInput").val();

    // Use switch to check the value and perform actions
    switch (inputValue) {
      case "1":
        // Delete button1
        $("#button1").remove();
        break;
      case "2":
        // Delete button1 and button2
        $("#button1").remove();
        $("#button2").remove();
        break;
      default:
        alert("Invalid input. Please enter 1 or 2.");
    }
  });
});

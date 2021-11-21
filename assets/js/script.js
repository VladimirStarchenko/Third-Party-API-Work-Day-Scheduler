// display current date in the header
function displayTime() {
  var time = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").html(time);
}
$(document).ready(function () {
  displayTime();
});

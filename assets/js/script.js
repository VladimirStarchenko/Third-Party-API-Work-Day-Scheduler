// display current date in the header
function displayTime() {
  var time = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").html(time);
}
$(document).ready(function () {
  displayTime();
});
// display time (by hours) in slots starting from 9am to 5pm (business hours)
// t is designated as the start numerical value for my time blocks
//used in the for loop
function listOfTime() {
  var t = 9;

  // used as current time by hour for the timeblocks to reference to for color coding
  var currentTime = moment().hour();
  console.log(currentTime);
}

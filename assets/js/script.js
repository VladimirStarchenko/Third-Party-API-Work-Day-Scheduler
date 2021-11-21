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

  // for loop, loops over my var t and will add on timeblocks until I have a total of 9 from 9AM to 5PM
  for (var i = 0; i < 9; i++) {
    var text = localStorage.getItem(t);

    var timeSlots = moment().hour(t).format("h A");
    var divEl = $("<div>").addClass("row");
    var timeEl = $("<p>").addClass("hour col-1").html(timeSlots);
    var textareaEl = $("<textarea>")
      .addClass("description col-10")
      .attr("id", t)
      .val(text);
    var buttonEl = $("<button>")
      .addClass("saveBtn col-1 fa fa-save")
      .attr("data-id", t);
    $(".container").append(divEl);
    divEl.append(timeEl, textareaEl, buttonEl);
    console.log(timeSlots);

    // if/else statement based on the current time and the time slots,
    // grey: past, red:present, green:future
    if (t === currentTime) {
      console.log("red");
      $(textareaEl).addClass("present");
    } else if (currentTime > t) {
      $(textareaEl).addClass("past");
    } else if (currentTime < t) {
      $(textareaEl).addClass("future");
    }
    t++;
  }
  // when I press my save button next to the time slot, the item I have scheduled for that time block saves to my localStorage
  $(".saveBtn").on("click", function () {
    var dataId = $(this).attr("data-id");
    var textbox = $("#" + dataId).val();
    localStorage.setItem(dataId, textbox);
  });
}
listOfTime();

// $(".time-block").removeClass("future");
// $(".time-block").removeClass("past");
// $(".time-block").removeClass("present");

var present = moment().format("H");
var currentDate= moment().format("dddd, MMMM Do");
var dateSpace=$("#currentDay");

// creates the date in header
dateSpace.append(currentDate);

// creates the function that adds css to past, present and future blocks
if (present < 9) {
    $(".time-block").addClass("future");
}
else if (present > 18) {
    $(".time-block").addClass("past");
} else {
    var present_id = moment().format("#hA");

    $(present_id).addClass("present");
    $(present_id).nextAll().addClass("future");
    $(present_id).prevAll().addClass("past");
}

// On clicking the same button, get the text in the corrosponding text area
$(".saveBtn").on("click", function(e) {
    var description = $(this).parent().find('.description');
    var text = description.val();
    var hour = description.attr('name');
});
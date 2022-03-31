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

// Repopulate textarea from local storage
var start_time = 9;
var end_time = 18;
t = start_time;
while(t<end_time) {
    ampm = "AM";
    ampm_t=t;
    if(t>=12){
        ampm = "PM";
        if(t>12){
           ampm_t = t-12;
        }
    }
    var t_ampm = ampm_t+ampm;
    var descr = localStorage.getItem(t_ampm);
    if (descr!=null) {
        $('#'+t_ampm+' textarea').val(descr);
    }
    t++;
}

// On clicking the same button, get the text in the corrosponding text area
$(".saveBtn").on("click", function(e) {
    var description = $(this).parent().find('.description');
    var text = description.val();
    var hour = description.attr('name');
    localStorage.setItem(hour, text);
});
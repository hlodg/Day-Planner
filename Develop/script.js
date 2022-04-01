// variables to find current time using Moment
var present = moment().format("H");
var currentDate= moment().format("dddd, MMMM Do");
var dateSpace=$("#currentDay");

// creates the date in header
dateSpace.append(currentDate);

// creates the function that adds css to past, present and future blocks
// if variable for when the time is early and everything is in the future
if (present < 9) {
	$(".time-block").addClass("future");
}
// if it is late and everything is in the past
else if (present > 18) {
	$(".time-block").addClass("past");
// during business hours, this function takes the current time an decides if it is present future or past and applies class
} else {
	var present_id = moment().format("#hA");

	$(present_id).addClass("present");
	$(present_id).nextAll().addClass("future");
	$(present_id).prevAll().addClass("past");
}

var start_time = 9;
var end_time = 18;
t = start_time;
// As long as the time is less than 12, using 24 hour clock, then it reads PM. 
while(t<end_time) {
	ampm = "AM";
	ampm_t=t;
	if(t>=12){
		ampm = "PM";
		// if time is over 12 on 24 hour clock goes down 12 hours in order to convert to 12 hour clock
		if(t>12){
		   ampm_t = t-12;
		}
	}
	var t_ampm = ampm_t+ampm;
	var descr = localStorage.getItem(t_ampm);
	// if there is no value for timeblock in local storage it will not do anything, just go to the next
	if (descr!=null) {
		$('#'+t_ampm+' textarea').val(descr);
	}
	t++;
}

// On clicking the same button, get the text in the corrosponding text area
$(".saveBtn").on("click", function(e) {
	// text area variable
	var description = $(this).parent().find('.description');
	// text value variable
	var text = description.val();
	// hour variable
	var hour = description.attr('name');
	// saves the event to the local storage
	localStorage.setItem(hour, text);
});
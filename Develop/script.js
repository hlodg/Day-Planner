var timeblock_table = $('.timeblocks');

var start_time = 9;
var end_time = 22;

var times = [];

t = start_time;
while(t<=end_time) {
    ampm = "AM";
    ampm_t=t;
    if(t>=12){
        ampm = "PM";
        if(t>12){
           ampm_t = t-12;
        }
    }
    times.push(ampm_t+ampm);
    t++;
}


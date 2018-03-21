var startTime = document.getElementById("startTime");
var stopTime = document.getElementById("stopTime");
var resetTime = document.getElementById("resetTime");
var timerField = document.getElementById("timer");
var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hrs = document.getElementById("hrs");

var time = {
    sec: 0,
    min: 0,
    hrs: 0,

    currentTime: this.hrs + " : " + this.min + " : " + this.sec,

    printTime: function(target) {
        currentTime = this.hrs + " : " + this.min + " : " + this.sec;
        target.textContent = currentTime;
    },

    timer: function() {
        if (this.sec < 59) {
            this.sec++;
        } else if (this.sec === 0 && this.min < 59) {
            this.sec = 0;
            this.min++;
        } else if (this.sec === 0 && this.min === 0) {
            this.sec = 0;
            this.min = 0;
            this.hrs++;
        }
    }
}
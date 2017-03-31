var time;
var timerMinutes;
var timerSeconds;
var times = new Array();
var dates = new Array();


function Stopwatch(elem) {
  var interval;
  var offset;

  function update() {
    if (this.isOn) {
      var timePassed = delta();
      time += timePassed;
    }
    var timer = document.getElementById('timer');
    
    var formattedTime = timeFormatter(time);
    timer.textContent = formattedTime;
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInSeconds) {
    var time = new Date(timeInSeconds);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
	timerMinutes = minutes;
	timerSeconds = seconds;
    return minutes + ' : ' + seconds ;
  }
 

  this.isOn = false;

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function() {
    time = 0;
    update();
  };
}


var timer = document.getElementById('timer');

var watch = new Stopwatch(timer);

function start() {
  document.getElementById("toggle").src="/media/img/start-down.png";
  watch.start();
}

function stopTimer() {
  document.getElementById("toggle").src="/media/img/start-up.png";
  document.getElementById("stop").src="/media/img/stop-down.png";
  watch.stop();
  setTimeout(function(){
	document.getElementById("stop").src="/media/img/stop-up.png";
	}, 190);	

}
function resetTimer(){
	 watch.reset();
}

function practHistory(){
	if (timerSeconds > 0){
        
        times.push(timerMinutes + ' : ' + timerSeconds);
	dates.push( new Date().toJSON().slice(0,10).replace(/-/g,'/'));
        
	setTime(times, dates);	
        
	}
}

function setTime(times, dates){
    var textnode = "";
    for (i = times.length - 1; i >= 0;  i--){
			textnode += dates[i] + ": Practiced for " + times[i] + "</br>";
	}
	document.getElementById("practiceHistory").innerHTML = textnode;
        
        localStorage.setItem("practiceTimes", JSON.stringify(times.slice(0).slice(-7)));
	localStorage.setItem("practiceDates", JSON.stringify(dates.slice(0).slice(-7)));
}

function remTimes(){
    var retrieveTimes = JSON.parse(localStorage.getItem("practiceTimes"));
    var retrieveDates =  JSON.parse(localStorage.getItem("practiceDates"));
    if (retrieveTimes === null){
        
    }else{
    if (retrieveTimes.length > 0){
	setTime(retrieveTimes, retrieveDates);
        times = retrieveTimes;
        dates = retrieveDates;
    }
    }
}


var time;
var practiceHistory = new Array();
var daysDate = new Array();
var timerMinutes;
var timerSeconds;

function Stopwatch(elem) {
  var interval;
  var offset;

  function update() {
    if (this.isOn) {
      var timePassed = delta();
      time += timePassed;
    }

    var formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
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
var toggleBtn = document.getElementById('toggle');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');
var setBtn = document.getElementById('set');

var watch = new Stopwatch(timer);

function start() {
  document.getElementById("toggle").src="media/img/start-down.png";
  watch.start();
}

function stop() {
  document.getElementById("toggle").src="media/img/start-up.png";
  document.getElementById("stop").src="media/img/stop-down.png";
  watch.stop();
  setTimeout(function(){
	document.getElementById("stop").src="media/img/stop-up.png";
	}, 150);	

}
function resetTimer(){
	 watch.reset();
}

stopBtn.addEventListener('click', function() {
  stop();

});

toggleBtn.addEventListener('click', function() {
  start();
});
resetBtn.addEventListener('click', function() {
  watch.reset();
});
setBtn.addEventListener('click', function() {
  practHistory();
});

function practHistory(){
	var textnode = "";
	if (timerSeconds > 0){
		
	practiceHistory.push(timerMinutes + ' : ' + timerSeconds);
	daysDate.push( new Date().toJSON().slice(0,10).replace(/-/g,'/'));
	
	localStorage.setItem("practiceDates", JSON.stringify(daysDate.slice(0).slice(-7)));
	localStorage.setItem("practiceTimes", JSON.stringify(practiceHistory.slice(0).slice(-7)));
	
	var times = JSON.parse(localStorage.getItem("practiceTimes"));
	var dates = JSON.parse(localStorage.getItem("practiceDates"));
	
	for (i = times.length - 1; i >= 0;  i--){
			textnode += dates[i] + ": Practiced for " + times[i] + "</br>";
	}
	document.getElementById("practiceHistory").innerHTML = textnode;
	
	
	}


}

function remTimes(){
	var textnode = "";
	var times = JSON.parse(localStorage.getItem("practiceTimes"));
	var dates = JSON.parse(localStorage.getItem("practiceDates"));
	
	for (i = times.length - 1; i >= 0;  i--){
			textnode += "On " + dates[i] + " you practiced for: " + times[i] + "</br>";
	}
	document.getElementById("practiceHistory").innerHTML = textnode;
}

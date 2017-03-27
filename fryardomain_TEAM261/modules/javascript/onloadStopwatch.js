
var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById('reset');
var setBtn = document.getElementById('set');

var watch = new Stopwatch(timer);

function start() {
  document.getElementById("toggle").src="/media/img/start-down.png";
  watch.start();
}

function stop() {
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
	if (timerSeconds > 0){
        
	var times = JSON.parse(localStorage.getItem("practiceTimes"));
	var dates = JSON.parse(localStorage.getItem("practiceDates"));
        
        times.push(timerMinutes + ' : ' + timerSeconds);
	dates.push( new Date().toJSON().slice(0,10).replace(/-/g,'/'));
        
	setTime(times, dates);	
        
	}
}

function setTime(time, date){
    var textnode = "";
    for (i = time.length - 1; i >= 0;  i--){
			textnode += date[i] + ": Practiced for " + time[i] + "</br>";
	}
	document.getElementById("practiceHistory").innerHTML = textnode;
        
        localStorage.setItem("practiceTimes", JSON.stringify(time.slice(0).slice(-7)));
	localStorage.setItem("practiceDates", JSON.stringify(date.slice(0).slice(-7)));
}

function remTimes(){
        var times = JSON.parse(localStorage.getItem("practiceTimes"));
	var dates = JSON.parse(localStorage.getItem("practiceDates"));
	setTime(times, dates);
}
function mailTime(){
    $.ajax( { type : 'POST',
          data : { },
          url  : '/pages/mail2.php',              // <=== CALL THE PHP FUNCTION HERE.
          success: function ( data ) {
            alert( 'Your message and amount of time practiced has been sent');               // <=== VALUE RETURNED FROM FUNCTION.
          },
          error: function ( xhr ) {
            alert( "error" );
          }
        });
}

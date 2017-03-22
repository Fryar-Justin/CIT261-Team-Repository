
                <h1 id="timer">00 : 00 </h1>
  		<img id="toggle" src="/media/img/start-up.png" ></img>
  		<img id="stop" src="/media/img/stop-up.png" ></img><br>
  		<button id="set" ontouch="practHistory()" onload="resetTimer(), remTimes()">Set Practice Time</button>
  		<button id="reset">Reset</button>
  		
                <br onload="resetTimer(), remTimes()"><br>
                <p>Optional Message:</p><textarea id="message" class="timerMessage"></textarea><br>
                <button id="send" class="sendButton" onclick="mailTime()">Send Latest Practice Time to Teacher</button><br>
                <h2>Last Seven Practice Times:</h2>
  		<div id="practiceHistory"></div>
                <script><?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/stopwatch.js'; ?></script>



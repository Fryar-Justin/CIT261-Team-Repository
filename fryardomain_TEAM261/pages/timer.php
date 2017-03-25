
<!DOCTYPE html>

<html>
    <head>
        <title>Practice Timer</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/navigation.js'; ?>                 // Contains navigation bar scripts
            
        </script>
    </head>
    <body onload="resetTimer(), remTimes()">
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent">
                <h1 id="timer">00 : 00 </h1>
  		<img id="toggle" src="/media/img/start-up.png"></img>
  		<img id="stop" src="/media/img/stop-up.png"></img><br>
  		<button id="set" ontouch="practHistory()">Set Practice Time</button>
  		<button id="reset">Reset</button>
                <script src="/modules/javascript/stopwatch.js"></script>
                <br><br>
                <p>Optional Message:</p><textarea id="message" class="timerMessage"></textarea><br>
                <button id="send" class="sendButton" onclick="mailTime()">Send Latest Practice Time to Teacher</button><br>
                <h2>Last Seven Practice Times:</h2>
  		<div id="practiceHistory"></div>
  		
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
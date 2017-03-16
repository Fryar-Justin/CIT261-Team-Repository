<!DOCTYPE html>

<html>
    <head>
        <title>Music Mania</title>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/navigation.js'; ?>                 // Contains navigation bar scripts
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/stopwatch.js'; ?> // Contains Scripts for this page
        </script>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent">
                <h1 id="timer">00 : 00 </h1>
                <img id="toggle" src="media/img/start-up.png"></img>
                <img id="stop" src="media/img/stop-up.png"></img><br>
                <button id="set">Set Practice Time</button>
                <button id="reset">Reset</button>
  
  <div id="practiceHistory"></div>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
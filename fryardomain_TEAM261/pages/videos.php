<!DOCTYPE html>

<html>
    <head>
        <title>Music Mania</title>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/navigation.js'; ?>                 // Contains navigation bar scripts
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/videos.js'; ?> // Contains Scripts for this page
        </script>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent">
                <h1>Helpful Tutorials</h1>
                <hr>
                <button class="rhythmBtn" type="button" onclick="displayVideo(1)">Sheet Music</button>
                <button class="rhythmBtn" type="button" onclick="displayVideo(2)">Major Piano Scales</button>
                <button class="rhythmBtn" type="button" onclick="displayVideo(3)">Minor Piano Scales</button>
                <button class="rhythmBtn" type="button" onclick="displayVideo(4)">Time Signatures</button>
                <button class="rhythmBtn" type="button" onclick="displayVideo(5)">Tuning a Guitar</button>
                <p>
                    <video id="video" controls><source id="source" src="/media/videos/How_to_Read_Sheet_music.mp4" type="video/mp4"></video>
                <p>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
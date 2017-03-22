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
    <body onload="main()">
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent">
                <h1>Helpful Tutorials</h1>
                <hr>
                <table width="80%">
                    <tr>
                        <td>
                            <h2>How to read sheet music:</h2>
                            <video controls><source src="/media/videos/How_to_Read_Sheet_music.mp4" type="video/mp4"></video>
                        </td>
                        <td>
                            <h2>Major Scales for Piano:
                            <video controls><source src="/media/videos/Major_Scales_Piano.mp4" type="video/mp4"></video>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Minor Scales for Piano:</h2>
                            <video controls><source src="/media/videos/Minor_Scales_Piano.mp4" type="video/mp4"></video>
                        </td>
                        <td>
                            <h2>Time Signatures:</h2>
                            <video controls><source src="/media/videos/Time_Signatures_Part_1.mp4" type="video/mp4"></video>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Tuning a Guitar:</h2>
                            <video controls><source src="/media/videos/Tuning_A_Guitar.mp4" type="video/mp4"></video>
                        </td>
                    </tr>
                </table>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
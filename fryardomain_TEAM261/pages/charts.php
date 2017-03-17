<!DOCTYPE html>

<html>
    <head>
        <title>Music Mania</title>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/navigation.js'; ?>                 // Contains navigation bar scripts
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/charts.js'; ?> // Contains Scripts for this page
        </script>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent">
                <h1>Fingering Charts</h1>
                <hr>
                <p>Please select an instrument to see the fingering charts</p>
                <select onclick="main()" id="instrument">
                    <option>Flute</option>
                    <option>Trumpet</option>
                    <option>Saxophone</option>
                    <option>Clarinet</option>
                    <option>Tuba</option>
                </select>
                <p id="fingeringCharts"></p>
                <button type="button" onclick="main()">Test</button>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
<!DOCTYPE html>

<html>
    <head>
        <title>Tuning</title>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/navigation.js'; ?>                 // Contains navigation bar scripts
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/tuning.js'; ?> // Contains Scripts for this page
        </script>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent">
                
                <div id="noteSelect">
                    <select onchange="noteChoice(value)">
                        <option value="Select">Select a Note</option>
                     <option value="A">A</option>
                        <option value="A♭">A&#9837;</option>
                        <option value="B">B</option>
                        <option value="B♭">B&#9837;</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="D♭">D&#9837;</option>
                        <option value="E">E</option>
                        <option value="E♭">E&#9837;</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                        <option value="G♭">G&#9837;</option>
                    </select>
                </div>
                <div id="noteView"></div>

            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
<!DOCTYPE html>

<html>
    <head>
        <title>Practice Regimen</title>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script src="/modules/javascript/regimen.js"></script>
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/navigation.js'; ?>                 // Contains navigation bar scripts
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/regimen.js'; ?> // Contains Scripts for this page
        </script>
       
    </head>
    <body onload="remRegimen()">
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent">
                <h1>Practice Regimen</h1>
                <input type="text" id="listInput" placeholder="Input List Item Here"></input><br><br>
                <button onclick="add()">Add</button>
                <button onclick="remove()">Remove</button>
                <button onclick="reset()">Reset List</button>
                <div id="practiceList" class="practiceList">
                    
                </div>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
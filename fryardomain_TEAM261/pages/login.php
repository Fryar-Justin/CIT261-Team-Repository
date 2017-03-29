<!DOCTYPE html>

<html>
    <head>
        <title>Music Mania</title>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/navigation.js'; ?>                 // Contains navigation bar scripts
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/login.js'; ?> // Contains Scripts for this page
        </script>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent">
              <h3>Please enter the name you registered at school with and the class code your professor gave you. </h3>
                <br>Name: <br>
                <input type= "text" id='nameInput'>
                <br>Passcode: <br>
                <input type= "text" id='passcodeInput'>
                <br><button type="button" onclick="verifyLogin()">Login</button>
                <div id= 'nameOutput'></div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
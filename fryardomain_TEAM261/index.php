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
               <div id="usernameOutput">Welcome</div>
                <hr>
                <p>Please Enter your login credentials. </p>
                <br>Username: 
                <input type= "text" id='usernameInput'>
                <br>Password: 
                <input type= "text" id='passwordInput'>
                <br><button type="button" onclick="verifyInfo()">Login</button>
                <p>Haven't registered? Fill out the form below to register your username and password!</p>
                <br>Please add your Username: 
                <input type= "text" id='usernameInput'>
                <br>Please add your Password: 
                <input type= "text" id='passwordInput'>
                <button type="button" onclick="addInfo()">Register</button>
                
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
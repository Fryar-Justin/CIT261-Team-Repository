<!DOCTYPE html>

<html>
    <head>
        <title>Music Mania</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/navigation.js'; ?> 
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/ajaxScript.js'; ?>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/tuning.js'; ?>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/regimen.js'; ?>
        </script>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent" id="rightContent">

            </div>
            <script><?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/stopwatch.js'; ?></script>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
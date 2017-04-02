<!DOCTYPE html>

<html>
    <head>
        <title>Music Mania</title>
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script>
            var pageDirectory = {videos:"videos",
                                 charts:"charts",
                                 calendar:"calendar",
                                 login:"login",
                                 rhythmResources:"rhythmResources",
                                 practice:"practice",
                                 tuning:"tuning",
                                 regimen:"regimen"};

            function getObject(directory) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        if (directory == "practice"){
                            handleManualObjectResponse(this.responseText);
                            resetTimer(); 
                            remTimes();
                        }
                        else if (directory == "regimen"){
                            handleManualObjectResponse(this.responseText);
                            remRegimen();
                        }
                        else {
                            created = false;
                            handleManualObjectResponse(this.responseText);
                        }
                    }
                }
                xmlhttp.open("GET", "/modules/pages/" + directory + ".txt", true);
                xmlhttp.send();

                function handleManualObjectResponse(response) {
                    document.getElementById('rightContent').innerHTML = response;
                }
                
            }
            
            

            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/charts.js'; ?>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/login.js'; ?>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/navigation.js'; ?>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/regimen.js'; ?>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/rhythmResources.js'; ?>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/tuning.js'; ?>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/videos.js'; ?>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/calendar.js'; ?>
        </script>
    </head>
    <body onload="getObject(pageDirectory.login)">
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent" id="rightContent">

            </div>
            <script>
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/stopwatch.js'; ?>
                <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/javascript/fade.js'; ?>
            </script>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'] . '/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
<!DOCTYPE html>

<html>
    <head>
        <title>Music Mania - Rhythm Resources</title>
        <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/head.php'; ?>         <!--Contains the CSS and Google Fonts links-->
        <script>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/navigation.js'; ?>                 // Contains navigation bar scripts
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/javascript/rhythmResources.js'; ?> // Contains Scripts for this page
        </script>
    </head>
    <body>
        <header>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/header.php'; ?>                               <!--Contains navigation tags-->
        </header>
        <main>
            <div class="rightContent">
                <h1>Rhythm Resources</h1>
                <p>Here are some sets of rhythm lines and audio recordings that will help you practice your rhythm.</p><br><br>


<button id="Example1" onclick='changeMedia("/media/rhythmResources/1.jpg", "/media/rhythmResources/1.ogg")'>Example 1</button>
<button id="Example2" onclick='changeMedia("/media/rhythmResources/2.jpg", "/media/rhythmResources/2.ogg")'>Example 2</button>
<button id="Example3" onclick='changeMedia("/media/rhythmResources/3.jpg", "/media/rhythmResources/3.ogg")'>Example 3</button>
<button id="Example4" onclick='changeMedia("/media/rhythmResources/4.jpg", "/media/rhythmResources/4.ogg")'>Example 4</button>
<button id="Example5" onclick='changeMedia("/media/rhythmResources/5.jpg", "/media/rhythmResources/5.ogg")'>Example 5</button>
<button id="Example6" onclick='changeMedia("/media/rhythmResources/6.jpg", "/media/rhythmResources/6.ogg")'>Example 6</button>
<button id="Example7" onclick='changeMedia("/media/rhythmResources/7.jpg", "/media/rhythmResources/7.ogg")'>Example 7</button>
<button id="Example8" onclick='changeMedia("/media/rhythmResources/8.jpg", "/media/rhythmResources/8.ogg")'>Example 8</button>
<button id="Example9" onclick='changeMedia("/media/rhythmResources/9.jpg", "/media/rhythmResources/9.ogg")'>Example 9</button>
    
    
    <br><br>

 <img id="exampleImg" src="imageSource" /><br>

<audio id= 'audioPlayer' controls>
      <source id="ogg_src" src="" type="audio/ogg" />
      Your browser does not support the audio element.
</audio>
            </div>
        </main>
        <footer>
            <?php include $_SERVER['DOCUMENT_ROOT'].'/modules/footer.php'; ?>                               <!--Contains footer tags-->
        </footer>
    </body>
</html>
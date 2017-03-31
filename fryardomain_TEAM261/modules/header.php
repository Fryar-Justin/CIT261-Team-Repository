<div id="header">
    <div class="banner">
        <h1  id="headerTag">Welcome!</h1>
    </div>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav(); fadeIn()">&times;</a>
        <!--<a href="#" onclick="getObject(pageDirectory.login)">  Login</a>-->
        <a href="#" onclick="closeNav(); getObject(pageDirectory.practice); fadeIn(); resetTimer(); remTimes(); ">Practice</a>
        <a href="#" onclick="closeNav(); getObject(pageDirectory.calendar); onclick=intervalTimer('canvas'); fadeIn();">Calendar</a>
        <p>Resources</p>
        <a href="#" onclick="closeNav(); getObject(pageDirectory.tuning); fadeIn();">  Tuning</a>
        <a href="#" onclick="closeNav(); getObject(pageDirectory.rhythmResources); fadeIn();">  Rhythms</a>
        <a href="#" onclick="closeNav(); getObject(pageDirectory.regimen); remRegimen(); fadeIn();">  Regimen</a>
        <a href="#" onclick="closeNav(); getObject(pageDirectory.charts); fadeIn();">  Charts</a>
        <a href="#" onclick="closeNav(); getObject(pageDirectory.videos); fadeIn();">  Videos</a>
    </div>
    <span id="icon" onclick="openNav()">&#9776;</span>
</div>

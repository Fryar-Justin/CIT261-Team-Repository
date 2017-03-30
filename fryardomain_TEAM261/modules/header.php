<div id="header">
    <div class="banner">
        <h1  id="headerTag">Welcome!</h1>
    </div>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#" onclick="getObject(pageDirectory.login)">  Login</a>
        <a href="#" onclick="getObject(pageDirectory.practice); resetTimer(); remTimes()">Practice</a>
        <a href="#" onclick="getObject(pageDirectory.calendar); onclick=intervalTimer('canvas')">Calendar</a>
        <p>Resources</p>
        <a href="#" onclick="getObject(pageDirectory.tuning)">  Tuning</a>
        <a href="#" onclick="getObject(pageDirectory.rhythmResources)">  Rhythms</a>
        <a href="#" onclick="getObject(pageDirectory.regimen); remRegimen()">  Regimen</a>
        <a href="#" onclick="getObject(pageDirectory.charts)">  Charts</a>
        <a href="#" onclick="getObject(pageDirectory.videos)">  Videos</a>
    </div>
    <span id="icon" onclick="openNav()">&#9776;</span>
</div>

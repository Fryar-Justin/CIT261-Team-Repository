function tuningPage(){
    document.getElementById("rightContent").innerHTML = "<div id='noteSelect'>\n\
<select onchange='noteChoice(value)'>\n\
<option value='Select'>Select a Note</option>\n\
<option value='A'>A</option>\n\
<option value='A♭'>A&#9837;</option>\n\
<option value='B'>B</option>\n\
<option value='B♭'>B&#9837;</option>\n\
<option value='C'>C</option>\n\
<option value='D'>D</option>\n\
<option value='D♭'>D&#9837;</option>\n\
<option value='E'>E</option>\n\
<option value='E♭'>E&#9837;</option>\n\
<option value='F'>F</option>\n\
<option value='G'>G</option>\n\
<option value='G♭'>G&#9837;</option>\n\
</select>\n\
</div>\n\
<div id='noteView'></div>";
}
function timerPage(){

    document.getElementById("rightContent").innerHTML = "<h1 id='timer'>00 : 00 </h1>\n\
  		<img id='toggle' src='/media/img/start-up.png' onclick='start()'></img>\n\
  		<img id='stop' src='/media/img/stop-up.png' onclick='stopTimer()'></img><br>\n\
  		<button id='set' ontouch='practHistory()' onclick='practHistory()'>Set Practice Time</button>\n\
  		<button id='reset' onclick='watch.reset()'>Reset</button>\n\
                <br><br>\n\
                <p>Optional Message:</p><textarea name='message' id='message' class='timerMessage'><?php echo htmlentities($user_message) ?></textarea><br>\n\
                <button id='send' class='sendButton' onclick='mailTime()'>Send Latest Practice Time to Teacher</button><br>\n\
                <h2>Last Seven Practice Times:</h2>\n\
  		<div id='practiceHistory'></div>";
    resetTimer(); 
    remTimes(); 
}
function regimenPage(){
    document.getElementById("rightContent").innerHTML = "<h1>Practice Regimen</h1>\n\
<input type='text' id='listInput' placeholder='Input List Item Here'></input><br><br>\n\
<button onclick='add()' >Add</button>\n\
<button onclick='remove()'>Remove</button>\n\
<button onclick='reset()'>Reset List</button><div id='practiceList' class='practiceList'>\n\
  </div>";
    remRegimen();
}
function rhythmResourcesPage(){
    document.getElementById("rightContent").innerHTML = "\n\
<h1>Rhythm Resources</h1>\n\
<p>Here are some sets of rhythm lines and audio recordings that will help you practice your rhythm.</p><br><br>\n\
<button class='rhythmBtn' id='Example1' onclick='changeMedia('/media/rhythmResources/1.jpg', '/media/rhythmResources/1.ogg')'>Example 1</button>\n\
<button class='rhythmBtn' id='Example2' onclick='changeMedia('/media/rhythmResources/2.jpg', '/media/rhythmResources/2.ogg')'>Example 2</button>\n\
<button class='rhythmBtn' id='Example3' onclick='changeMedia('/media/rhythmResources/3.jpg', '/media/rhythmResources/3.ogg')'>Example 3</button>\n\
<button class='rhythmBtn' id='Example4' onclick='changeMedia('/media/rhythmResources/4.jpg', '/media/rhythmResources/4.ogg')'>Example 4</button>\n\
<button class='rhythmBtn' id='Example5' onclick='changeMedia('/media/rhythmResources/5.jpg', '/media/rhythmResources/5.ogg')'>Example 5</button>\n\
<button class='rhythmBtn' id='Example6' onclick='changeMedia('/media/rhythmResources/6.jpg', '/media/rhythmResources/6.ogg')'>Example 6</button>\n\
<button class='rhythmBtn' id='Example7' onclick='changeMedia('/media/rhythmResources/7.jpg', '/media/rhythmResources/7.ogg')'>Example 7</button>\n\
<button class='rhythmBtn' id='Example8' onclick='changeMedia('/media/rhythmResources/8.jpg', '/media/rhythmResources/8.ogg')'>Example 8</button>\n\
<button class='rhythmBtn' id='Example9' onclick='changeMedia('/media/rhythmResources/9.jpg', '/media/rhythmResources/9.ogg')'>Example 9</button>\n\
<br><br>\n\
<img id='exampleImg' src='/media/rhythmResources/1.jpg'  /><br>\n\
<audio id= 'audioPlayer' controls>\n\
<source id='ogg_src' src='/media/rhythmResources/1.ogg' type='audio/ogg' />\n\
Your browser does not support the audio element.\n\
</audio>\n\
"
}
function loginPage(){
    
}
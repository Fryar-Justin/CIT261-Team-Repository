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
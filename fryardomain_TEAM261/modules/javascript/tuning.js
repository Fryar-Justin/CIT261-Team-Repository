function noteChoice(note) {
    var w = document.getElementById("noteView");
    w.innerHTML = '';
    var x = document.createElement("AUDIO");

    if (note != "Select") {
        if (x.canPlayType("audio/ogg")) {
            x.setAttribute("src", "/media/drones/" + note + ".mp3");
        } else {
            x.setAttribute("src", "/media/drones/" + note + ".mp3");
        }
    }

    x.setAttribute("controls", "controls");

    var y = document.createElement("h2");
    var z = document.createTextNode(note);
    y.appendChild(z);
    document.getElementById("noteView").appendChild(y);
    document.getElementById("noteView").appendChild(x);
    if (note == "Select") {
        empty();
//        document.getElementsByTagName("H2").innerHTML = "Please make another selection";
    }
}
function empty() {
    var w = document.getElementById("noteView");
    w.innerHTML = '';
}
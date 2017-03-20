var step = 0;
function add(){
    step += 1;
    var input = document.getElementById("listInput").value;
    var x = document.createElement("LI");
    var text = document.createTextNode("Step " + step + ": " + input);
    x.appendChild(text);
    
    var list = document.getElementById("practiceList");
    list.appendChild(x);
    document.getElementById("listInput").value = '';
}
function remove(){  
    var list = document.getElementById("practiceList");
    if (step >= 1){
        var list = document.getElementById("practiceList");
        list.removeChild(list.childNodes[step]);
        step -= 1;
    }
}

function reset(){
    document.getElementById("practiceList").innerHTML = '';
    step = 0;
}
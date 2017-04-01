var step = 0;
var regimenArray = new Array();

function add() {
    document.getElementById("practiceList").innerHTML = '';
    step += 1;
    var input = document.getElementById("listInput").value;
    regimenArray[step] = "<h2>Step " + step + ": </h2> <h4>" + input + "</h4>";

    for (i = 1; i < regimenArray.length; i++) {
        document.getElementById("practiceList").innerHTML += regimenArray[i];
    }
    document.getElementById("listInput").value = '';
    localStorage.setItem("regimen", JSON.stringify(regimenArray));
}
function removeItem() {
    if (step >= 1) {
        document.getElementById("practiceList").innerHTML = '';
        regimenArray[step] = '';
        for (i = 1; i < regimenArray.length; i++) {
            document.getElementById("practiceList").innerHTML += regimenArray[i];
        }
        step -= 1;
        localStorage.setItem("regimen", JSON.stringify(regimenArray));
    }
}

function reset() {
    document.getElementById("practiceList").innerHTML = ' ';
    step = 0;
    regimenArray = new Array();
    localStorage.setItem("regimen", JSON.stringify(regimenArray));
}

function remRegimen() {
    step = 0;
    regimenArray = new Array();
    var retrieve = JSON.parse(localStorage.getItem("regimen"));
    if (retrieve === null){
    
    }else{
    regimenArray = retrieve;
    document.getElementById("practiceList").innerHTML = "";
    for (i = 1; i < regimenArray.length; i++) {
        document.getElementById("practiceList").innerHTML += regimenArray[i];
        step += 1;
    }
     localStorage.setItem("regimen", JSON.stringify(regimenArray));
    }
}



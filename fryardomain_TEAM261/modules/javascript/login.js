

/*function getInfo(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var nameList = JSON.parse(this.responseText);
			}
		}
        xmlhttp.open("GET", "nameList.txt", true);
	xmlhttp.send();
} */

function verifyLogin(){
var nameList = ["Kailey", "DeAnna", "Justin"];
var nInput = document.getElementById('nameInput').value;
var codeInput = document.getElementById('passcodeInput').value;
    for(var i = 0; i < nameList.length; i++){ 
            if(nameList[i] === nInput && codeInput === 'CIT261'){
            document.getElementById('nameOutput').innerHTML = "Welcome " + nInput + "!";
            document.getElementById('headerTag').innerHTML = "Welcome " + nInput + "!";
            document.getElementById("mySidenav").enabled; 
            return;
            }
     else{
       document.getElementById('nameOutput').innerHTML = 'Please enter the correct username and password.';
        }
    } 
}

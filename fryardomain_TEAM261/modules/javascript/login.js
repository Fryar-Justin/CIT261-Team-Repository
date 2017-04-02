
var loginSuccessful = false;

function verifyLogin(){
var nameList = ["Kailey", "DeAnna", "Justin"];
var nInput = document.getElementById('nameInput').value;
var codeInput = document.getElementById('passcodeInput').value;
    for(var i = 0; i < nameList.length; i++){ 
            if(nameList[i] === nInput && codeInput === 'CIT261'){
            document.getElementById('nameOutput').innerHTML = "Welcome " + nInput + "!";
            document.getElementById('headerTag').innerHTML = "Welcome " + nInput + "!";
            loginSuccessful = true; 
            return;
            }
     else{
       document.getElementById('nameOutput').innerHTML = 'Please enter the correct username and password.';
        }
    } 
}

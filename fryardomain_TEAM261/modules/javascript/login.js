
function verifyLogin(){
    var nameInput = document.getElementById('nameInput').value;
    var passcodeInput = document.getElementById('passcodeInput').value;
    var nameList = ["Kailey", "Justin", "DeAnna"];

    for(var i = 0; i < nameList.length; i++)
        
    { 
        if(nameList[i] === nameInput && passcodeInput === 'CIT261'){
            document.getElementById('nameOutput').innerHTML = "Welcome " + nameInput + "!";
            document.getElementById("nameInput").reset();
            document.getElementById("passcodeInput").reset();
        }
    else{
        document.getElementById('nameOutput').innerHTML = 'Please enter the correct username and password.';
        document.getElementById("nameInput").reset();
        document.getElementById("passcodeInput").reset();
        }
    }
        
}

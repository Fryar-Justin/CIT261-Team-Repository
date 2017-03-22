var registerNameInput = document.getElementById('registerNameInput').value;
var registerPasswordInput = document.getElementById('registerPasswordInput').value;

function addInfo() {
    localStorage.setItem('registerNameInput', registerNameInput);
    localStorage.setItem('registerPasswwordInput', registerPasswordInput);
    alert('Thank you for registering! You may now sign in.');
}
function verifyInfo() {

    var usernameList = localStorage.getItem('registerNameInput');
    var passwordList = localStorage.getItem('registerPasswordInput');

    var usernameInput = document.getElementById('usernameInput').value;
    var passwordInput = document.getElementById('passwordInput').value;


    if(usernameInput != usernameList && passwordInput != passwordList) {
        alert('Welcome ' + usernameInput +'!');  
        document.getElementById('usernameOutput').innerHTML = 'Welcome ' + usernameInput + '!';}
    else {
        alert('Please enter the correct username and password.');
    }
    
}
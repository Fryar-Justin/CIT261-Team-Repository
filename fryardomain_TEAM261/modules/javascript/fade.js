var element = document.getElementById("rightContent");
element.style.opacity = 1;
element.style.transition = "opacity .2s";

var button1 = document.getElementById("icon");

function fadeOut() {
    if (loginSuccessful == true) {
        element.style.opacity = 0;
    }

}

function fadeIn() {
    element.style.opacity = 1;
}

button1.addEventListener("click", fadeOut, false);

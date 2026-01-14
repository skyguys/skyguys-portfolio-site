
const fadeInElements = document.getElementsByClassName("fade-in")
const footerYear = document.getElementById("year");

function fadeIn(fadeIn){

    for (let i = 0; i < fadeIn.length; i++){
        fadeIn[i].style.opacity = 1;
        fadeIn[i].style.filter = "blur(0)";
    }
}

function reset(fadeIn){
    for (let i = 0; i < fadeIn.length; i++){
        fadeIn[i].style.opacity = 0;
        fadeIn[i].style.filter = "blur(0.5rem)";
    }
}

function updateFooter(){
    const currentDate = new Date(); // Current date and time
    const currentYear = currentDate.getFullYear(); 

    footerYear.textContent = currentYear;
}

window.addEventListener("DOMContentLoaded", function() {fadeIn(fadeInElements)});
window.addEventListener("pageshow", function() {fadeIn(fadeInElements)});
window.addEventListener("unload", function() {reset(fadeInElements)});
window.addEventListener("pagehide", function() {reset(fadeInElements)});
updateFooter();

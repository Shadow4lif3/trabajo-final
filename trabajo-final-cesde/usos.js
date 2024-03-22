let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); 
}


var loginButton = document.getElementById("loginButton");


var loginModal = document.getElementById("loginModal");

var closeBtn = document.getElementsByClassName("close")[0];

loginButton.onclick = function() {
    loginModal.style.display = "block";
}


closeBtn.onclick = function() {
    loginModal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}


var registerButton = document.getElementById("registerButton");


var registerModal = document.getElementById("registerModal");


var closeBtn = document.getElementsByClassName("close2")[0];


registerButton.onclick = function() {
    registerModal.style.display = "block";
}


closeBtn.onclick = function() {
    registerModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

function volverAlInicio() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
}
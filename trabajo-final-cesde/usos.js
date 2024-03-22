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
    setTimeout(showSlides, 2000); // Cambiar imagen cada 2 segundos
}

// Obtener referencia al botón de inicio de sesión
var loginButton = document.getElementById("loginButton");

// Obtener referencia al modal de inicio de sesión
var loginModal = document.getElementById("loginModal");

// Obtener referencia al elemento de cierre del modal
var closeBtn = document.getElementsByClassName("close")[0];

// Cuando se haga clic en el botón de inicio de sesión, mostrar el modal
loginButton.onclick = function() {
    loginModal.style.display = "block";
}

// Cuando se haga clic en el botón de cierre, ocultar el modal
closeBtn.onclick = function() {
    loginModal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, ocultar el modal
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Obtener referencia al botón de registro
var registerButton = document.getElementById("registerButton");

// Obtener referencia al modal de registro
var registerModal = document.getElementById("registerModal");

// Obtener referencia al elemento de cierre del modal
var closeBtn = document.getElementsByClassName("close2")[0];

// Cuando se haga clic en el botón de registro, mostrar el modal
registerButton.onclick = function() {
    registerModal.style.display = "block";
}

// Cuando se haga clic en el botón de cierre, ocultar el modal
closeBtn.onclick = function() {
    registerModal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, ocultar el modal
window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}
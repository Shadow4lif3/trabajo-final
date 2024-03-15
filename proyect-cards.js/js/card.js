const blackColor = document.querySelector(".negro");
const blueColor = document.querySelector(".azul");
const greenColor  = document.querySelector(".verde");

const cartButton = document.getElementById("button");
const itenmTag = document.getElementsByTagName("h3")[0];

const imageCard = document.querySelector(".img-container");

const feedbackBtn = document.querySelector(".feedback");

const buttontext = document.getElementsByClassName(".button-text");




blackColor.addEventListener("click" , function(){

    cartButton.style.backgroundColor = "gray";
    cartButton.style.color = "black";
    itenmTag.style.backgroundColor= "gray";
    itenmTag.style.color = "white";
    imageCard.style.backgroundImage= 'url(../img/xbox-4965065_1280.jpg)'

});

blueColor.addEventListener("click" , function(){

    cartButton.style.backgroundColor = "blue";
    cartButton.style.color = "black";
    itenmTag.style.backgroundColor= "blue";
    itenmTag.style.color = "white";
    imageCard.style.backgroundImage= 'url(../img/azul.jpg)'

});

greenColor.addEventListener("click" , function(){

    cartButton.style.backgroundColor = "green";
    cartButton.style.color = "black";
    itenmTag.style.backgroundColor= "green";
    itenmTag.style.color = "white";
    imageCard.style.backgroundImage= 'url(../img/xboxVerde.jpg)'

});

const cart = () => {

    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";

}

cartButton.addEventListener("click", cart);

const feedbackFun = () => {

    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
}

feedbackBtn.addEventListener("click" , feedbackFun);
const homeButton = document.querySelector(".home-button");
const cv = document.querySelector(".cv-button");

homeButton.addEventListener("click", function(){
    homeButton.classList.add("active"); 
    cv.classList.remove("active");
})

cv.addEventListener("click", function(){
    homeButton.classList.remove("active"); 
    cv.classList.add("active");
})



const sayHelloButton = document.querySelector(".btn-say-hello");

sayHelloButton.addEventListener("click", function(){
    alert("ty");
})
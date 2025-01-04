// menu
const header = document.querySelector(".menu .header") ;
const list =document.querySelector(".menu .list");
const elements = list.querySelectorAll("li");

elements.forEach(function(element){
    element.addEventListener("click",function(){
        list.classList.toggle("hideList");
        header.querySelector("svg:last-child").classList.toggle("rotateArrow");
        header.querySelector("p").innerHTML = element.innerHTML ;
    })
});

header.addEventListener("click",function(){
    list.classList.toggle("hideList");
    header.querySelector("svg:last-child").classList.toggle("rotateArrow");
})
// show/hide arrow-up
const scrollUpButton = document.querySelector(".scrollUp") ;
window.addEventListener("scroll",function(){
    if(window.scrollY > document.querySelector(".container").scrollHeight){
        scrollUpButton.classList.add("show");
    }
    else if(window.scrollY < document.querySelector(".container").scrollHeight){
        scrollUpButton.classList.remove("show");
    }
})

//scrolling up
scrollUpButton.addEventListener("click",function(){
    window.scrollTo(0,0);
})
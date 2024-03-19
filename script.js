const btn = document.querySelector(".button-30");
const text = document.querySelector(".text");
const color = document.getElementById("color");
const card= document.querySelector(".card-right");
const body= document.querySelector("body");
const domSpan = document.querySelector("#dom-span")

btn.addEventListener("click",()=>{
    
    const randomColor = generateRandColor();
    color.style.backgroundColor = randomColor;
    // body.style.backgroundColor = randomColor;
    
    text.innerText=randomColor;
    text.style.color = randomColor;
    domSpan.style.color=randomColor;
    

})

let generateRandColor = () => {
    const r = Math.floor(Math.random()*255)+1;
    const g = Math.floor(Math.random()*255)+1;
    const b = Math.floor(Math.random()*255)+1;
    return `rgb( ${r} , ${g} , ${b} )`;

};
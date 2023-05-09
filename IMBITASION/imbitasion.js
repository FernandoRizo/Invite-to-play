
const Nobutton = document.getElementById("NO");

Nobutton.addEventListener("mouseenter",() => {
    Nobutton.style.position = "absolute";
    Nobutton.style.left = Math.random() * (document.body.clientWidth - Nobutton.clientWidth) + "px"; 
    Nobutton.style.top = Math.random() * (document.body.clientHeight - Nobutton.clientHeight) + "px"
},1000);

const Yesbutton = document.getElementById("SI");

Yesbutton.addEventListener("click",() => {
    alert("\nSabía que si querías jugar :)")
})
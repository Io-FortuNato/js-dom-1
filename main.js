
let lampadina = document.querySelector(".lampadina");
let btn = document.querySelector(".btn");

btn.addEventListener("click",
    function () {

        if (lampadina.src.includes("white_lamp")) {
            lampadina.src = "img/yellow_lamp.png";
            btn.textContent = "spegni";
        } else {
            lampadina.src = "img/white_lamp.png";
            btn.textContent = "accendi";
        }
    });
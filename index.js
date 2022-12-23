const donutGame =document.querySelector(".donutClickerButton")
let donutClickCount = 0


loadEvents();

function loadEvents(){
    donutClickerButton.addEventListener("click",countDonut);
}

function countDonut(event){
    donutClickCount +=1;
    count.innerHTML = donutClickCount
}


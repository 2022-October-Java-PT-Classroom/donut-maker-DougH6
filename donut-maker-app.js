import DonutMaker from "./donut-maker";

let donutMaker =  new DonutMaker(0,0,100,0,10,1);

const donutClickerButton = document.getElementById('donutClickerButton');
const autoClickerButton = document.getElementById('autoClickerButton');
const clickMultiplierButton = document.getElementById('clickMultiplierButton');
const reset = document.getElementById('reset');
const dropBakerButton = document.querySelector(".dropBakerButton");
const dropBakerText =document.querySelector(".dropBakerText");
const dropCookieButton = document.querySelector(".dropCookieButton");
const dropCookieLink =document.querySelector(".dropCookieLink");
const dropContactButton = document.querySelector(".dropContactButton");
const dropContactLink = document.querySelector(".dropContactLink");

setAutoCount();
autoClickerButtonCheck();
multiplierButtonCheck();

dropBakerButton.addEventListener('click', () =>{
    dropBakerText.classList.toggle('hide');
});

dropCookieButton.addEventListener('click', () =>{
    dropCookieLink.classList.toggle('hide');
});

dropContactButton.addEventListener('click', () =>{
    dropContactLink.classList.toggle('hide');
});

donutClickerButton.addEventListener('click', () =>{
    donutMaker.donutCounter();
    getCounts();
});

autoClickerButton.addEventListener('click', () =>{
    donutMaker.addAutoClickerCost();
    getCounts();
});

clickMultiplierButton.addEventListener('click', () =>{
    donutMaker.addDonutMultiplier();
    getCounts();
    });

reset.addEventListener('click', () => {
    donutMaker = new DonutMaker(0,0,100,0,10,1);
    getCounts();
    for (var i = 1; i < 99999; i++){
        window.clearInterval(i);
    }
    setAutoCount();
    autoClickerButtonCheck();
    multiplierButtonCheck();
});

function getCounts(){
    document.getElementById('auto-clicker-count').innerHTML = donutMaker.getAutoClickerCount();
    document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
    document.getElementById('auto-clicker-cost').innerHTML = donutMaker.getAutoClickerCost();
    document.getElementById('multiplier-count').innerHTML = donutMaker.getDonutMultiplier();
    document.getElementById('multiplier-cost').innerHTML = donutMaker.getDonutMultiplierCost();
}

function setAutoCount(){
    setInterval((() =>{
        getCounts();
    }),10)
}

function autoClickerButtonCheck(){
    setInterval((() =>{
        if(donutMaker.getDonutCount() < donutMaker.getAutoClickerCost()){
            document.getElementById("autoClickerButton").disabled = true;
        }else{
            document.getElementById("autoClickerButton").disabled = false;
        }
    }),10)
}

function multiplierButtonCheck(){
    setInterval((() =>{
        if(donutMaker.getDonutCount() < donutMaker.getDonutMultiplierCost()){
            document.getElementById("clickMultiplierButton").disabled = true;
        }else{
            document.getElementById("clickMultiplierButton").disabled = false;
        }
    }),10)
}

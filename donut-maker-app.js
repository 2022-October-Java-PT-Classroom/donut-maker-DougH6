import DonutMaker from "./donut-maker";

let donutMaker =  new DonutMaker(0,0,100,0,10,1);
let donutClickerButton = document.getElementById('donutClickerButton');
let autoClickerButton = document.getElementById('autoClickerButton');
let clickMultiplierButton = document.getElementById('clickMultiplierButton');
let reset = document.getElementById('reset');

const dropBakerButton = document.querySelector(".dropBakerButton");
const dropBakerText =document.querySelector(".dropBakerText");
const dropCookieButton = document.querySelector(".dropCookieButton");
const dropCookieLink =document.querySelector(".dropCookieLink");
const dropContactButton = document.querySelector(".dropContactButton");
const dropContactLink =document.querySelector(".dropContactLink");

let autoClickerSetter;
let autoDonutCounter;

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
    document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
});

autoClickerButton.addEventListener('click', () =>{
    donutMaker.addAutoClicker();
    clearInterval(autoClickerSetter);
    document.getElementById('auto-clicker-count').innerHTML = donutMaker.getAutoClickerCount();
    document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
    document.getElementById('auto-clicker-cost').innerHTML = donutMaker.getAutoClickerCost();
    autoDonutCounter = setInterval(( document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount()),1000);
    autoClickerSetter = setInterval(donutMaker.donutCounter(),(1000/donutMaker.getAutoClickerCount()));
});

clickMultiplierButton.addEventListener('click', () =>{
    donutMaker.addDonutMultiplier();
    document.getElementById('multiplier-count').innerHTML = donutMaker.getDonutMultiplier();
    document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
    document.getElementById('multiplier-cost').innerHTML = donutMaker.getDonutMultiplierCost();
    });

reset.addEventListener('click', () => {
    donutMaker = new DonutMaker(0,0,100,0,10,1);
    document.getElementById('auto-clicker-count').innerHTML = donutMaker.getAutoClickerCount();
    document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
    document.getElementById('auto-clicker-cost').innerHTML = donutMaker.getAutoClickerCost();
    document.getElementById('multiplier-count').innerHTML = donutMaker.getDonutMultiplier();
    document.getElementById('multiplier-cost').innerHTML = donutMaker.getDonutMultiplierCost();
});

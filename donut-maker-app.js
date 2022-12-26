import DonutMaker from "./donut-maker";

let donutMaker =  new DonutMaker(0,0,100,0,10,1);
let autoClickerSetter;
let autoDonutCounter;

let donutClickerButton = (document.getElementById('donutClickerButton'));
    donutClickerButton.addEventListener('click', () =>{
        donutMaker.donutCounter();
        document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
    });

let autoClickerButton = (document.getElementById('autoClickerButton'));
    autoClickerButton.addEventListener('click', () =>{
        donutMaker.addAutoClicker();
        clearInterval(autoClickerSetter);
        document.getElementById('auto-clicker-count').innerHTML = donutMaker.getAutoClickerCount();
        document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
        document.getElementById('auto-clicker-cost').innerHTML = donutMaker.getAutoClickerCost();
        autoDonutCounter = setInterval( document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount(),1000);
        autoClickerSetter = setInterval(donutMaker.donutCounter(),(1000/donutMaker.getAutoClickerCount()));
    });

let clickMultiplierButton = (document.getElementById('clickMultiplierButton'));
    clickMultiplierButton.addEventListener('click', () =>{
        donutMaker.addDonutMultiplier();
        document.getElementById('multiplier-count').innerHTML = donutMaker.getDonutMultiplier();
        document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
        document.getElementById('multiplier-cost').innerHTML = donutMaker.getDonutMultiplierCost();
    });

    let reset = (document.getElementById('reset'));
        reset.addEventListener('click', () => {
            donutMaker = new DonutMaker(0,0,100,0,10,1);
            document.getElementById('auto-clicker-count').innerHTML = donutMaker.getAutoClickerCount();
            document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
            document.getElementById('auto-clicker-cost').innerHTML = donutMaker.getAutoClickerCost();
            document.getElementById('multiplier-count').innerHTML = donutMaker.getDonutMultiplier();
            document.getElementById('multiplier-cost').innerHTML = donutMaker.getDonutMultiplierCost();
        });
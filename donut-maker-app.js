import DonutMaker from "./donut-maker";

let donutMaker =  new DonutMaker(0,0,100,0,10,1);

console.log(donutMaker);

let donutClickerButton = (document.getElementById('donutClickerButton'));
    donutClickerButton.addEventListener('click', () =>{
        donutMaker.donutCounter();
        document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
    });

let autoClickerButton = (document.getElementById('autoClickerButton'));
    autoClickerButton.addEventListener('click', () =>{
        donutMaker.addAutoClicker();
        setInterval( document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount(),(1000/donutMaker.getAutoClickerCount()));
        document.getElementById('auto-clicker-count').innerHTML = donutMaker.getAutoClickerCount();
        document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
        document.getElementById('auto-clicker-cost').innerHTML = donutMaker.getAutoClickerCost();
    });

let clickMultiplierButton = (document.getElementById('clickMultiplierButton'));
    clickMultiplierButton.addEventListener('click', () =>{
        donutMaker.addDonutMultiplier();
        document.getElementById('multiplier-count').innerHTML = donutMaker.getDonutMultiplier();
        document.getElementById('donut-count').innerHTML = donutMaker.getDonutCount();
        document.getElementById('multiplier-cost').innerHTML = donutMaker.getDonutMultiplierCost();
    });
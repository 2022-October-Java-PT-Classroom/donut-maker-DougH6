import DonutMaker from './donut-maker.js';

describe ('DonutMaker object', () => {

    test('Does donutMaker add one donut to count', () => {
        const underTest = new DonutMaker(1,0,100,0,10,1);
        underTest.donutCounter();
        expect(underTest.donutCount).toEqual(2);
    });

    test('Does donutMaker retrieve donut count', () => {
        const underTest = new DonutMaker(1,0,100,0,10,1);
        underTest.donutCounter();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(2);
    });

    test('Does donutMaker retrieve auto clicker count', () => {
        const underTest = new DonutMaker(1, 100);
        underTest.getAutoClickerCount();
        expect(underTest.autoClickerCount).toEqual(100);
    });

    test('Dose donutMaker add to the auto clicker count',() =>{
        const underTest = new DonutMaker(1000,100,100);
        underTest.addAutoClicker();
        underTest.getAutoClickerCount();
        expect(underTest.autoClickerCount).toEqual(101);
    });

    test('Does donutMaker subtract 100 donuts in exchanger for one auto clicker',() =>{
        const underTest = new DonutMaker(101,0,100);
        underTest.addAutoClicker();
        underTest.getAutoClickerCount();
        expect(underTest.autoClickerCount).toEqual(1);
        underTest.getDonutCount;
        expect(underTest.donutCount).toEqual(1);
    });

    test('Does donutMaker auto clicker increase in cost by 10%',() =>{
        const underTest = new DonutMaker(111,1,110);
        underTest.addAutoClicker();
        underTest.getAutoClickerCount;
        expect(underTest.autoClickerCount).toEqual(2);
        underTest.getAutoClickerCost;
        expect(underTest.autoClickerCost).toEqual(121);
    });

    test('Does donutMaker auto clicker increase in cost by 10% each time',() =>{
        const underTest = new DonutMaker(1000,1,110);
        underTest.addAutoClicker();
        underTest.getAutoClickerCount;
        expect(underTest.autoClickerCount).toEqual(2);
        underTest.getAutoClickerCost;
        expect(underTest.autoClickerCost).toEqual(121);
        underTest.addAutoClicker();
        underTest.getAutoClickerCount;
        expect(underTest.autoClickerCount).toEqual(3);
        underTest.getAutoClickerCost;
        expect(underTest.autoClickerCost).toEqual(133.1);
        underTest.addAutoClicker();
        underTest.getAutoClickerCount;
        expect(underTest.autoClickerCount).toEqual(4);
        underTest.getAutoClickerCost;
        expect(underTest.autoClickerCost).toEqual(146.41);
    });

    test('Does donutMaker prevent auto clicker purchase if not enough donuts', () =>{
        const underTest = new DonutMaker(50,0,100);
        underTest.addAutoClicker();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(50);
    });
    
    test('Purchase a multiplier for 10 donuts', () =>{
        const underTest = new DonutMaker(10,0,100,0,10,0);
        underTest.addDonutMultiplier();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(0);  
    });
    
    test('Add one to the donutMultiplier count', () =>{
        const underTest = new DonutMaker(100,0,100,0,10,1);
        underTest.addDonutMultiplier();
        underTest.getDonutMultiplier();
        expect(underTest.donutMultiplier).toEqual(1);
    });

    test('Donut Multiplier costs increases', () => {
        const underTest = new DonutMaker(100,0,100,0,10,0);
        underTest.addDonutMultiplier();
        underTest.addDonutMultiplier();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(79);
        underTest.addDonutMultiplier();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(66.9);
    });

    test('Cannot buy a donut multiplier without enough donuts', () => {
        const underTest = new DonutMaker(9,0,100,0,10,1);
        underTest.addDonutMultiplier();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(9);
    });

    test('The donut multiplier is worth 1.2 clicks', () =>{
        const underTest = new DonutMaker(20,0,100,1,10,1);
        underTest.addDonutMultiplier();
        underTest.getDonutClickValue();
        expect(underTest.donutClickValue).toEqual(1.2);
    });

    test('the donut multiplier bonus is exponential', () =>{
        const underTest = new DonutMaker(20,0,100,0,10,1);
        underTest.addDonutMultiplier();
        underTest.donutCounter();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(11.2);
        underTest.addDonutMultiplier();
        underTest.donutCounter();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(1.64);
    });  
});
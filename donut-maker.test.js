import DonutMaker from './donut-maker.js';

describe ('DonutMaker object', () => {
    test('Does donutMaker add one donut to count', () => {
        const underTest = new DonutMaker(1,0);
        underTest.donutCounter();
        expect(underTest.donutCount).toEqual(2);
    });

    test('Does donutMaker retrieve donut count', () => {
        const underTest = new DonutMaker(1,0);
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
        const underTest = new DonutMaker(1,100);
        underTest.addAutoClicker();
        underTest.getAutoClickerCount();
        expect(underTest.autoClickerCount).toEqual(101);
    });
    test('Does donutMaker subtract 100 donuts in exchanger for one auto clicker',() =>{
        const underTest = new DonutMaker(101,0);
        underTest.addAutoClicker();
        underTest.getAutoClickerCount();
        expect(underTest.autoClickerCount).toEqual(1);
        underTest.getDonutCount;
        expect(underTest.donutCount).toEqual(1);
    });
    test('Does donutMaker increase in cost by 10%',() =>{
        const underTest = new DonutMaker(111,1);
        underTest.addAutoClicker();
        
    })
});
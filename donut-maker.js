class DonutMaker{
    
    constructor(donutCount, autoClickerCount){
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;

    }

    donutCounter(){
        this.donutCount++;
    }

    addAutoClicker(){
        this.donutCount=this.donutCount-100;
        this.autoClickerCount++;
    }

    getDonutCount(){
        return this.donutCount;
    }

    getAutoClickerCount(){
        return this.autoClickerCount;
    }
}
export default DonutMaker;
class DonutMaker{
    
    constructor(donutCount, autoClickerCount,autoClickerCost,donutMultiplier,donutMultiplierCost,donutClickValue){
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerCost = autoClickerCost;
        this.donutMultiplier = donutMultiplier;
        this.donutMultiplierCost = donutMultiplierCost;
        this.donutClickValue = donutClickValue;
    }

    donutCounter(){
        this.donutCount=parseFloat((this.donutCount+this.donutClickValue).toFixed(2));
    }

    addAutoClicker(){
        if(this.donutCount >= this.autoClickerCost){
            this.donutCount = this.donutCount-this.autoClickerCost;
            this.autoClickerCount++;
            this.autoClickerCost = parseFloat((this.autoClickerCost*1.1).toFixed(2));
        }else{}
    }

    addDonutMultiplier(){
        if(this.donutCount >= this.donutMultiplierCost){
            this.donutCount = this.donutCount-this.donutMultiplierCost;
            this.donutMultiplier++;
            this.donutClickValue = parseFloat((this.donutClickValue*1.2).toFixed(2));
            this.donutMultiplierCost= parseFloat((this.donutMultiplierCost*1.1).toFixed(2));
        }else{}
    }

    AutoClick(){
      // clearInterval(autoClickSetter);
        setInterval(donutCounter(),(1000/this.autoClickerCount));

    }

    getDonutCount(){
        return parseFloat(this.donutCount.toFixed(2));
    }

    getAutoClickerCount(){
        return this.autoClickerCount;
    }

    getAutoClickerCost(){
        return this.autoClickerCost;
    }

    getDonutMultiplier(){
        return this.donutMultiplier;
    }

    getDonutMultiplierCost(){
        return this.donutMultiplierCost;
    }

    getDonutClickValue(){
        return this.donutClickValue;
    }
}
export default DonutMaker;
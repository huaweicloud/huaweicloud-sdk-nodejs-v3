

export class ResourceAvailableNums {
    public flexus?: number;
    public basic?: number;
    public middle?: number;
    private 'middle_on_demand'?: number;
    public advance?: number;
    private 'third_party_cmww'?: number;
    public constructor() { 
    }
    public withFlexus(flexus: number): ResourceAvailableNums {
        this['flexus'] = flexus;
        return this;
    }
    public withBasic(basic: number): ResourceAvailableNums {
        this['basic'] = basic;
        return this;
    }
    public withMiddle(middle: number): ResourceAvailableNums {
        this['middle'] = middle;
        return this;
    }
    public withMiddleOnDemand(middleOnDemand: number): ResourceAvailableNums {
        this['middle_on_demand'] = middleOnDemand;
        return this;
    }
    public set middleOnDemand(middleOnDemand: number  | undefined) {
        this['middle_on_demand'] = middleOnDemand;
    }
    public get middleOnDemand(): number | undefined {
        return this['middle_on_demand'];
    }
    public withAdvance(advance: number): ResourceAvailableNums {
        this['advance'] = advance;
        return this;
    }
    public withThirdPartyCmww(thirdPartyCmww: number): ResourceAvailableNums {
        this['third_party_cmww'] = thirdPartyCmww;
        return this;
    }
    public set thirdPartyCmww(thirdPartyCmww: number  | undefined) {
        this['third_party_cmww'] = thirdPartyCmww;
    }
    public get thirdPartyCmww(): number | undefined {
        return this['third_party_cmww'];
    }
}
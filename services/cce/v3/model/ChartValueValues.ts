

export class ChartValueValues {
    public basic?: object;
    public constructor() { 
    }
    public withBasic(basic: object): ChartValueValues {
        this['basic'] = basic;
        return this;
    }
}


export class Statistic {
    public name: string;
    public value: number;
    public unit: string;
    public constructor(name?: any, value?: any, unit?: any) { 
        this['name'] = name;
        this['value'] = value;
        this['unit'] = unit;
    }
    public withName(name: string): Statistic {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): Statistic {
        this['value'] = value;
        return this;
    }
    public withUnit(unit: string): Statistic {
        this['unit'] = unit;
        return this;
    }
}
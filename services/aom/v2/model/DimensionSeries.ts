

export class DimensionSeries {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): DimensionSeries {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): DimensionSeries {
        this['value'] = value;
        return this;
    }
}
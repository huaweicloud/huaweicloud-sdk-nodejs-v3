

export class MetricDataPointDimensions {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): MetricDataPointDimensions {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): MetricDataPointDimensions {
        this['value'] = value;
        return this;
    }
}
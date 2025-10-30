

export class MetricDataDetailDimension {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): MetricDataDetailDimension {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): MetricDataDetailDimension {
        this['value'] = value;
        return this;
    }
}
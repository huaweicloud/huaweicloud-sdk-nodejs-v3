

export class MetricDimensionResp {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): MetricDimensionResp {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): MetricDimensionResp {
        this['value'] = value;
        return this;
    }
}


export class MetricsDimensionResp {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): MetricsDimensionResp {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): MetricsDimensionResp {
        this['value'] = value;
        return this;
    }
}
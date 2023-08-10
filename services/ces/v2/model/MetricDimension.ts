

export class MetricDimension {
    public name?: string;
    public value?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): MetricDimension {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): MetricDimension {
        this['value'] = value;
        return this;
    }
}
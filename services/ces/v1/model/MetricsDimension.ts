

export class MetricsDimension {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): MetricsDimension {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): MetricsDimension {
        this['value'] = value;
        return this;
    }
}
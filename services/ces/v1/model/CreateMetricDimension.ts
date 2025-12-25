

export class CreateMetricDimension {
    public name?: string;
    public value?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateMetricDimension {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): CreateMetricDimension {
        this['value'] = value;
        return this;
    }
}
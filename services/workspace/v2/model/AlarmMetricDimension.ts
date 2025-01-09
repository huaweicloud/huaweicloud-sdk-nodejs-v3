

export class AlarmMetricDimension {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): AlarmMetricDimension {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): AlarmMetricDimension {
        this['value'] = value;
        return this;
    }
}
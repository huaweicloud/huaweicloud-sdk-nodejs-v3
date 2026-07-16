

export class PoolMonitorMetricDimensions {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): PoolMonitorMetricDimensions {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): PoolMonitorMetricDimensions {
        this['value'] = value;
        return this;
    }
}
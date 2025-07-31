

export class AlarmHistoryItemV2MetricDimensions {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): AlarmHistoryItemV2MetricDimensions {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): AlarmHistoryItemV2MetricDimensions {
        this['value'] = value;
        return this;
    }
}
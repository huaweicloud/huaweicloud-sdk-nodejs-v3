

export class SlaReportsValue {
    public timestamp?: number;
    public value?: number;
    public constructor() { 
    }
    public withTimestamp(timestamp: number): SlaReportsValue {
        this['timestamp'] = timestamp;
        return this;
    }
    public withValue(value: number): SlaReportsValue {
        this['value'] = value;
        return this;
    }
}
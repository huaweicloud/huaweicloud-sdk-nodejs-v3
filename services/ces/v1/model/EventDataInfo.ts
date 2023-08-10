

export class EventDataInfo {
    public type?: string;
    public timestamp?: number;
    public value?: string;
    public constructor(type?: string, timestamp?: number, value?: string) { 
        this['type'] = type;
        this['timestamp'] = timestamp;
        this['value'] = value;
    }
    public withType(type: string): EventDataInfo {
        this['type'] = type;
        return this;
    }
    public withTimestamp(timestamp: number): EventDataInfo {
        this['timestamp'] = timestamp;
        return this;
    }
    public withValue(value: string): EventDataInfo {
        this['value'] = value;
        return this;
    }
}


export class TimeValue {
    public time?: string;
    public value?: number;
    public constructor() { 
    }
    public withTime(time: string): TimeValue {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): TimeValue {
        this['value'] = value;
        return this;
    }
}


export class TimeFloatValueData {
    public time?: string;
    public value?: number;
    public constructor() { 
    }
    public withTime(time: string): TimeFloatValueData {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): TimeFloatValueData {
        this['value'] = value;
        return this;
    }
}
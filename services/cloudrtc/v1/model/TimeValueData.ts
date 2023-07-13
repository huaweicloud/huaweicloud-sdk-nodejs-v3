

export class TimeValueData {
    public time?: string;
    public value?: number;
    public constructor() { 
    }
    public withTime(time: string): TimeValueData {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): TimeValueData {
        this['value'] = value;
        return this;
    }
}
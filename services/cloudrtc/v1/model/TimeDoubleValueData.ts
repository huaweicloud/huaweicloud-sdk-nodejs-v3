

export class TimeDoubleValueData {
    public time?: string;
    public value?: number;
    public constructor() { 
    }
    public withTime(time: string): TimeDoubleValueData {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): TimeDoubleValueData {
        this['value'] = value;
        return this;
    }
}
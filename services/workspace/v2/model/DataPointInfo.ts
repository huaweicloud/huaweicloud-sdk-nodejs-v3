

export class DataPointInfo {
    public time?: string;
    public value?: number;
    public constructor() { 
    }
    public withTime(time: string): DataPointInfo {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): DataPointInfo {
        this['value'] = value;
        return this;
    }
}


export class TrafficData {
    public value?: number;
    public time?: string;
    public constructor() { 
    }
    public withValue(value: number): TrafficData {
        this['value'] = value;
        return this;
    }
    public withTime(time: string): TrafficData {
        this['time'] = time;
        return this;
    }
}
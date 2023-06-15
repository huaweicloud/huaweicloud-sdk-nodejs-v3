

export class StreamCountData {
    public value?: number;
    public time?: string;
    public constructor() { 
    }
    public withValue(value: number): StreamCountData {
        this['value'] = value;
        return this;
    }
    public withTime(time: string): StreamCountData {
        this['time'] = time;
        return this;
    }
}
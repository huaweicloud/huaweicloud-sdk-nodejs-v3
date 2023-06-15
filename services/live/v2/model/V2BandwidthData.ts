

export class V2BandwidthData {
    public value?: number;
    public time?: string;
    public constructor() { 
    }
    public withValue(value: number): V2BandwidthData {
        this['value'] = value;
        return this;
    }
    public withTime(time: string): V2BandwidthData {
        this['time'] = time;
        return this;
    }
}
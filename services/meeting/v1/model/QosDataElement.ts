

export class QosDataElement {
    public time?: string;
    public value?: number;
    public alarm?: boolean;
    public threshold?: number;
    public constructor() { 
    }
    public withTime(time: string): QosDataElement {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): QosDataElement {
        this['value'] = value;
        return this;
    }
    public withAlarm(alarm: boolean): QosDataElement {
        this['alarm'] = alarm;
        return this;
    }
    public withThreshold(threshold: number): QosDataElement {
        this['threshold'] = threshold;
        return this;
    }
}


export class QosDataNoThrElement {
    public time?: string;
    public value?: string;
    public constructor() { 
    }
    public withTime(time: string): QosDataNoThrElement {
        this['time'] = time;
        return this;
    }
    public withValue(value: string): QosDataNoThrElement {
        this['value'] = value;
        return this;
    }
}
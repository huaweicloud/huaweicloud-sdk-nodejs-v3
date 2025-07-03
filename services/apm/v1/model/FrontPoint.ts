

export class FrontPoint {
    public time?: number;
    public value?: object;
    public constructor() { 
    }
    public withTime(time: number): FrontPoint {
        this['time'] = time;
        return this;
    }
    public withValue(value: object): FrontPoint {
        this['value'] = value;
        return this;
    }
}
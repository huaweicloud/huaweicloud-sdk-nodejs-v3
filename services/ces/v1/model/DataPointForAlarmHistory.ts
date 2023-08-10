

export class DataPointForAlarmHistory {
    public time?: number;
    public value?: number;
    public constructor() { 
    }
    public withTime(time: number): DataPointForAlarmHistory {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): DataPointForAlarmHistory {
        this['value'] = value;
        return this;
    }
}
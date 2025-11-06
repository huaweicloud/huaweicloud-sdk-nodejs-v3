

export class DataPointForAlarmHistoryResp {
    public time?: number;
    public value?: number;
    public constructor() { 
    }
    public withTime(time: number): DataPointForAlarmHistoryResp {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): DataPointForAlarmHistoryResp {
        this['value'] = value;
        return this;
    }
}
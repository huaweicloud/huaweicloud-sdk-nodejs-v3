

export class LogCounts {
    public num?: number;
    public startTime?: number;
    public endTime?: number;
    public constructor() { 
    }
    public withNum(num: number): LogCounts {
        this['num'] = num;
        return this;
    }
    public withStartTime(startTime: number): LogCounts {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): LogCounts {
        this['endTime'] = endTime;
        return this;
    }
}
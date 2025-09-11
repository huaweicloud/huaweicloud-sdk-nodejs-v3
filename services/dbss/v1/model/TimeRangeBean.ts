

export class TimeRangeBean {
    private 'end_time'?: string;
    private 'start_time'?: string;
    private 'time_range'?: string;
    public constructor() { 
    }
    public withEndTime(endTime: string): TimeRangeBean {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStartTime(startTime: string): TimeRangeBean {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withTimeRange(timeRange: string): TimeRangeBean {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: string  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): string | undefined {
        return this['time_range'];
    }
}
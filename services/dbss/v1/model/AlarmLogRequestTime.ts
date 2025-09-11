

export class AlarmLogRequestTime {
    private 'time_range'?: AlarmLogRequestTimeTimeRangeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withTimeRange(timeRange: AlarmLogRequestTimeTimeRangeEnum | string): AlarmLogRequestTime {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: AlarmLogRequestTimeTimeRangeEnum | string  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): AlarmLogRequestTimeTimeRangeEnum | string | undefined {
        return this['time_range'];
    }
    public withStartTime(startTime: string): AlarmLogRequestTime {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): AlarmLogRequestTime {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmLogRequestTimeTimeRangeEnum {
    HALF_HOUR = 'HALF_HOUR',
    HOUR = 'HOUR',
    THREE_HOUR = 'THREE_HOUR',
    TWELVE_HOUR = 'TWELVE_HOUR',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH'
}

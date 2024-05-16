

export class TimeRange {
    private 'sql_time_zone'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'start_time_gt'?: boolean;
    private 'end_time_lt'?: boolean;
    public constructor(startTime?: number, endTime?: number) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withSqlTimeZone(sqlTimeZone: string): TimeRange {
        this['sql_time_zone'] = sqlTimeZone;
        return this;
    }
    public set sqlTimeZone(sqlTimeZone: string  | undefined) {
        this['sql_time_zone'] = sqlTimeZone;
    }
    public get sqlTimeZone(): string | undefined {
        return this['sql_time_zone'];
    }
    public withStartTime(startTime: number): TimeRange {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): TimeRange {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStartTimeGt(startTimeGt: boolean): TimeRange {
        this['start_time_gt'] = startTimeGt;
        return this;
    }
    public set startTimeGt(startTimeGt: boolean  | undefined) {
        this['start_time_gt'] = startTimeGt;
    }
    public get startTimeGt(): boolean | undefined {
        return this['start_time_gt'];
    }
    public withEndTimeLt(endTimeLt: boolean): TimeRange {
        this['end_time_lt'] = endTimeLt;
        return this;
    }
    public set endTimeLt(endTimeLt: boolean  | undefined) {
        this['end_time_lt'] = endTimeLt;
    }
    public get endTimeLt(): boolean | undefined {
        return this['end_time_lt'];
    }
}
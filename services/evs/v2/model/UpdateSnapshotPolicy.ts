

export class UpdateSnapshotPolicy {
    public name?: string;
    private 'repeat_weekdays'?: Array<string>;
    private 'repeat_interval_days'?: number;
    private 'time_points'?: Array<string>;
    private 'retention_days'?: number;
    public constructor() { 
    }
    public withName(name: string): UpdateSnapshotPolicy {
        this['name'] = name;
        return this;
    }
    public withRepeatWeekdays(repeatWeekdays: Array<string>): UpdateSnapshotPolicy {
        this['repeat_weekdays'] = repeatWeekdays;
        return this;
    }
    public set repeatWeekdays(repeatWeekdays: Array<string>  | undefined) {
        this['repeat_weekdays'] = repeatWeekdays;
    }
    public get repeatWeekdays(): Array<string> | undefined {
        return this['repeat_weekdays'];
    }
    public withRepeatIntervalDays(repeatIntervalDays: number): UpdateSnapshotPolicy {
        this['repeat_interval_days'] = repeatIntervalDays;
        return this;
    }
    public set repeatIntervalDays(repeatIntervalDays: number  | undefined) {
        this['repeat_interval_days'] = repeatIntervalDays;
    }
    public get repeatIntervalDays(): number | undefined {
        return this['repeat_interval_days'];
    }
    public withTimePoints(timePoints: Array<string>): UpdateSnapshotPolicy {
        this['time_points'] = timePoints;
        return this;
    }
    public set timePoints(timePoints: Array<string>  | undefined) {
        this['time_points'] = timePoints;
    }
    public get timePoints(): Array<string> | undefined {
        return this['time_points'];
    }
    public withRetentionDays(retentionDays: number): UpdateSnapshotPolicy {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
}
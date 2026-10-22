

export class CreateSnapshotPolicy {
    public name?: string;
    private 'repeat_weekdays'?: Array<string>;
    private 'repeat_interval_days'?: number;
    private 'time_points'?: Array<string>;
    private 'retention_days'?: number;
    public tags?: { [key: string]: string; };
    private 'enterprise_project_id'?: string;
    public constructor(name?: string, timePoints?: Array<string>, retentionDays?: number) { 
        this['name'] = name;
        this['time_points'] = timePoints;
        this['retention_days'] = retentionDays;
    }
    public withName(name: string): CreateSnapshotPolicy {
        this['name'] = name;
        return this;
    }
    public withRepeatWeekdays(repeatWeekdays: Array<string>): CreateSnapshotPolicy {
        this['repeat_weekdays'] = repeatWeekdays;
        return this;
    }
    public set repeatWeekdays(repeatWeekdays: Array<string>  | undefined) {
        this['repeat_weekdays'] = repeatWeekdays;
    }
    public get repeatWeekdays(): Array<string> | undefined {
        return this['repeat_weekdays'];
    }
    public withRepeatIntervalDays(repeatIntervalDays: number): CreateSnapshotPolicy {
        this['repeat_interval_days'] = repeatIntervalDays;
        return this;
    }
    public set repeatIntervalDays(repeatIntervalDays: number  | undefined) {
        this['repeat_interval_days'] = repeatIntervalDays;
    }
    public get repeatIntervalDays(): number | undefined {
        return this['repeat_interval_days'];
    }
    public withTimePoints(timePoints: Array<string>): CreateSnapshotPolicy {
        this['time_points'] = timePoints;
        return this;
    }
    public set timePoints(timePoints: Array<string>  | undefined) {
        this['time_points'] = timePoints;
    }
    public get timePoints(): Array<string> | undefined {
        return this['time_points'];
    }
    public withRetentionDays(retentionDays: number): CreateSnapshotPolicy {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withTags(tags: { [key: string]: string; }): CreateSnapshotPolicy {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSnapshotPolicy {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}
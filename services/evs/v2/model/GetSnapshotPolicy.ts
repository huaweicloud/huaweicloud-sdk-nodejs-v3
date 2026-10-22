

export class GetSnapshotPolicy {
    public id?: string;
    public name?: string;
    private 'repeat_weekdays'?: Array<string>;
    private 'repeat_interval_days'?: number;
    private 'time_points'?: Array<string>;
    private 'retention_days'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public tags?: { [key: string]: string; };
    private 'enterprise_project_id'?: string;
    public constructor(id?: string, name?: string, repeatWeekdays?: Array<string>, repeatIntervalDays?: number, timePoints?: Array<string>, retentionDays?: number, createdAt?: string, updatedAt?: string, tags?: { [key: string]: string; }, enterpriseProjectId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['repeat_weekdays'] = repeatWeekdays;
        this['repeat_interval_days'] = repeatIntervalDays;
        this['time_points'] = timePoints;
        this['retention_days'] = retentionDays;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['tags'] = tags;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withId(id: string): GetSnapshotPolicy {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetSnapshotPolicy {
        this['name'] = name;
        return this;
    }
    public withRepeatWeekdays(repeatWeekdays: Array<string>): GetSnapshotPolicy {
        this['repeat_weekdays'] = repeatWeekdays;
        return this;
    }
    public set repeatWeekdays(repeatWeekdays: Array<string>  | undefined) {
        this['repeat_weekdays'] = repeatWeekdays;
    }
    public get repeatWeekdays(): Array<string> | undefined {
        return this['repeat_weekdays'];
    }
    public withRepeatIntervalDays(repeatIntervalDays: number): GetSnapshotPolicy {
        this['repeat_interval_days'] = repeatIntervalDays;
        return this;
    }
    public set repeatIntervalDays(repeatIntervalDays: number  | undefined) {
        this['repeat_interval_days'] = repeatIntervalDays;
    }
    public get repeatIntervalDays(): number | undefined {
        return this['repeat_interval_days'];
    }
    public withTimePoints(timePoints: Array<string>): GetSnapshotPolicy {
        this['time_points'] = timePoints;
        return this;
    }
    public set timePoints(timePoints: Array<string>  | undefined) {
        this['time_points'] = timePoints;
    }
    public get timePoints(): Array<string> | undefined {
        return this['time_points'];
    }
    public withRetentionDays(retentionDays: number): GetSnapshotPolicy {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withCreatedAt(createdAt: string): GetSnapshotPolicy {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): GetSnapshotPolicy {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withTags(tags: { [key: string]: string; }): GetSnapshotPolicy {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GetSnapshotPolicy {
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
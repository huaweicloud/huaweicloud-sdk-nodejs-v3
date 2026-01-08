

export class ExportUserUsageMetricNewRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public username?: string;
    private 'usage_min_hours'?: number;
    private 'usage_max_hours'?: number;
    private 'enterprise_project_id'?: string;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): ExportUserUsageMetricNewRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ExportUserUsageMetricNewRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUsername(username: string): ExportUserUsageMetricNewRequest {
        this['username'] = username;
        return this;
    }
    public withUsageMinHours(usageMinHours: number): ExportUserUsageMetricNewRequest {
        this['usage_min_hours'] = usageMinHours;
        return this;
    }
    public set usageMinHours(usageMinHours: number  | undefined) {
        this['usage_min_hours'] = usageMinHours;
    }
    public get usageMinHours(): number | undefined {
        return this['usage_min_hours'];
    }
    public withUsageMaxHours(usageMaxHours: number): ExportUserUsageMetricNewRequest {
        this['usage_max_hours'] = usageMaxHours;
        return this;
    }
    public set usageMaxHours(usageMaxHours: number  | undefined) {
        this['usage_max_hours'] = usageMaxHours;
    }
    public get usageMaxHours(): number | undefined {
        return this['usage_max_hours'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportUserUsageMetricNewRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSortField(sortField: string): ExportUserUsageMetricNewRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): ExportUserUsageMetricNewRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
}
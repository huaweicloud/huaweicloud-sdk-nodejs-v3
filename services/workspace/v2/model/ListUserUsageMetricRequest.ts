

export class ListUserUsageMetricRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public username?: string;
    private 'usage_min_hours'?: number;
    private 'usage_max_hours'?: number;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): ListUserUsageMetricRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListUserUsageMetricRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUsername(username: string): ListUserUsageMetricRequest {
        this['username'] = username;
        return this;
    }
    public withUsageMinHours(usageMinHours: number): ListUserUsageMetricRequest {
        this['usage_min_hours'] = usageMinHours;
        return this;
    }
    public set usageMinHours(usageMinHours: number  | undefined) {
        this['usage_min_hours'] = usageMinHours;
    }
    public get usageMinHours(): number | undefined {
        return this['usage_min_hours'];
    }
    public withUsageMaxHours(usageMaxHours: number): ListUserUsageMetricRequest {
        this['usage_max_hours'] = usageMaxHours;
        return this;
    }
    public set usageMaxHours(usageMaxHours: number  | undefined) {
        this['usage_max_hours'] = usageMaxHours;
    }
    public get usageMaxHours(): number | undefined {
        return this['usage_max_hours'];
    }
    public withSortField(sortField: string): ListUserUsageMetricRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): ListUserUsageMetricRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withOffset(offset: number): ListUserUsageMetricRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUserUsageMetricRequest {
        this['limit'] = limit;
        return this;
    }
}
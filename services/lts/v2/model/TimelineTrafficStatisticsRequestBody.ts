

export class TimelineTrafficStatisticsRequestBody {
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    public period: number;
    private 'resource_type': string | undefined;
    private 'search_type': string | undefined;
    private 'resource_id'?: string | undefined;
    public constructor(startTime?: any, endTime?: any, period?: any, resourceType?: any, searchType?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['period'] = period;
        this['resource_type'] = resourceType;
        this['search_type'] = searchType;
    }
    public withStartTime(startTime: number): TimelineTrafficStatisticsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): TimelineTrafficStatisticsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withPeriod(period: number): TimelineTrafficStatisticsRequestBody {
        this['period'] = period;
        return this;
    }
    public withResourceType(resourceType: string): TimelineTrafficStatisticsRequestBody {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withSearchType(searchType: string): TimelineTrafficStatisticsRequestBody {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: string | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType() {
        return this['search_type'];
    }
    public withResourceId(resourceId: string): TimelineTrafficStatisticsRequestBody {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
}
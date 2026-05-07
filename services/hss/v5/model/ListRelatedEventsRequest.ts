

export class ListRelatedEventsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public region?: string;
    public category?: string;
    private 'event_id'?: string;
    private 'occur_time'?: number;
    public constructor(offset?: number, limit?: number, category?: string, eventId?: string, occurTime?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['category'] = category;
        this['event_id'] = eventId;
        this['occur_time'] = occurTime;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRelatedEventsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListRelatedEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRelatedEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withRegion(region: string): ListRelatedEventsRequest {
        this['region'] = region;
        return this;
    }
    public withCategory(category: string): ListRelatedEventsRequest {
        this['category'] = category;
        return this;
    }
    public withEventId(eventId: string): ListRelatedEventsRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withOccurTime(occurTime: number): ListRelatedEventsRequest {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
}
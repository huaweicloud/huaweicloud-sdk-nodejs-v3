

export class ListSimilarHandledEventsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'event_id'?: string;
    private 'occur_time'?: number;
    public constructor(eventId?: string) { 
        this['event_id'] = eventId;
    }
    public withRegion(region: string): ListSimilarHandledEventsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSimilarHandledEventsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEventId(eventId: string): ListSimilarHandledEventsRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withOccurTime(occurTime: number): ListSimilarHandledEventsRequest {
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
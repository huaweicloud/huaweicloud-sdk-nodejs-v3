

export class ListSameEventsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'event_id'?: string;
    private 'event_class_id'?: string;
    private 'occur_time'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(eventId?: string, eventClassId?: string) { 
        this['event_id'] = eventId;
        this['event_class_id'] = eventClassId;
    }
    public withRegion(region: string): ListSameEventsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSameEventsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEventId(eventId: string): ListSameEventsRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventClassId(eventClassId: string): ListSameEventsRequest {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withOccurTime(occurTime: number): ListSameEventsRequest {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withOffset(offset: number): ListSameEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSameEventsRequest {
        this['limit'] = limit;
        return this;
    }
}
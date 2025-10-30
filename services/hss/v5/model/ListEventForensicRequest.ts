

export class ListEventForensicRequest {
    private 'enterprise_project_id'?: string;
    private 'event_type'?: number;
    private 'event_id'?: string;
    private 'occur_time'?: number;
    public category?: string;
    public constructor(eventType?: number, eventId?: string, occurTime?: number) { 
        this['event_type'] = eventType;
        this['event_id'] = eventId;
        this['occur_time'] = occurTime;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListEventForensicRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEventType(eventType: number): ListEventForensicRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withEventId(eventId: string): ListEventForensicRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withOccurTime(occurTime: number): ListEventForensicRequest {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withCategory(category: string): ListEventForensicRequest {
        this['category'] = category;
        return this;
    }
}


export class ShowInstanceScheduleEventsRequest {
    private 'X-Language'?: string;
    public id?: string;
    private 'instance_id'?: string;
    public status?: string;
    public type?: string;
    public level?: string;
    private 'sort_field'?: string;
    public order?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ShowInstanceScheduleEventsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withId(id: string): ShowInstanceScheduleEventsRequest {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ShowInstanceScheduleEventsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): ShowInstanceScheduleEventsRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ShowInstanceScheduleEventsRequest {
        this['type'] = type;
        return this;
    }
    public withLevel(level: string): ShowInstanceScheduleEventsRequest {
        this['level'] = level;
        return this;
    }
    public withSortField(sortField: string): ShowInstanceScheduleEventsRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withOrder(order: string): ShowInstanceScheduleEventsRequest {
        this['order'] = order;
        return this;
    }
    public withLimit(limit: number): ShowInstanceScheduleEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowInstanceScheduleEventsRequest {
        this['offset'] = offset;
        return this;
    }
}
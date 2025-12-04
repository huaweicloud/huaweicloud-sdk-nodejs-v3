

export class ListScheduleEventsRequest {
    public id?: string;
    private 'instance_id'?: string;
    public status?: string;
    public type?: string;
    public level?: string;
    private 'sort_field'?: string;
    public order?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withId(id: string): ListScheduleEventsRequest {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ListScheduleEventsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): ListScheduleEventsRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListScheduleEventsRequest {
        this['type'] = type;
        return this;
    }
    public withLevel(level: string): ListScheduleEventsRequest {
        this['level'] = level;
        return this;
    }
    public withSortField(sortField: string): ListScheduleEventsRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withOrder(order: string): ListScheduleEventsRequest {
        this['order'] = order;
        return this;
    }
    public withOffset(offset: number): ListScheduleEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduleEventsRequest {
        this['limit'] = limit;
        return this;
    }
}
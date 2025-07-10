

export class ListUserEventsRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public username?: string;
    private 'event_type'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): ListUserEventsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListUserEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUsername(username: string): ListUserEventsRequest {
        this['username'] = username;
        return this;
    }
    public withEventType(eventType: string): ListUserEventsRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withResourceId(resourceId: string): ListUserEventsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListUserEventsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withOffset(offset: number): ListUserEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUserEventsRequest {
        this['limit'] = limit;
        return this;
    }
}
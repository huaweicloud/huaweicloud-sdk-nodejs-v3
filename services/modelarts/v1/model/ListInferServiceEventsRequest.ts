

export class ListInferServiceEventsRequest {
    private 'service_id'?: string;
    private 'event_type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'event_info_key'?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ListInferServiceEventsRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withEventType(eventType: string): ListInferServiceEventsRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withStartTime(startTime: number): ListInferServiceEventsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListInferServiceEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withEventInfoKey(eventInfoKey: string): ListInferServiceEventsRequest {
        this['event_info_key'] = eventInfoKey;
        return this;
    }
    public set eventInfoKey(eventInfoKey: string  | undefined) {
        this['event_info_key'] = eventInfoKey;
    }
    public get eventInfoKey(): string | undefined {
        return this['event_info_key'];
    }
    public withLimit(limit: number): ListInferServiceEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInferServiceEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListInferServiceEventsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListInferServiceEventsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}


export class ShowListOfEventSampleRequest {
    public offset?: number;
    public limit?: number;
    public sort?: string;
    public name?: string;
    private 'event_type_name'?: string;
    private 'event_source_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ShowListOfEventSampleRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowListOfEventSampleRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ShowListOfEventSampleRequest {
        this['sort'] = sort;
        return this;
    }
    public withName(name: string): ShowListOfEventSampleRequest {
        this['name'] = name;
        return this;
    }
    public withEventTypeName(eventTypeName: string): ShowListOfEventSampleRequest {
        this['event_type_name'] = eventTypeName;
        return this;
    }
    public set eventTypeName(eventTypeName: string  | undefined) {
        this['event_type_name'] = eventTypeName;
    }
    public get eventTypeName(): string | undefined {
        return this['event_type_name'];
    }
    public withEventSourceId(eventSourceId: string): ShowListOfEventSampleRequest {
        this['event_source_id'] = eventSourceId;
        return this;
    }
    public set eventSourceId(eventSourceId: string  | undefined) {
        this['event_source_id'] = eventSourceId;
    }
    public get eventSourceId(): string | undefined {
        return this['event_source_id'];
    }
}
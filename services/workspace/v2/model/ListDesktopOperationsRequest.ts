

export class ListDesktopOperationsRequest {
    private 'record_id'?: string;
    private 'event_type'?: string;
    private 'event_id'?: string;
    private 'event_level'?: string;
    private 'event_data'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(recordId?: string) { 
        this['record_id'] = recordId;
    }
    public withRecordId(recordId: string): ListDesktopOperationsRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withEventType(eventType: string): ListDesktopOperationsRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withEventId(eventId: string): ListDesktopOperationsRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventLevel(eventLevel: string): ListDesktopOperationsRequest {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: string  | undefined) {
        this['event_level'] = eventLevel;
    }
    public get eventLevel(): string | undefined {
        return this['event_level'];
    }
    public withEventData(eventData: string): ListDesktopOperationsRequest {
        this['event_data'] = eventData;
        return this;
    }
    public set eventData(eventData: string  | undefined) {
        this['event_data'] = eventData;
    }
    public get eventData(): string | undefined {
        return this['event_data'];
    }
    public withLimit(limit: number): ListDesktopOperationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDesktopOperationsRequest {
        this['offset'] = offset;
        return this;
    }
}
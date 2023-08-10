

export class ListEventsRequest {
    private 'event_type'?: ListEventsRequestEventTypeEnum | string;
    private 'event_name'?: string;
    public from?: number;
    public to?: number;
    public start?: number;
    public limit?: number;
    public constructor() { 
    }
    public withEventType(eventType: ListEventsRequestEventTypeEnum | string): ListEventsRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: ListEventsRequestEventTypeEnum | string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): ListEventsRequestEventTypeEnum | string | undefined {
        return this['event_type'];
    }
    public withEventName(eventName: string): ListEventsRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withFrom(from: number): ListEventsRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListEventsRequest {
        this['to'] = to;
        return this;
    }
    public withStart(start: number): ListEventsRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: number): ListEventsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventsRequestEventTypeEnum {
    EVENT_SYS = 'EVENT.SYS',
    EVENT_CUSTOM = 'EVENT.CUSTOM'
}

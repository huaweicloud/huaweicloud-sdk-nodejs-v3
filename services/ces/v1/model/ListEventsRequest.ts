

export class ListEventsRequest {
    private 'event_type'?: ListEventsRequestEventTypeEnum | string;
    private 'sub_event_type'?: ListEventsRequestSubEventTypeEnum | string;
    private 'event_name'?: string;
    public from?: number;
    public to?: number;
    public start?: string;
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
    public withSubEventType(subEventType: ListEventsRequestSubEventTypeEnum | string): ListEventsRequest {
        this['sub_event_type'] = subEventType;
        return this;
    }
    public set subEventType(subEventType: ListEventsRequestSubEventTypeEnum | string  | undefined) {
        this['sub_event_type'] = subEventType;
    }
    public get subEventType(): ListEventsRequestSubEventTypeEnum | string | undefined {
        return this['sub_event_type'];
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
    public withStart(start: string): ListEventsRequest {
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
/**
    * @export
    * @enum {string}
    */
export enum ListEventsRequestSubEventTypeEnum {
    SUB_EVENT_OPS = 'SUB_EVENT.OPS',
    SUB_EVENT_PLAN = 'SUB_EVENT.PLAN',
    SUB_EVENT_CUSTOM = 'SUB_EVENT.CUSTOM'
}

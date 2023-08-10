

export class ListEventDetailRequest {
    private 'event_name'?: string;
    private 'event_type'?: ListEventDetailRequestEventTypeEnum | string;
    private 'event_source'?: string;
    private 'event_level'?: string;
    private 'event_user'?: string;
    private 'event_state'?: string;
    public from?: number;
    public to?: number;
    public start?: number;
    public limit?: number;
    public constructor(eventName?: string, eventType?: string) { 
        this['event_name'] = eventName;
        this['event_type'] = eventType;
    }
    public withEventName(eventName: string): ListEventDetailRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventType(eventType: ListEventDetailRequestEventTypeEnum | string): ListEventDetailRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: ListEventDetailRequestEventTypeEnum | string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): ListEventDetailRequestEventTypeEnum | string | undefined {
        return this['event_type'];
    }
    public withEventSource(eventSource: string): ListEventDetailRequest {
        this['event_source'] = eventSource;
        return this;
    }
    public set eventSource(eventSource: string  | undefined) {
        this['event_source'] = eventSource;
    }
    public get eventSource(): string | undefined {
        return this['event_source'];
    }
    public withEventLevel(eventLevel: string): ListEventDetailRequest {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: string  | undefined) {
        this['event_level'] = eventLevel;
    }
    public get eventLevel(): string | undefined {
        return this['event_level'];
    }
    public withEventUser(eventUser: string): ListEventDetailRequest {
        this['event_user'] = eventUser;
        return this;
    }
    public set eventUser(eventUser: string  | undefined) {
        this['event_user'] = eventUser;
    }
    public get eventUser(): string | undefined {
        return this['event_user'];
    }
    public withEventState(eventState: string): ListEventDetailRequest {
        this['event_state'] = eventState;
        return this;
    }
    public set eventState(eventState: string  | undefined) {
        this['event_state'] = eventState;
    }
    public get eventState(): string | undefined {
        return this['event_state'];
    }
    public withFrom(from: number): ListEventDetailRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListEventDetailRequest {
        this['to'] = to;
        return this;
    }
    public withStart(start: number): ListEventDetailRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: number): ListEventDetailRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventDetailRequestEventTypeEnum {
    EVENT_SYS = 'EVENT.SYS',
    EVENT_CUSTOM = 'EVENT.CUSTOM'
}

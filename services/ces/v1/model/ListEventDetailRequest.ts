

export class ListEventDetailRequest {
    private 'event_name'?: string;
    private 'event_type'?: ListEventDetailRequestEventTypeEnum | string;
    private 'sub_event_type'?: ListEventDetailRequestSubEventTypeEnum | string;
    private 'event_source'?: string;
    private 'event_level'?: ListEventDetailRequestEventLevelEnum | string;
    private 'event_user'?: string;
    private 'event_state'?: ListEventDetailRequestEventStateEnum | string;
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
    public withSubEventType(subEventType: ListEventDetailRequestSubEventTypeEnum | string): ListEventDetailRequest {
        this['sub_event_type'] = subEventType;
        return this;
    }
    public set subEventType(subEventType: ListEventDetailRequestSubEventTypeEnum | string  | undefined) {
        this['sub_event_type'] = subEventType;
    }
    public get subEventType(): ListEventDetailRequestSubEventTypeEnum | string | undefined {
        return this['sub_event_type'];
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
    public withEventLevel(eventLevel: ListEventDetailRequestEventLevelEnum | string): ListEventDetailRequest {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: ListEventDetailRequestEventLevelEnum | string  | undefined) {
        this['event_level'] = eventLevel;
    }
    public get eventLevel(): ListEventDetailRequestEventLevelEnum | string | undefined {
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
    public withEventState(eventState: ListEventDetailRequestEventStateEnum | string): ListEventDetailRequest {
        this['event_state'] = eventState;
        return this;
    }
    public set eventState(eventState: ListEventDetailRequestEventStateEnum | string  | undefined) {
        this['event_state'] = eventState;
    }
    public get eventState(): ListEventDetailRequestEventStateEnum | string | undefined {
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
/**
    * @export
    * @enum {string}
    */
export enum ListEventDetailRequestSubEventTypeEnum {
    SUB_EVENT_OPS = 'SUB_EVENT.OPS',
    SUB_EVENT_PLAN = 'SUB_EVENT.PLAN',
    SUB_EVENT_CUSTOM = 'SUB_EVENT.CUSTOM'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventDetailRequestEventLevelEnum {
    CRITICAL = 'Critical',
    MAJOR = 'Major',
    INFO = 'Info',
    MINOR = 'Minor'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEventDetailRequestEventStateEnum {
    NORMAL = 'normal',
    WARNING = 'warning',
    INCIDENT = 'incident'
}

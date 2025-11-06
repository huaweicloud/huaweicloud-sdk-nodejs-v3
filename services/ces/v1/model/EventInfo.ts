

export class EventInfo {
    private 'event_name'?: string;
    private 'event_type'?: EventInfoEventTypeEnum | string;
    private 'sub_event_type'?: EventInfoSubEventTypeEnum | string;
    private 'event_count'?: number;
    private 'latest_occur_time'?: number;
    private 'latest_event_source'?: string;
    public constructor() { 
    }
    public withEventName(eventName: string): EventInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventType(eventType: EventInfoEventTypeEnum | string): EventInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: EventInfoEventTypeEnum | string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): EventInfoEventTypeEnum | string | undefined {
        return this['event_type'];
    }
    public withSubEventType(subEventType: EventInfoSubEventTypeEnum | string): EventInfo {
        this['sub_event_type'] = subEventType;
        return this;
    }
    public set subEventType(subEventType: EventInfoSubEventTypeEnum | string  | undefined) {
        this['sub_event_type'] = subEventType;
    }
    public get subEventType(): EventInfoSubEventTypeEnum | string | undefined {
        return this['sub_event_type'];
    }
    public withEventCount(eventCount: number): EventInfo {
        this['event_count'] = eventCount;
        return this;
    }
    public set eventCount(eventCount: number  | undefined) {
        this['event_count'] = eventCount;
    }
    public get eventCount(): number | undefined {
        return this['event_count'];
    }
    public withLatestOccurTime(latestOccurTime: number): EventInfo {
        this['latest_occur_time'] = latestOccurTime;
        return this;
    }
    public set latestOccurTime(latestOccurTime: number  | undefined) {
        this['latest_occur_time'] = latestOccurTime;
    }
    public get latestOccurTime(): number | undefined {
        return this['latest_occur_time'];
    }
    public withLatestEventSource(latestEventSource: string): EventInfo {
        this['latest_event_source'] = latestEventSource;
        return this;
    }
    public set latestEventSource(latestEventSource: string  | undefined) {
        this['latest_event_source'] = latestEventSource;
    }
    public get latestEventSource(): string | undefined {
        return this['latest_event_source'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventInfoEventTypeEnum {
    EVENT_SYS = 'EVENT.SYS',
    EVENT_CUSTOM = 'EVENT.CUSTOM'
}
/**
    * @export
    * @enum {string}
    */
export enum EventInfoSubEventTypeEnum {
    SUB_EVENT_OPS = 'SUB_EVENT.OPS',
    SUB_EVENT_PLAN = 'SUB_EVENT.PLAN',
    SUB_EVENT_CUSTOM = 'SUB_EVENT.CUSTOM'
}

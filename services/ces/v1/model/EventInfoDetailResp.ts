import { ShowEventItemDetailResp } from './ShowEventItemDetailResp';
import { ShowEventItemResp } from './ShowEventItemResp';


export class EventInfoDetailResp {
    private 'event_name'?: string;
    private 'event_source'?: string;
    public time?: number;
    public detail?: ShowEventItemDetailResp;
    private 'event_id'?: string;
    public constructor(eventName?: string, eventSource?: string, time?: number, detail?: ShowEventItemDetailResp) { 
        this['event_name'] = eventName;
        this['event_source'] = eventSource;
        this['time'] = time;
        this['detail'] = detail;
    }
    public withEventName(eventName: string): EventInfoDetailResp {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventSource(eventSource: string): EventInfoDetailResp {
        this['event_source'] = eventSource;
        return this;
    }
    public set eventSource(eventSource: string  | undefined) {
        this['event_source'] = eventSource;
    }
    public get eventSource(): string | undefined {
        return this['event_source'];
    }
    public withTime(time: number): EventInfoDetailResp {
        this['time'] = time;
        return this;
    }
    public withDetail(detail: ShowEventItemDetailResp): EventInfoDetailResp {
        this['detail'] = detail;
        return this;
    }
    public withEventId(eventId: string): EventInfoDetailResp {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
}
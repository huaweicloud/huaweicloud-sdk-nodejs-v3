import { ShowEventItemDetailResp } from './ShowEventItemDetailResp';


export class ShowEventItemResp {
    private 'event_name'?: string;
    private 'event_source'?: string;
    public time?: number;
    public detail?: ShowEventItemDetailResp;
    public constructor(eventName?: string, eventSource?: string, time?: number, detail?: ShowEventItemDetailResp) { 
        this['event_name'] = eventName;
        this['event_source'] = eventSource;
        this['time'] = time;
        this['detail'] = detail;
    }
    public withEventName(eventName: string): ShowEventItemResp {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventSource(eventSource: string): ShowEventItemResp {
        this['event_source'] = eventSource;
        return this;
    }
    public set eventSource(eventSource: string  | undefined) {
        this['event_source'] = eventSource;
    }
    public get eventSource(): string | undefined {
        return this['event_source'];
    }
    public withTime(time: number): ShowEventItemResp {
        this['time'] = time;
        return this;
    }
    public withDetail(detail: ShowEventItemDetailResp): ShowEventItemResp {
        this['detail'] = detail;
        return this;
    }
}
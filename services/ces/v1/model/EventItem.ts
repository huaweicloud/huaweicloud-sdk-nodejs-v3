import { EventItemDetail } from './EventItemDetail';


export class EventItem {
    private 'event_name'?: string;
    private 'event_source'?: string;
    public time?: number;
    public detail?: EventItemDetail;
    public constructor(eventName?: string, eventSource?: string, time?: number, detail?: EventItemDetail) { 
        this['event_name'] = eventName;
        this['event_source'] = eventSource;
        this['time'] = time;
        this['detail'] = detail;
    }
    public withEventName(eventName: string): EventItem {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventSource(eventSource: string): EventItem {
        this['event_source'] = eventSource;
        return this;
    }
    public set eventSource(eventSource: string  | undefined) {
        this['event_source'] = eventSource;
    }
    public get eventSource(): string | undefined {
        return this['event_source'];
    }
    public withTime(time: number): EventItem {
        this['time'] = time;
        return this;
    }
    public withDetail(detail: EventItemDetail): EventItem {
        this['detail'] = detail;
        return this;
    }
}
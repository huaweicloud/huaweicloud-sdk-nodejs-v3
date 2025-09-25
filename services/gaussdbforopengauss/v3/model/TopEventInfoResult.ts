

export class TopEventInfoResult {
    private 'event_name'?: string;
    private 'event_time'?: number;
    public constructor(eventName?: string, eventTime?: number) { 
        this['event_name'] = eventName;
        this['event_time'] = eventTime;
    }
    public withEventName(eventName: string): TopEventInfoResult {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventTime(eventTime: number): TopEventInfoResult {
        this['event_time'] = eventTime;
        return this;
    }
    public set eventTime(eventTime: number  | undefined) {
        this['event_time'] = eventTime;
    }
    public get eventTime(): number | undefined {
        return this['event_time'];
    }
}
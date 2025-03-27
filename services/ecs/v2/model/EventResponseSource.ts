

export class EventResponseSource {
    public type?: string;
    private 'host_scheduled_event_id'?: string;
    public constructor() { 
    }
    public withType(type: string): EventResponseSource {
        this['type'] = type;
        return this;
    }
    public withHostScheduledEventId(hostScheduledEventId: string): EventResponseSource {
        this['host_scheduled_event_id'] = hostScheduledEventId;
        return this;
    }
    public set hostScheduledEventId(hostScheduledEventId: string  | undefined) {
        this['host_scheduled_event_id'] = hostScheduledEventId;
    }
    public get hostScheduledEventId(): string | undefined {
        return this['host_scheduled_event_id'];
    }
}
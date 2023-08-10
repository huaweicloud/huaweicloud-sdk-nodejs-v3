

export class CreateEventsResponseBody {
    private 'event_id'?: string;
    private 'event_name'?: string;
    public constructor(eventId?: string, eventName?: string) { 
        this['event_id'] = eventId;
        this['event_name'] = eventName;
    }
    public withEventId(eventId: string): CreateEventsResponseBody {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventName(eventName: string): CreateEventsResponseBody {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
}
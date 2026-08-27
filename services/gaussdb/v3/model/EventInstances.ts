

export class EventInstances {
    private 'event_id'?: string;
    public constructor(eventId?: string) { 
        this['event_id'] = eventId;
    }
    public withEventId(eventId: string): EventInstances {
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
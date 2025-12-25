

export class DataObjectCreateUpdateResponse {
    public id?: string;
    private 'event_id'?: string;
    public constructor() { 
    }
    public withId(id: string): DataObjectCreateUpdateResponse {
        this['id'] = id;
        return this;
    }
    public withEventId(eventId: string): DataObjectCreateUpdateResponse {
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
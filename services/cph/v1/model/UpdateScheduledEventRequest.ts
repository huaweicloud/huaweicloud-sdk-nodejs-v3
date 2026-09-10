import { UpdateScheduledEventRequestBody } from './UpdateScheduledEventRequestBody';


export class UpdateScheduledEventRequest {
    private 'event_id'?: string;
    public body?: UpdateScheduledEventRequestBody;
    public constructor(eventId?: string) { 
        this['event_id'] = eventId;
    }
    public withEventId(eventId: string): UpdateScheduledEventRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withBody(body: UpdateScheduledEventRequestBody): UpdateScheduledEventRequest {
        this['body'] = body;
        return this;
    }
}
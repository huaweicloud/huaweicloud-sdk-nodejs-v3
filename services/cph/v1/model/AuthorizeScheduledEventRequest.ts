import { AuthorizeScheduledEventRequestBody } from './AuthorizeScheduledEventRequestBody';


export class AuthorizeScheduledEventRequest {
    private 'event_id'?: string;
    public body?: AuthorizeScheduledEventRequestBody;
    public constructor(eventId?: string) { 
        this['event_id'] = eventId;
    }
    public withEventId(eventId: string): AuthorizeScheduledEventRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withBody(body: AuthorizeScheduledEventRequestBody): AuthorizeScheduledEventRequest {
        this['body'] = body;
        return this;
    }
}
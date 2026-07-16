import { EventUpdate } from './EventUpdate';


export class AcceptScheduledEventRequest {
    private 'event_id'?: string;
    public workspaceId?: string;
    public body?: EventUpdate;
    public constructor(eventId?: string) { 
        this['event_id'] = eventId;
    }
    public withEventId(eventId: string): AcceptScheduledEventRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withWorkspaceId(workspaceId: string): AcceptScheduledEventRequest {
        this['workspaceId'] = workspaceId;
        return this;
    }
    public withBody(body: EventUpdate): AcceptScheduledEventRequest {
        this['body'] = body;
        return this;
    }
}
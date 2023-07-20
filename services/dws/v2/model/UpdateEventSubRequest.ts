import { EventSubUpdateRequest } from './EventSubUpdateRequest';


export class UpdateEventSubRequest {
    private 'event_sub_id'?: string;
    public body?: EventSubUpdateRequest;
    public constructor(eventSubId?: string) { 
        this['event_sub_id'] = eventSubId;
    }
    public withEventSubId(eventSubId: string): UpdateEventSubRequest {
        this['event_sub_id'] = eventSubId;
        return this;
    }
    public set eventSubId(eventSubId: string  | undefined) {
        this['event_sub_id'] = eventSubId;
    }
    public get eventSubId(): string | undefined {
        return this['event_sub_id'];
    }
    public withBody(body: EventSubUpdateRequest): UpdateEventSubRequest {
        this['body'] = body;
        return this;
    }
}
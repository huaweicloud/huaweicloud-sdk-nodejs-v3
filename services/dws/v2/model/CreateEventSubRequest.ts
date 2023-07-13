import { EventSubRequest } from './EventSubRequest';


export class CreateEventSubRequest {
    public body?: EventSubRequest;
    public constructor() { 
    }
    public withBody(body: EventSubRequest): CreateEventSubRequest {
        this['body'] = body;
        return this;
    }
}
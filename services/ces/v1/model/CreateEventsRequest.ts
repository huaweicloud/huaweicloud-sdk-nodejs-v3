import { EventItem } from './EventItem';


export class CreateEventsRequest {
    public body?: Array<EventItem>;
    public constructor() { 
    }
    public withBody(body: Array<EventItem>): CreateEventsRequest {
        this['body'] = body;
        return this;
    }
}
import { ScheduledEventAcceptBody } from './ScheduledEventAcceptBody';


export class AcceptScheduledEventRequest {
    public id?: string;
    public body?: ScheduledEventAcceptBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): AcceptScheduledEventRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ScheduledEventAcceptBody): AcceptScheduledEventRequest {
        this['body'] = body;
        return this;
    }
}
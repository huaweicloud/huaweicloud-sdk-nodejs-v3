import { ScheduledEventUpdateBody } from './ScheduledEventUpdateBody';


export class UpdateScheduledEventRequest {
    public id?: string;
    public body?: ScheduledEventUpdateBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateScheduledEventRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ScheduledEventUpdateBody): UpdateScheduledEventRequest {
        this['body'] = body;
        return this;
    }
}
import { Event } from './Event';


export class Events {
    public events?: Array<Event>;
    public constructor(events?: Array<Event>) { 
        this['events'] = events;
    }
    public withEvents(events: Array<Event>): Events {
        this['events'] = events;
        return this;
    }
}
import { EventModel } from './EventModel';


export class EventList {
    public events?: Array<EventModel>;
    public constructor(events?: Array<EventModel>) { 
        this['events'] = events;
    }
    public withEvents(events: Array<EventModel>): EventList {
        this['events'] = events;
        return this;
    }
}
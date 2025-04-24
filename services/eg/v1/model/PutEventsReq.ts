import { CloudEvents } from './CloudEvents';


export class PutEventsReq {
    public events?: Array<CloudEvents>;
    public constructor() { 
    }
    public withEvents(events: Array<CloudEvents>): PutEventsReq {
        this['events'] = events;
        return this;
    }
}
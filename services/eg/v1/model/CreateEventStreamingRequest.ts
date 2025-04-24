import { EventStreamingCreateReq } from './EventStreamingCreateReq';


export class CreateEventStreamingRequest {
    public body?: EventStreamingCreateReq;
    public constructor() { 
    }
    public withBody(body: EventStreamingCreateReq): CreateEventStreamingRequest {
        this['body'] = body;
        return this;
    }
}
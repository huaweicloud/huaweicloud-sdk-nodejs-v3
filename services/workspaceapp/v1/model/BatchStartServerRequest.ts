import { BatchStartServerReq } from './BatchStartServerReq';


export class BatchStartServerRequest {
    public body?: BatchStartServerReq;
    public constructor() { 
    }
    public withBody(body: BatchStartServerReq): BatchStartServerRequest {
        this['body'] = body;
        return this;
    }
}
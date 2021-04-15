import { BatchStartServersRequestBody } from './BatchStartServersRequestBody';


export class BatchStartServersRequest {
    public body?: BatchStartServersRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchStartServersRequestBody): BatchStartServersRequest {
        this['body'] = body;
        return this;
    }
}
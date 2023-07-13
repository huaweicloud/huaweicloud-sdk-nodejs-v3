import { BatchStopServersRequestBody } from './BatchStopServersRequestBody';


export class BatchStopServersRequest {
    public body?: BatchStopServersRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchStopServersRequestBody): BatchStopServersRequest {
        this['body'] = body;
        return this;
    }
}
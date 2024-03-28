import { BatchShutdownInsReq } from './BatchShutdownInsReq';


export class BatchStopInstanceRequest {
    public body?: BatchShutdownInsReq;
    public constructor() { 
    }
    public withBody(body: BatchShutdownInsReq): BatchStopInstanceRequest {
        this['body'] = body;
        return this;
    }
}
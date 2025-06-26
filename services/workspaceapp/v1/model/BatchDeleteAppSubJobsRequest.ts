import { BatchDeleteSubJobsReq } from './BatchDeleteSubJobsReq';


export class BatchDeleteAppSubJobsRequest {
    public body?: BatchDeleteSubJobsReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteSubJobsReq): BatchDeleteAppSubJobsRequest {
        this['body'] = body;
        return this;
    }
}
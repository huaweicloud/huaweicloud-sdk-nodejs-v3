import { BatchDeleteSubJobsReq } from './BatchDeleteSubJobsReq';


export class BatchDeleteImageSubJobsRequest {
    public body?: BatchDeleteSubJobsReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteSubJobsReq): BatchDeleteImageSubJobsRequest {
        this['body'] = body;
        return this;
    }
}
import { BatchOperateJobsReq } from './BatchOperateJobsReq';


export class RetryJobsRequest {
    public body?: BatchOperateJobsReq;
    public constructor() { 
    }
    public withBody(body: BatchOperateJobsReq): RetryJobsRequest {
        this['body'] = body;
        return this;
    }
}
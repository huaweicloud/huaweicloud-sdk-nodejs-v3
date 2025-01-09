import { BatchOperateJobsReq } from './BatchOperateJobsReq';


export class BatchDeleteJobsRequest {
    public body?: BatchOperateJobsReq;
    public constructor() { 
    }
    public withBody(body: BatchOperateJobsReq): BatchDeleteJobsRequest {
        this['body'] = body;
        return this;
    }
}
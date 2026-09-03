import { BatchDeleteJobsReq } from './BatchDeleteJobsReq';


export class BatchDeleteTrainingJobRequest {
    public body?: BatchDeleteJobsReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteJobsReq): BatchDeleteTrainingJobRequest {
        this['body'] = body;
        return this;
    }
}
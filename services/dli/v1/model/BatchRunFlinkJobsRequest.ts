import { BatchRunFlinkJobsRequestBody } from './BatchRunFlinkJobsRequestBody';


export class BatchRunFlinkJobsRequest {
    public body?: BatchRunFlinkJobsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchRunFlinkJobsRequestBody): BatchRunFlinkJobsRequest {
        this['body'] = body;
        return this;
    }
}
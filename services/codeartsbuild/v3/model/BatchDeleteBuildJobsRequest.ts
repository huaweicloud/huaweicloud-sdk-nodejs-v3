import { BatchDeleteBuildJobsRequestBody } from './BatchDeleteBuildJobsRequestBody';


export class BatchDeleteBuildJobsRequest {
    public body?: BatchDeleteBuildJobsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteBuildJobsRequestBody): BatchDeleteBuildJobsRequest {
        this['body'] = body;
        return this;
    }
}
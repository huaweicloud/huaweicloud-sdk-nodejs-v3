import { BatchDeleteFlinkJobsRequestBody } from './BatchDeleteFlinkJobsRequestBody';


export class BatchDeleteFlinkJobsRequest {
    public body?: BatchDeleteFlinkJobsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteFlinkJobsRequestBody): BatchDeleteFlinkJobsRequest {
        this['body'] = body;
        return this;
    }
}
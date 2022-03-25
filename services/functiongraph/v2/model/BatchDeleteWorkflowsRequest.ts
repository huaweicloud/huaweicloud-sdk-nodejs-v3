import { BatchDeleteWorkflowsRequestBody } from './BatchDeleteWorkflowsRequestBody';


export class BatchDeleteWorkflowsRequest {
    public body?: BatchDeleteWorkflowsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteWorkflowsRequestBody): BatchDeleteWorkflowsRequest {
        this['body'] = body;
        return this;
    }
}
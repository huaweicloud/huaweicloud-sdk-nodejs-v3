import { WorkflowDeleteBody } from './WorkflowDeleteBody';


export class BatchDeleteWorkflowsRequest {
    public body?: WorkflowDeleteBody;
    public constructor() { 
    }
    public withBody(body: WorkflowDeleteBody): BatchDeleteWorkflowsRequest {
        this['body'] = body;
        return this;
    }
}
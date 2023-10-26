import { WorkflowRequestBody } from './WorkflowRequestBody';


export class CreateWorkflowRequest {
    public body?: WorkflowRequestBody;
    public constructor() { 
    }
    public withBody(body: WorkflowRequestBody): CreateWorkflowRequest {
        this['body'] = body;
        return this;
    }
}
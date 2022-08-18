import { WorkflowCreateBody } from './WorkflowCreateBody';


export class CreateWorkflowRequest {
    public body?: WorkflowCreateBody;
    public constructor() { 
    }
    public withBody(body: WorkflowCreateBody): CreateWorkflowRequest {
        this['body'] = body;
        return this;
    }
}
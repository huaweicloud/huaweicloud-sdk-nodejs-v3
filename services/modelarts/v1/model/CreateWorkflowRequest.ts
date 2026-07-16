import { WorkflowParam } from './WorkflowParam';


export class CreateWorkflowRequest {
    public body?: WorkflowParam;
    public constructor() { 
    }
    public withBody(body: WorkflowParam): CreateWorkflowRequest {
        this['body'] = body;
        return this;
    }
}
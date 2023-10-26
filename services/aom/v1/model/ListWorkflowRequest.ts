import { WorkflowQueryParam } from './WorkflowQueryParam';


export class ListWorkflowRequest {
    public body?: WorkflowQueryParam;
    public constructor() { 
    }
    public withBody(body: WorkflowQueryParam): ListWorkflowRequest {
        this['body'] = body;
        return this;
    }
}
import { WorkflowMainServiceAuthReq } from './WorkflowMainServiceAuthReq';


export class CreateWorkflowServiceAuthRequest {
    public body?: WorkflowMainServiceAuthReq;
    public constructor() { 
    }
    public withBody(body: WorkflowMainServiceAuthReq): CreateWorkflowServiceAuthRequest {
        this['body'] = body;
        return this;
    }
}
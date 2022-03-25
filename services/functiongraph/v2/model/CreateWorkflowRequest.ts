import { CreateWorkflowRequestBody } from './CreateWorkflowRequestBody';


export class CreateWorkflowRequest {
    public body?: CreateWorkflowRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateWorkflowRequestBody): CreateWorkflowRequest {
        this['body'] = body;
        return this;
    }
}
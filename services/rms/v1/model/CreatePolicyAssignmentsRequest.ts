import { PolicyAssignmentRequestBody } from './PolicyAssignmentRequestBody';


export class CreatePolicyAssignmentsRequest {
    public body?: PolicyAssignmentRequestBody;
    public constructor() { 
    }
    public withBody(body: PolicyAssignmentRequestBody): CreatePolicyAssignmentsRequest {
        this['body'] = body;
        return this;
    }
}
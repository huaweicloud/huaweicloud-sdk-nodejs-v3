import { BatchResumeScalingPoliciesOption } from './BatchResumeScalingPoliciesOption';


export class BatchResumeScalingPoliciesRequest {
    public body?: BatchResumeScalingPoliciesOption;
    public constructor() { 
    }
    public withBody(body: BatchResumeScalingPoliciesOption): BatchResumeScalingPoliciesRequest {
        this['body'] = body;
        return this;
    }
}
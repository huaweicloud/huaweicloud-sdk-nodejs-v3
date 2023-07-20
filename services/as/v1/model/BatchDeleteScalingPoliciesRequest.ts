import { BatchDeleteScalingPoliciesOption } from './BatchDeleteScalingPoliciesOption';


export class BatchDeleteScalingPoliciesRequest {
    public body?: BatchDeleteScalingPoliciesOption;
    public constructor() { 
    }
    public withBody(body: BatchDeleteScalingPoliciesOption): BatchDeleteScalingPoliciesRequest {
        this['body'] = body;
        return this;
    }
}
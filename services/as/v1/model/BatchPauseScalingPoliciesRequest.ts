import { BatchPauseScalingPoliciesOption } from './BatchPauseScalingPoliciesOption';


export class BatchPauseScalingPoliciesRequest {
    public body?: BatchPauseScalingPoliciesOption;
    public constructor() { 
    }
    public withBody(body: BatchPauseScalingPoliciesOption): BatchPauseScalingPoliciesRequest {
        this['body'] = body;
        return this;
    }
}
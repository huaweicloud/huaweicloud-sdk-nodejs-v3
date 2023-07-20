import { ExecuteScalingPolicyOption } from './ExecuteScalingPolicyOption';


export class ExecuteScalingPolicyRequest {
    private 'scaling_policy_id'?: string;
    public body?: ExecuteScalingPolicyOption;
    public constructor(scalingPolicyId?: string) { 
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public withScalingPolicyId(scalingPolicyId: string): ExecuteScalingPolicyRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withBody(body: ExecuteScalingPolicyOption): ExecuteScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}
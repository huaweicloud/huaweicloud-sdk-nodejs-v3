

export class ShowScalingPolicyRequest {
    private 'scaling_policy_id'?: string;
    public constructor(scalingPolicyId?: string) { 
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public withScalingPolicyId(scalingPolicyId: string): ShowScalingPolicyRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
}
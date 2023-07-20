import { UpdateScalingPolicyOption } from './UpdateScalingPolicyOption';


export class UpdateScalingPolicyRequest {
    private 'scaling_policy_id'?: string;
    public body?: UpdateScalingPolicyOption;
    public constructor(scalingPolicyId?: string) { 
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public withScalingPolicyId(scalingPolicyId: string): UpdateScalingPolicyRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withBody(body: UpdateScalingPolicyOption): UpdateScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}
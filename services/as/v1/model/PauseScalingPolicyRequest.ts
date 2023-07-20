import { PauseScalingPolicyOption } from './PauseScalingPolicyOption';


export class PauseScalingPolicyRequest {
    private 'scaling_policy_id'?: string;
    public body?: PauseScalingPolicyOption;
    public constructor(scalingPolicyId?: string) { 
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public withScalingPolicyId(scalingPolicyId: string): PauseScalingPolicyRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withBody(body: PauseScalingPolicyOption): PauseScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}
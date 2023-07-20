import { ResumeScalingPolicyOption } from './ResumeScalingPolicyOption';


export class ResumeScalingPolicyRequest {
    private 'scaling_policy_id'?: string;
    public body?: ResumeScalingPolicyOption;
    public constructor(scalingPolicyId?: string) { 
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public withScalingPolicyId(scalingPolicyId: string): ResumeScalingPolicyRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withBody(body: ResumeScalingPolicyOption): ResumeScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}
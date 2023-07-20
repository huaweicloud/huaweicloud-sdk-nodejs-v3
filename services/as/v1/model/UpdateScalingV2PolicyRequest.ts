import { UpdateScalingV2PolicyOption } from './UpdateScalingV2PolicyOption';


export class UpdateScalingV2PolicyRequest {
    private 'scaling_policy_id'?: string;
    public body?: UpdateScalingV2PolicyOption;
    public constructor(scalingPolicyId?: string) { 
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public withScalingPolicyId(scalingPolicyId: string): UpdateScalingV2PolicyRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withBody(body: UpdateScalingV2PolicyOption): UpdateScalingV2PolicyRequest {
        this['body'] = body;
        return this;
    }
}
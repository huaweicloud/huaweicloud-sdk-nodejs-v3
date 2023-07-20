
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateScalingV2PolicyResponse extends SdkResponse {
    private 'scaling_policy_id'?: string;
    public constructor() { 
        super();
    }
    public withScalingPolicyId(scalingPolicyId: string): CreateScalingV2PolicyResponse {
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
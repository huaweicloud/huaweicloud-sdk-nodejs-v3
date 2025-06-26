import { ScalingPolicyBySession } from './ScalingPolicyBySession';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScalingPolicyResponse extends SdkResponse {
    public enable?: boolean;
    private 'max_scaling_amount'?: number;
    private 'single_expansion_count'?: number;
    private 'scaling_policy_by_session'?: ScalingPolicyBySession;
    public constructor() { 
        super();
    }
    public withEnable(enable: boolean): ShowScalingPolicyResponse {
        this['enable'] = enable;
        return this;
    }
    public withMaxScalingAmount(maxScalingAmount: number): ShowScalingPolicyResponse {
        this['max_scaling_amount'] = maxScalingAmount;
        return this;
    }
    public set maxScalingAmount(maxScalingAmount: number  | undefined) {
        this['max_scaling_amount'] = maxScalingAmount;
    }
    public get maxScalingAmount(): number | undefined {
        return this['max_scaling_amount'];
    }
    public withSingleExpansionCount(singleExpansionCount: number): ShowScalingPolicyResponse {
        this['single_expansion_count'] = singleExpansionCount;
        return this;
    }
    public set singleExpansionCount(singleExpansionCount: number  | undefined) {
        this['single_expansion_count'] = singleExpansionCount;
    }
    public get singleExpansionCount(): number | undefined {
        return this['single_expansion_count'];
    }
    public withScalingPolicyBySession(scalingPolicyBySession: ScalingPolicyBySession): ShowScalingPolicyResponse {
        this['scaling_policy_by_session'] = scalingPolicyBySession;
        return this;
    }
    public set scalingPolicyBySession(scalingPolicyBySession: ScalingPolicyBySession  | undefined) {
        this['scaling_policy_by_session'] = scalingPolicyBySession;
    }
    public get scalingPolicyBySession(): ScalingPolicyBySession | undefined {
        return this['scaling_policy_by_session'];
    }
}
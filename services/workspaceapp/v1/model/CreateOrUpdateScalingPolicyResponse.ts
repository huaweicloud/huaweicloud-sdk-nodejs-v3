import { ScalingPolicyByResource } from './ScalingPolicyByResource';
import { ScalingPolicyBySession } from './ScalingPolicyBySession';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOrUpdateScalingPolicyResponse extends SdkResponse {
    public enable?: boolean;
    private 'max_scaling_amount'?: number;
    private 'single_expansion_count'?: number;
    private 'scaling_policy_by_session'?: ScalingPolicyBySession;
    private 'scaling_policy_by_resource'?: ScalingPolicyByResource;
    public constructor() { 
        super();
    }
    public withEnable(enable: boolean): CreateOrUpdateScalingPolicyResponse {
        this['enable'] = enable;
        return this;
    }
    public withMaxScalingAmount(maxScalingAmount: number): CreateOrUpdateScalingPolicyResponse {
        this['max_scaling_amount'] = maxScalingAmount;
        return this;
    }
    public set maxScalingAmount(maxScalingAmount: number  | undefined) {
        this['max_scaling_amount'] = maxScalingAmount;
    }
    public get maxScalingAmount(): number | undefined {
        return this['max_scaling_amount'];
    }
    public withSingleExpansionCount(singleExpansionCount: number): CreateOrUpdateScalingPolicyResponse {
        this['single_expansion_count'] = singleExpansionCount;
        return this;
    }
    public set singleExpansionCount(singleExpansionCount: number  | undefined) {
        this['single_expansion_count'] = singleExpansionCount;
    }
    public get singleExpansionCount(): number | undefined {
        return this['single_expansion_count'];
    }
    public withScalingPolicyBySession(scalingPolicyBySession: ScalingPolicyBySession): CreateOrUpdateScalingPolicyResponse {
        this['scaling_policy_by_session'] = scalingPolicyBySession;
        return this;
    }
    public set scalingPolicyBySession(scalingPolicyBySession: ScalingPolicyBySession  | undefined) {
        this['scaling_policy_by_session'] = scalingPolicyBySession;
    }
    public get scalingPolicyBySession(): ScalingPolicyBySession | undefined {
        return this['scaling_policy_by_session'];
    }
    public withScalingPolicyByResource(scalingPolicyByResource: ScalingPolicyByResource): CreateOrUpdateScalingPolicyResponse {
        this['scaling_policy_by_resource'] = scalingPolicyByResource;
        return this;
    }
    public set scalingPolicyByResource(scalingPolicyByResource: ScalingPolicyByResource  | undefined) {
        this['scaling_policy_by_resource'] = scalingPolicyByResource;
    }
    public get scalingPolicyByResource(): ScalingPolicyByResource | undefined {
        return this['scaling_policy_by_resource'];
    }
}
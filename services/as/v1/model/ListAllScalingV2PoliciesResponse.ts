import { ScalingAllPolicyDetail } from './ScalingAllPolicyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllScalingV2PoliciesResponse extends SdkResponse {
    private 'total_number'?: number;
    private 'start_number'?: number;
    public limit?: number;
    private 'scaling_policies'?: Array<ScalingAllPolicyDetail>;
    public constructor() { 
        super();
    }
    public withTotalNumber(totalNumber: number): ListAllScalingV2PoliciesResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withStartNumber(startNumber: number): ListAllScalingV2PoliciesResponse {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListAllScalingV2PoliciesResponse {
        this['limit'] = limit;
        return this;
    }
    public withScalingPolicies(scalingPolicies: Array<ScalingAllPolicyDetail>): ListAllScalingV2PoliciesResponse {
        this['scaling_policies'] = scalingPolicies;
        return this;
    }
    public set scalingPolicies(scalingPolicies: Array<ScalingAllPolicyDetail>  | undefined) {
        this['scaling_policies'] = scalingPolicies;
    }
    public get scalingPolicies(): Array<ScalingAllPolicyDetail> | undefined {
        return this['scaling_policies'];
    }
}
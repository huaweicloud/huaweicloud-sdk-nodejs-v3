import { ScalingV1PolicyDetail } from './ScalingV1PolicyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScalingPoliciesResponse extends SdkResponse {
    private 'total_number'?: number;
    private 'start_number'?: number;
    public limit?: number;
    private 'scaling_policies'?: Array<ScalingV1PolicyDetail>;
    public constructor() { 
        super();
    }
    public withTotalNumber(totalNumber: number): ListScalingPoliciesResponse {
        this['total_number'] = totalNumber;
        return this;
    }
    public set totalNumber(totalNumber: number  | undefined) {
        this['total_number'] = totalNumber;
    }
    public get totalNumber(): number | undefined {
        return this['total_number'];
    }
    public withStartNumber(startNumber: number): ListScalingPoliciesResponse {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingPoliciesResponse {
        this['limit'] = limit;
        return this;
    }
    public withScalingPolicies(scalingPolicies: Array<ScalingV1PolicyDetail>): ListScalingPoliciesResponse {
        this['scaling_policies'] = scalingPolicies;
        return this;
    }
    public set scalingPolicies(scalingPolicies: Array<ScalingV1PolicyDetail>  | undefined) {
        this['scaling_policies'] = scalingPolicies;
    }
    public get scalingPolicies(): Array<ScalingV1PolicyDetail> | undefined {
        return this['scaling_policies'];
    }
}
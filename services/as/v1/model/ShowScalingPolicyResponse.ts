import { ScalingV1PolicyDetail } from './ScalingV1PolicyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScalingPolicyResponse extends SdkResponse {
    private 'scaling_policy'?: ScalingV1PolicyDetail;
    public constructor() { 
        super();
    }
    public withScalingPolicy(scalingPolicy: ScalingV1PolicyDetail): ShowScalingPolicyResponse {
        this['scaling_policy'] = scalingPolicy;
        return this;
    }
    public set scalingPolicy(scalingPolicy: ScalingV1PolicyDetail  | undefined) {
        this['scaling_policy'] = scalingPolicy;
    }
    public get scalingPolicy(): ScalingV1PolicyDetail | undefined {
        return this['scaling_policy'];
    }
}
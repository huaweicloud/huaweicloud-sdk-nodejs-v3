import { ScalingV2PolicyDetail } from './ScalingV2PolicyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScalingV2PolicyResponse extends SdkResponse {
    private 'scaling_policy'?: ScalingV2PolicyDetail;
    public constructor() { 
        super();
    }
    public withScalingPolicy(scalingPolicy: ScalingV2PolicyDetail): ShowScalingV2PolicyResponse {
        this['scaling_policy'] = scalingPolicy;
        return this;
    }
    public set scalingPolicy(scalingPolicy: ScalingV2PolicyDetail  | undefined) {
        this['scaling_policy'] = scalingPolicy;
    }
    public get scalingPolicy(): ScalingV2PolicyDetail | undefined {
        return this['scaling_policy'];
    }
}
import { ScalingGroups } from './ScalingGroups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScalingGroupResponse extends SdkResponse {
    private 'scaling_group'?: ScalingGroups;
    public constructor() { 
        super();
    }
    public withScalingGroup(scalingGroup: ScalingGroups): ShowScalingGroupResponse {
        this['scaling_group'] = scalingGroup;
        return this;
    }
    public set scalingGroup(scalingGroup: ScalingGroups  | undefined) {
        this['scaling_group'] = scalingGroup;
    }
    public get scalingGroup(): ScalingGroups | undefined {
        return this['scaling_group'];
    }
}
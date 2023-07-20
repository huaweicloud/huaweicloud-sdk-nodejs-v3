
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateScalingGroupResponse extends SdkResponse {
    private 'scaling_group_id'?: string;
    public constructor() { 
        super();
    }
    public withScalingGroupId(scalingGroupId: string): UpdateScalingGroupResponse {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
}
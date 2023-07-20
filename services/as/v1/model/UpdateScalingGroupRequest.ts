import { UpdateScalingGroupOption } from './UpdateScalingGroupOption';


export class UpdateScalingGroupRequest {
    private 'scaling_group_id'?: string;
    public body?: UpdateScalingGroupOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): UpdateScalingGroupRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: UpdateScalingGroupOption): UpdateScalingGroupRequest {
        this['body'] = body;
        return this;
    }
}
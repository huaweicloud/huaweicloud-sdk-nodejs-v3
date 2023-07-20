import { PauseScalingGroupOption } from './PauseScalingGroupOption';


export class PauseScalingGroupRequest {
    private 'scaling_group_id'?: string;
    public body?: PauseScalingGroupOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): PauseScalingGroupRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: PauseScalingGroupOption): PauseScalingGroupRequest {
        this['body'] = body;
        return this;
    }
}
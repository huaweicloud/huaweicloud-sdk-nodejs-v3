import { ResumeScalingGroupOption } from './ResumeScalingGroupOption';


export class ResumeScalingGroupRequest {
    private 'scaling_group_id'?: string;
    public body?: ResumeScalingGroupOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): ResumeScalingGroupRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: ResumeScalingGroupOption): ResumeScalingGroupRequest {
        this['body'] = body;
        return this;
    }
}
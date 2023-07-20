import { CreateScheduledTaskOption } from './CreateScheduledTaskOption';


export class CreateGroupScheduledTaskRequest {
    private 'scaling_group_id'?: string;
    public body?: CreateScheduledTaskOption;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): CreateGroupScheduledTaskRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withBody(body: CreateScheduledTaskOption): CreateGroupScheduledTaskRequest {
        this['body'] = body;
        return this;
    }
}
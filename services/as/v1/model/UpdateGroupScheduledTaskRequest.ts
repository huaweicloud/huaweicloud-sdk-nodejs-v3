import { UpdateScheduledTaskOption } from './UpdateScheduledTaskOption';


export class UpdateGroupScheduledTaskRequest {
    private 'scaling_group_id'?: string;
    private 'scheduled_task_id'?: string;
    public body?: UpdateScheduledTaskOption;
    public constructor(scalingGroupId?: string, scheduledTaskId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
        this['scheduled_task_id'] = scheduledTaskId;
    }
    public withScalingGroupId(scalingGroupId: string): UpdateGroupScheduledTaskRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withScheduledTaskId(scheduledTaskId: string): UpdateGroupScheduledTaskRequest {
        this['scheduled_task_id'] = scheduledTaskId;
        return this;
    }
    public set scheduledTaskId(scheduledTaskId: string  | undefined) {
        this['scheduled_task_id'] = scheduledTaskId;
    }
    public get scheduledTaskId(): string | undefined {
        return this['scheduled_task_id'];
    }
    public withBody(body: UpdateScheduledTaskOption): UpdateGroupScheduledTaskRequest {
        this['body'] = body;
        return this;
    }
}
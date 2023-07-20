

export class DeleteGroupScheduledTaskRequest {
    private 'scaling_group_id'?: string;
    private 'scheduled_task_id'?: string;
    public constructor(scalingGroupId?: string, scheduledTaskId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
        this['scheduled_task_id'] = scheduledTaskId;
    }
    public withScalingGroupId(scalingGroupId: string): DeleteGroupScheduledTaskRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withScheduledTaskId(scheduledTaskId: string): DeleteGroupScheduledTaskRequest {
        this['scheduled_task_id'] = scheduledTaskId;
        return this;
    }
    public set scheduledTaskId(scheduledTaskId: string  | undefined) {
        this['scheduled_task_id'] = scheduledTaskId;
    }
    public get scheduledTaskId(): string | undefined {
        return this['scheduled_task_id'];
    }
}
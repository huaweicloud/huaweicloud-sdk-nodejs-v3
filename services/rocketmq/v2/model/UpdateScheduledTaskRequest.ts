

export class UpdateScheduledTaskRequest {
    private 'instance_id'?: string;
    private 'task_id'?: string;
    private 'execute_at'?: string;
    public status?: string;
    public constructor(instanceId?: string, taskId?: string) { 
        this['instance_id'] = instanceId;
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): UpdateScheduledTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskId(taskId: string): UpdateScheduledTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withExecuteAt(executeAt: string): UpdateScheduledTaskRequest {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: string  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): string | undefined {
        return this['execute_at'];
    }
    public withStatus(status: string): UpdateScheduledTaskRequest {
        this['status'] = status;
        return this;
    }
}
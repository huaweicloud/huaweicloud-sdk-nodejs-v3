

export class DeleteBackgroundTaskRequest {
    private 'instance_id': string | undefined;
    private 'task_id': string | undefined;
    public constructor(instanceId?: any, taskId?: any) { 
        this['instance_id'] = instanceId;
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): DeleteBackgroundTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTaskId(taskId: string): DeleteBackgroundTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
}
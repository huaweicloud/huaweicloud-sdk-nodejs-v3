

export class StopKillProcessTaskRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'task_id'?: string;
    public constructor(instanceId?: string, taskId?: string) { 
        this['instance_id'] = instanceId;
        this['task_id'] = taskId;
    }
    public withXLanguage(xLanguage: string): StopKillProcessTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): StopKillProcessTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskId(taskId: string): StopKillProcessTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}
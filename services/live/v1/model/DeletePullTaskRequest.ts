

export class DeletePullTaskRequest {
    public region?: string;
    private 'task_id'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withRegion(region: string): DeletePullTaskRequest {
        this['region'] = region;
        return this;
    }
    public withTaskId(taskId: string): DeletePullTaskRequest {
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


export class CommandParam {
    private 'task_id'?: string;
    public bucket?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): CommandParam {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBucket(bucket: string): CommandParam {
        this['bucket'] = bucket;
        return this;
    }
}
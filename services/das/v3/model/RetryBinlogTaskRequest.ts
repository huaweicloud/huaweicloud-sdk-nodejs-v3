

export class RetryBinlogTaskRequest {
    private 'connection_id'?: string;
    private 'task_id'?: number;
    public constructor(connectionId?: string, taskId?: number) { 
        this['connection_id'] = connectionId;
        this['task_id'] = taskId;
    }
    public withConnectionId(connectionId: string): RetryBinlogTaskRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withTaskId(taskId: number): RetryBinlogTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
}
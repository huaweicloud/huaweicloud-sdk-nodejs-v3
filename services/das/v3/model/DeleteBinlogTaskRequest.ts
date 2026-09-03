

export class DeleteBinlogTaskRequest {
    private 'connection_id'?: string;
    private 'task_id'?: string;
    public constructor(connectionId?: string, taskId?: string) { 
        this['connection_id'] = connectionId;
        this['task_id'] = taskId;
    }
    public withConnectionId(connectionId: string): DeleteBinlogTaskRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withTaskId(taskId: string): DeleteBinlogTaskRequest {
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
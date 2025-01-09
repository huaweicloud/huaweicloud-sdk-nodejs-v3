

export class RetryScriptExecutionReq {
    private 'record_id'?: string;
    private 'task_id'?: string;
    public constructor() { 
    }
    public withRecordId(recordId: string): RetryScriptExecutionReq {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withTaskId(taskId: string): RetryScriptExecutionReq {
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
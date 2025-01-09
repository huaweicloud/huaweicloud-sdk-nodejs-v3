

export class ListScheduledTasksRecordsRequest {
    private 'task_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ListScheduledTasksRecordsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOffset(offset: number): ListScheduledTasksRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduledTasksRecordsRequest {
        this['limit'] = limit;
        return this;
    }
}
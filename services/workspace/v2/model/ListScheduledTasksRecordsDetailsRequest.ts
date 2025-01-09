

export class ListScheduledTasksRecordsDetailsRequest {
    private 'task_id'?: string;
    private 'record_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(taskId?: string, recordId?: string, offset?: number, limit?: number) { 
        this['task_id'] = taskId;
        this['record_id'] = recordId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withTaskId(taskId: string): ListScheduledTasksRecordsDetailsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withRecordId(recordId: string): ListScheduledTasksRecordsDetailsRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withOffset(offset: number): ListScheduledTasksRecordsDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduledTasksRecordsDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}
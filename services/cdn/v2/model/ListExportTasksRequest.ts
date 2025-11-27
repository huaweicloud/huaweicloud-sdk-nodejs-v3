

export class ListExportTasksRequest {
    public limit?: number;
    public offset?: number;
    private 'task_id'?: string;
    private 'task_name'?: string;
    public constructor(taskId?: string, taskName?: string) { 
        this['task_id'] = taskId;
        this['task_name'] = taskName;
    }
    public withLimit(limit: number): ListExportTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListExportTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withTaskId(taskId: string): ListExportTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ListExportTasksRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
}
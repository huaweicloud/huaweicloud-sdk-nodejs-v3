

export class ListScheduleTasksRequest {
    public offset?: number;
    public limit?: number;
    private 'task_name'?: string;
    private 'task_type'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListScheduleTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduleTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withTaskName(taskName: string): ListScheduleTasksRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskType(taskType: string): ListScheduleTasksRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
}
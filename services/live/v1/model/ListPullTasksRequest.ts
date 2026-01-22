

export class ListPullTasksRequest {
    public region?: string;
    public offset?: number;
    public limit?: number;
    private 'task_id'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ListPullTasksRequest {
        this['region'] = region;
        return this;
    }
    public withOffset(offset: number): ListPullTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPullTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withTaskId(taskId: string): ListPullTasksRequest {
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
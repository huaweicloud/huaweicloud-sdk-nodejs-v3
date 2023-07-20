

export class ListBatchTasksRequest {
    private 'Instance-Id'?: string;
    private 'app_id'?: string;
    private 'task_type'?: string;
    public status?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor(taskType?: string) { 
        this['task_type'] = taskType;
    }
    public withInstanceId(instanceId: string): ListBatchTasksRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): ListBatchTasksRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withTaskType(taskType: string): ListBatchTasksRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withStatus(status: string): ListBatchTasksRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListBatchTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBatchTasksRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListBatchTasksRequest {
        this['offset'] = offset;
        return this;
    }
}
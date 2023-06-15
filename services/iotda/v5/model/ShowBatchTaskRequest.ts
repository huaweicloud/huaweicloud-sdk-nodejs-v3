

export class ShowBatchTaskRequest {
    private 'Instance-Id'?: string | undefined;
    private 'task_id': string | undefined;
    private 'task_detail_status'?: string | undefined;
    public target?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): ShowBatchTaskRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withTaskId(taskId: string): ShowBatchTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withTaskDetailStatus(taskDetailStatus: string): ShowBatchTaskRequest {
        this['task_detail_status'] = taskDetailStatus;
        return this;
    }
    public set taskDetailStatus(taskDetailStatus: string | undefined) {
        this['task_detail_status'] = taskDetailStatus;
    }
    public get taskDetailStatus() {
        return this['task_detail_status'];
    }
    public withTarget(target: string): ShowBatchTaskRequest {
        this['target'] = target;
        return this;
    }
    public withLimit(limit: number): ShowBatchTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowBatchTaskRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ShowBatchTaskRequest {
        this['offset'] = offset;
        return this;
    }
}
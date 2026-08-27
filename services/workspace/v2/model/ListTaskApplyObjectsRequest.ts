

export class ListTaskApplyObjectsRequest {
    private 'task_id'?: string;
    private 'object_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ListTaskApplyObjectsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withObjectName(objectName: string): ListTaskApplyObjectsRequest {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withOffset(offset: number): ListTaskApplyObjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTaskApplyObjectsRequest {
        this['limit'] = limit;
        return this;
    }
}
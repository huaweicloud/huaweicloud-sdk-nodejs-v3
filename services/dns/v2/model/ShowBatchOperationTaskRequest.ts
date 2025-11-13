

export class ShowBatchOperationTaskRequest {
    private 'task_id'?: string;
    private 'error_item_limit'?: number;
    private 'error_item_offset'?: number;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ShowBatchOperationTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withErrorItemLimit(errorItemLimit: number): ShowBatchOperationTaskRequest {
        this['error_item_limit'] = errorItemLimit;
        return this;
    }
    public set errorItemLimit(errorItemLimit: number  | undefined) {
        this['error_item_limit'] = errorItemLimit;
    }
    public get errorItemLimit(): number | undefined {
        return this['error_item_limit'];
    }
    public withErrorItemOffset(errorItemOffset: number): ShowBatchOperationTaskRequest {
        this['error_item_offset'] = errorItemOffset;
        return this;
    }
    public set errorItemOffset(errorItemOffset: number  | undefined) {
        this['error_item_offset'] = errorItemOffset;
    }
    public get errorItemOffset(): number | undefined {
        return this['error_item_offset'];
    }
}
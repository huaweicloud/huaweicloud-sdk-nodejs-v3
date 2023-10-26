

export class DeleteFsTaskRequest {
    private 'share_id'?: string;
    public feature?: string;
    private 'task_id'?: string;
    public constructor(shareId?: string, feature?: string, taskId?: string) { 
        this['share_id'] = shareId;
        this['feature'] = feature;
        this['task_id'] = taskId;
    }
    public withShareId(shareId: string): DeleteFsTaskRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withFeature(feature: string): DeleteFsTaskRequest {
        this['feature'] = feature;
        return this;
    }
    public withTaskId(taskId: string): DeleteFsTaskRequest {
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


export class DeleteHpcCacheTaskRequest {
    private 'share_id'?: string;
    private 'task_id'?: string;
    public constructor(shareId?: string, taskId?: string) { 
        this['share_id'] = shareId;
        this['task_id'] = taskId;
    }
    public withShareId(shareId: string): DeleteHpcCacheTaskRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withTaskId(taskId: string): DeleteHpcCacheTaskRequest {
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
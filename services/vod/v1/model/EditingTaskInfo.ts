

export class EditingTaskInfo {
    private 'task_id'?: string;
    private 'asset_id'?: string;
    public status?: string;
    public progress?: number;
    private 'create_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): EditingTaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withAssetId(assetId: string): EditingTaskInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withStatus(status: string): EditingTaskInfo {
        this['status'] = status;
        return this;
    }
    public withProgress(progress: number): EditingTaskInfo {
        this['progress'] = progress;
        return this;
    }
    public withCreateTime(createTime: string): EditingTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): EditingTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}
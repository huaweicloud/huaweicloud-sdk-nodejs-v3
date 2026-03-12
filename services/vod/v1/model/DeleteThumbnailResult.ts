

export class DeleteThumbnailResult {
    private 'asset_id'?: string;
    private 'task_id'?: string;
    public status?: DeleteThumbnailResultStatusEnum | string;
    public constructor() { 
    }
    public withAssetId(assetId: string): DeleteThumbnailResult {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withTaskId(taskId: string): DeleteThumbnailResult {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: DeleteThumbnailResultStatusEnum | string): DeleteThumbnailResult {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteThumbnailResultStatusEnum {
    FAILED = 'FAILED',
    DELETED = 'DELETED',
    UNKNOW = 'UNKNOW'
}

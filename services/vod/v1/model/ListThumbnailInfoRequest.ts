

export class ListThumbnailInfoRequest {
    private 'X-Sdk-Date'?: string;
    private 'asset_id'?: string;
    private 'task_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ListThumbnailInfoRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: string): ListThumbnailInfoRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withTaskId(taskId: string): ListThumbnailInfoRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOffset(offset: number): ListThumbnailInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListThumbnailInfoRequest {
        this['limit'] = limit;
        return this;
    }
}
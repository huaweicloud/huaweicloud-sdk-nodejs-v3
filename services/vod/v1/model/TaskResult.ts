

export class TaskResult {
    private 'asset_id'?: string;
    public status?: string;
    public constructor() { 
    }
    public withAssetId(assetId: string): TaskResult {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withStatus(status: string): TaskResult {
        this['status'] = status;
        return this;
    }
}
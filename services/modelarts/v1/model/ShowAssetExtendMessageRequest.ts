

export class ShowAssetExtendMessageRequest {
    private 'asset_id'?: string;
    private 'workspace_id'?: string;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): ShowAssetExtendMessageRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withWorkspaceId(workspaceId: string): ShowAssetExtendMessageRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}
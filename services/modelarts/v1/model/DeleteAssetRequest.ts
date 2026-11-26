

export class DeleteAssetRequest {
    private 'asset_id'?: string;
    private 'workspace_id'?: string;
    private 'force_delete'?: boolean;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): DeleteAssetRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withWorkspaceId(workspaceId: string): DeleteAssetRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withForceDelete(forceDelete: boolean): DeleteAssetRequest {
        this['force_delete'] = forceDelete;
        return this;
    }
    public set forceDelete(forceDelete: boolean  | undefined) {
        this['force_delete'] = forceDelete;
    }
    public get forceDelete(): boolean | undefined {
        return this['force_delete'];
    }
}
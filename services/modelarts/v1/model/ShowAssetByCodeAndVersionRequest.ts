

export class ShowAssetByCodeAndVersionRequest {
    private 'asset_code'?: string;
    private 'asset_version'?: string;
    private 'workspace_id'?: string;
    private 'asset_type'?: string;
    public constructor(assetCode?: string, assetVersion?: string) { 
        this['asset_code'] = assetCode;
        this['asset_version'] = assetVersion;
    }
    public withAssetCode(assetCode: string): ShowAssetByCodeAndVersionRequest {
        this['asset_code'] = assetCode;
        return this;
    }
    public set assetCode(assetCode: string  | undefined) {
        this['asset_code'] = assetCode;
    }
    public get assetCode(): string | undefined {
        return this['asset_code'];
    }
    public withAssetVersion(assetVersion: string): ShowAssetByCodeAndVersionRequest {
        this['asset_version'] = assetVersion;
        return this;
    }
    public set assetVersion(assetVersion: string  | undefined) {
        this['asset_version'] = assetVersion;
    }
    public get assetVersion(): string | undefined {
        return this['asset_version'];
    }
    public withWorkspaceId(workspaceId: string): ShowAssetByCodeAndVersionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAssetType(assetType: string): ShowAssetByCodeAndVersionRequest {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): string | undefined {
        return this['asset_type'];
    }
}


export class ListAssetFileRequest {
    private 'workspace_id'?: string;
    private 'asset_id'?: string;
    public prefix?: string;
    private 'max_keys'?: number;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withWorkspaceId(workspaceId: string): ListAssetFileRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAssetId(assetId: string): ListAssetFileRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withPrefix(prefix: string): ListAssetFileRequest {
        this['prefix'] = prefix;
        return this;
    }
    public withMaxKeys(maxKeys: number): ListAssetFileRequest {
        this['max_keys'] = maxKeys;
        return this;
    }
    public set maxKeys(maxKeys: number  | undefined) {
        this['max_keys'] = maxKeys;
    }
    public get maxKeys(): number | undefined {
        return this['max_keys'];
    }
}
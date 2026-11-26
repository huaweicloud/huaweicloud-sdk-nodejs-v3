

export class ShowAssetResourceRequest {
    private 'asset_id'?: string;
    private 'workspace_id'?: string;
    private 'resource_name'?: string;
    private 'check_locale'?: boolean;
    public constructor(assetId?: string, resourceName?: string) { 
        this['asset_id'] = assetId;
        this['resource_name'] = resourceName;
    }
    public withAssetId(assetId: string): ShowAssetResourceRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withWorkspaceId(workspaceId: string): ShowAssetResourceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withResourceName(resourceName: string): ShowAssetResourceRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withCheckLocale(checkLocale: boolean): ShowAssetResourceRequest {
        this['check_locale'] = checkLocale;
        return this;
    }
    public set checkLocale(checkLocale: boolean  | undefined) {
        this['check_locale'] = checkLocale;
    }
    public get checkLocale(): boolean | undefined {
        return this['check_locale'];
    }
}
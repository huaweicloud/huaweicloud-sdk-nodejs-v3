

export class AssetExportParam {
    private 'project_id'?: string;
    private 'asset_id'?: string;
    private 'parent_id'?: string;
    private 'factor_ids'?: Array<string>;
    public constructor() { 
    }
    public withProjectId(projectId: string): AssetExportParam {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAssetId(assetId: string): AssetExportParam {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withParentId(parentId: string): AssetExportParam {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withFactorIds(factorIds: Array<string>): AssetExportParam {
        this['factor_ids'] = factorIds;
        return this;
    }
    public set factorIds(factorIds: Array<string>  | undefined) {
        this['factor_ids'] = factorIds;
    }
    public get factorIds(): Array<string> | undefined {
        return this['factor_ids'];
    }
}


export class ListServerlessAssetDetailRequest {
    private 'enterprise_project_id'?: string;
    public category?: string;
    private 'asset_id'?: string;
    public constructor(category?: string, assetId?: string) { 
        this['category'] = category;
        this['asset_id'] = assetId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListServerlessAssetDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCategory(category: string): ListServerlessAssetDetailRequest {
        this['category'] = category;
        return this;
    }
    public withAssetId(assetId: string): ListServerlessAssetDetailRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
}
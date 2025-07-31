

export class ListGlobalAssetScanTaskRequest {
    private 'enterprise_project_id'?: string;
    public category?: string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListGlobalAssetScanTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCategory(category: string): ListGlobalAssetScanTaskRequest {
        this['category'] = category;
        return this;
    }
}
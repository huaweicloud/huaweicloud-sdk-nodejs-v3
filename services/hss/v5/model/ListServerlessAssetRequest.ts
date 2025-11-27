

export class ListServerlessAssetRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public category?: string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListServerlessAssetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListServerlessAssetRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListServerlessAssetRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListServerlessAssetRequest {
        this['category'] = category;
        return this;
    }
}
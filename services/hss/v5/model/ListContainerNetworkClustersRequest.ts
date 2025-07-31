

export class ListContainerNetworkClustersRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListContainerNetworkClustersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListContainerNetworkClustersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListContainerNetworkClustersRequest {
        this['offset'] = offset;
        return this;
    }
}
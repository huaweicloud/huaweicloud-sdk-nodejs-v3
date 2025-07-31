

export class ListMultiCloudClustersRequest {
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListMultiCloudClustersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): ListMultiCloudClustersRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ListMultiCloudClustersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMultiCloudClustersRequest {
        this['limit'] = limit;
        return this;
    }
}
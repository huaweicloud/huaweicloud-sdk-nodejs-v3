

export class ListContainerNetworkPolicyRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'cluster_id'?: string;
    public namespace?: string;
    public keyword?: string;
    public constructor(limit?: number, offset?: number, clusterId?: string) { 
        this['limit'] = limit;
        this['offset'] = offset;
        this['cluster_id'] = clusterId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListContainerNetworkPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListContainerNetworkPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListContainerNetworkPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withClusterId(clusterId: string): ListContainerNetworkPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): ListContainerNetworkPolicyRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withKeyword(keyword: string): ListContainerNetworkPolicyRequest {
        this['keyword'] = keyword;
        return this;
    }
}


export class ListClusterProtectionPolicyRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'cluster_id'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListClusterProtectionPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListClusterProtectionPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListClusterProtectionPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withClusterId(clusterId: string): ListClusterProtectionPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}
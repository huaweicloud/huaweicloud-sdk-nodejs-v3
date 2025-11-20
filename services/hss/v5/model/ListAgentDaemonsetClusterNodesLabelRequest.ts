

export class ListAgentDaemonsetClusterNodesLabelRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'cluster_id'?: string;
    public type?: string;
    public constructor(clusterId?: string, type?: string) { 
        this['cluster_id'] = clusterId;
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAgentDaemonsetClusterNodesLabelRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAgentDaemonsetClusterNodesLabelRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAgentDaemonsetClusterNodesLabelRequest {
        this['limit'] = limit;
        return this;
    }
    public withClusterId(clusterId: string): ListAgentDaemonsetClusterNodesLabelRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withType(type: string): ListAgentDaemonsetClusterNodesLabelRequest {
        this['type'] = type;
        return this;
    }
}
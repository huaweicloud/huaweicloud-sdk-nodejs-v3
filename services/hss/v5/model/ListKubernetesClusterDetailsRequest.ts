

export class ListKubernetesClusterDetailsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'cluster_name'?: string;
    private 'load_agent_info'?: boolean;
    public scene?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListKubernetesClusterDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListKubernetesClusterDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListKubernetesClusterDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withClusterName(clusterName: string): ListKubernetesClusterDetailsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withLoadAgentInfo(loadAgentInfo: boolean): ListKubernetesClusterDetailsRequest {
        this['load_agent_info'] = loadAgentInfo;
        return this;
    }
    public set loadAgentInfo(loadAgentInfo: boolean  | undefined) {
        this['load_agent_info'] = loadAgentInfo;
    }
    public get loadAgentInfo(): boolean | undefined {
        return this['load_agent_info'];
    }
    public withScene(scene: string): ListKubernetesClusterDetailsRequest {
        this['scene'] = scene;
        return this;
    }
}
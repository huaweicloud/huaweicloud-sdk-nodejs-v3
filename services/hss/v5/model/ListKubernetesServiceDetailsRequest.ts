

export class ListKubernetesServiceDetailsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'cluster_name'?: string;
    public namespace?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListKubernetesServiceDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListKubernetesServiceDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListKubernetesServiceDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListKubernetesServiceDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withClusterName(clusterName: string): ListKubernetesServiceDetailsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withNamespace(namespace: string): ListKubernetesServiceDetailsRequest {
        this['namespace'] = namespace;
        return this;
    }
}
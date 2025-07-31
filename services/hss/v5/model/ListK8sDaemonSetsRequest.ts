

export class ListK8sDaemonSetsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    private 'daemonset_name'?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    public limit?: number;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListK8sDaemonSetsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListK8sDaemonSetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withDaemonsetName(daemonsetName: string): ListK8sDaemonSetsRequest {
        this['daemonset_name'] = daemonsetName;
        return this;
    }
    public set daemonsetName(daemonsetName: string  | undefined) {
        this['daemonset_name'] = daemonsetName;
    }
    public get daemonsetName(): string | undefined {
        return this['daemonset_name'];
    }
    public withNamespaceName(namespaceName: string): ListK8sDaemonSetsRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): ListK8sDaemonSetsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withLimit(limit: number): ListK8sDaemonSetsRequest {
        this['limit'] = limit;
        return this;
    }
}


export class ListK8sDeploymentsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    private 'deployment_name'?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    public limit?: number;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListK8sDeploymentsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListK8sDeploymentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withDeploymentName(deploymentName: string): ListK8sDeploymentsRequest {
        this['deployment_name'] = deploymentName;
        return this;
    }
    public set deploymentName(deploymentName: string  | undefined) {
        this['deployment_name'] = deploymentName;
    }
    public get deploymentName(): string | undefined {
        return this['deployment_name'];
    }
    public withNamespaceName(namespaceName: string): ListK8sDeploymentsRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): ListK8sDeploymentsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withLimit(limit: number): ListK8sDeploymentsRequest {
        this['limit'] = limit;
        return this;
    }
}
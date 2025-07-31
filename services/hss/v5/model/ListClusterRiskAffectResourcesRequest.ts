

export class ListClusterRiskAffectResourcesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'risk_id'?: string;
    private 'cluster_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    public namespace?: string;
    public constructor(riskId?: string) { 
        this['risk_id'] = riskId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListClusterRiskAffectResourcesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListClusterRiskAffectResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListClusterRiskAffectResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withRiskId(riskId: string): ListClusterRiskAffectResourcesRequest {
        this['risk_id'] = riskId;
        return this;
    }
    public set riskId(riskId: string  | undefined) {
        this['risk_id'] = riskId;
    }
    public get riskId(): string | undefined {
        return this['risk_id'];
    }
    public withClusterId(clusterId: string): ListClusterRiskAffectResourcesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withResourceName(resourceName: string): ListClusterRiskAffectResourcesRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ListClusterRiskAffectResourcesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withNamespace(namespace: string): ListClusterRiskAffectResourcesRequest {
        this['namespace'] = namespace;
        return this;
    }
}
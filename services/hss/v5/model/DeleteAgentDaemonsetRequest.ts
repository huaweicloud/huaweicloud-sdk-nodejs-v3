

export class DeleteAgentDaemonsetRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    private 'invoked_service'?: string;
    public constructor(region?: string, clusterId?: string) { 
        this['region'] = region;
        this['cluster_id'] = clusterId;
    }
    public withRegion(region: string): DeleteAgentDaemonsetRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteAgentDaemonsetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): DeleteAgentDaemonsetRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withInvokedService(invokedService: string): DeleteAgentDaemonsetRequest {
        this['invoked_service'] = invokedService;
        return this;
    }
    public set invokedService(invokedService: string  | undefined) {
        this['invoked_service'] = invokedService;
    }
    public get invokedService(): string | undefined {
        return this['invoked_service'];
    }
}
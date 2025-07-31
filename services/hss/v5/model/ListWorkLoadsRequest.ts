

export class ListWorkLoadsRequest {
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    public namespace?: string;
    private 'workload_type'?: string;
    public constructor(clusterId?: string, namespace?: string, workloadType?: string) { 
        this['cluster_id'] = clusterId;
        this['namespace'] = namespace;
        this['workload_type'] = workloadType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWorkLoadsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): ListWorkLoadsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): ListWorkLoadsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withWorkloadType(workloadType: string): ListWorkLoadsRequest {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): string | undefined {
        return this['workload_type'];
    }
}
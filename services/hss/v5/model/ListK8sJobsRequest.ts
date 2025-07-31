

export class ListK8sJobsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    private 'job_name'?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    public limit?: number;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListK8sJobsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListK8sJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withJobName(jobName: string): ListK8sJobsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withNamespaceName(namespaceName: string): ListK8sJobsRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): ListK8sJobsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withLimit(limit: number): ListK8sJobsRequest {
        this['limit'] = limit;
        return this;
    }
}
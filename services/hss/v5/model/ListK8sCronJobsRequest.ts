

export class ListK8sCronJobsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    private 'cronjob_name'?: string;
    private 'namespace_name'?: string;
    private 'cluster_name'?: string;
    public limit?: number;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListK8sCronJobsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListK8sCronJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withCronjobName(cronjobName: string): ListK8sCronJobsRequest {
        this['cronjob_name'] = cronjobName;
        return this;
    }
    public set cronjobName(cronjobName: string  | undefined) {
        this['cronjob_name'] = cronjobName;
    }
    public get cronjobName(): string | undefined {
        return this['cronjob_name'];
    }
    public withNamespaceName(namespaceName: string): ListK8sCronJobsRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withClusterName(clusterName: string): ListK8sCronJobsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withLimit(limit: number): ListK8sCronJobsRequest {
        this['limit'] = limit;
        return this;
    }
}
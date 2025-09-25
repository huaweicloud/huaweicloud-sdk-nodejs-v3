

export class ListSecurityCheckClusterReportsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_category'?: ListSecurityCheckClusterReportsRequestClusterCategoryEnum | string;
    public severity?: ListSecurityCheckClusterReportsRequestSeverityEnum | string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSecurityCheckClusterReportsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListSecurityCheckClusterReportsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSecurityCheckClusterReportsRequest {
        this['limit'] = limit;
        return this;
    }
    public withClusterName(clusterName: string): ListSecurityCheckClusterReportsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ListSecurityCheckClusterReportsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterCategory(clusterCategory: ListSecurityCheckClusterReportsRequestClusterCategoryEnum | string): ListSecurityCheckClusterReportsRequest {
        this['cluster_category'] = clusterCategory;
        return this;
    }
    public set clusterCategory(clusterCategory: ListSecurityCheckClusterReportsRequestClusterCategoryEnum | string  | undefined) {
        this['cluster_category'] = clusterCategory;
    }
    public get clusterCategory(): ListSecurityCheckClusterReportsRequestClusterCategoryEnum | string | undefined {
        return this['cluster_category'];
    }
    public withSeverity(severity: ListSecurityCheckClusterReportsRequestSeverityEnum | string): ListSecurityCheckClusterReportsRequest {
        this['severity'] = severity;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityCheckClusterReportsRequestClusterCategoryEnum {
    CCE = 'CCE',
    TURBO = 'Turbo'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityCheckClusterReportsRequestSeverityEnum {
    SECURITY = 'Security',
    INSECURITY = 'Insecurity'
}

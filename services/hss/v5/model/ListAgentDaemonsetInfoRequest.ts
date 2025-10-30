

export class ListAgentDaemonsetInfoRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public type?: string;
    private 'show_cluster_log_status'?: boolean;
    private 'access_status'?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withRegion(region: string): ListAgentDaemonsetInfoRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAgentDaemonsetInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ListAgentDaemonsetInfoRequest {
        this['type'] = type;
        return this;
    }
    public withShowClusterLogStatus(showClusterLogStatus: boolean): ListAgentDaemonsetInfoRequest {
        this['show_cluster_log_status'] = showClusterLogStatus;
        return this;
    }
    public set showClusterLogStatus(showClusterLogStatus: boolean  | undefined) {
        this['show_cluster_log_status'] = showClusterLogStatus;
    }
    public get showClusterLogStatus(): boolean | undefined {
        return this['show_cluster_log_status'];
    }
    public withAccessStatus(accessStatus: boolean): ListAgentDaemonsetInfoRequest {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: boolean  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): boolean | undefined {
        return this['access_status'];
    }
    public withOffset(offset: number): ListAgentDaemonsetInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAgentDaemonsetInfoRequest {
        this['limit'] = limit;
        return this;
    }
}
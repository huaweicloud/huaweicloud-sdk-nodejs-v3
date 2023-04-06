

export class ListHostOverviewRequest {
    private 'cluster_id'?: string | undefined;
    private 'instance_name'?: string | undefined;
    public limit: number;
    public offset: number;
    public constructor(limit?: any, offset?: any) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withClusterId(clusterId: string): ListHostOverviewRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withInstanceName(instanceName: string): ListHostOverviewRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName() {
        return this['instance_name'];
    }
    public withLimit(limit: number): ListHostOverviewRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHostOverviewRequest {
        this['offset'] = offset;
        return this;
    }
}
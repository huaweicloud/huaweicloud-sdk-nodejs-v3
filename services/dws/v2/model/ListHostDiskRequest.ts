

export class ListHostDiskRequest {
    private 'cluster_id'?: string;
    private 'instance_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withClusterId(clusterId: string): ListHostDiskRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withInstanceName(instanceName: string): ListHostDiskRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withLimit(limit: number): ListHostDiskRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHostDiskRequest {
        this['offset'] = offset;
        return this;
    }
}
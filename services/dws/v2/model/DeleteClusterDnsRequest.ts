

export class DeleteClusterDnsRequest {
    private 'cluster_id'?: string;
    public type?: string;
    public constructor(clusterId?: string, type?: string) { 
        this['cluster_id'] = clusterId;
        this['type'] = type;
    }
    public withClusterId(clusterId: string): DeleteClusterDnsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withType(type: string): DeleteClusterDnsRequest {
        this['type'] = type;
        return this;
    }
}
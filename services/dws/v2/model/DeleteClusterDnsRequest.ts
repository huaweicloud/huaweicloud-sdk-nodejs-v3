

export class DeleteClusterDnsRequest {
    private 'cluster_id': string | undefined;
    public type: string;
    public constructor(clusterId?: any, type?: any) { 
        this['cluster_id'] = clusterId;
        this['type'] = type;
    }
    public withClusterId(clusterId: string): DeleteClusterDnsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withType(type: string): DeleteClusterDnsRequest {
        this['type'] = type;
        return this;
    }
}
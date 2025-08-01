

export class MultiCloudClusterIdInfo {
    private 'cluster_id'?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): MultiCloudClusterIdInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}
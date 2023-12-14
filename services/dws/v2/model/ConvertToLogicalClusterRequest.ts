

export class ConvertToLogicalClusterRequest {
    private 'cluster_id'?: string;
    public name?: string;
    public constructor(clusterId?: string, name?: string) { 
        this['cluster_id'] = clusterId;
        this['name'] = name;
    }
    public withClusterId(clusterId: string): ConvertToLogicalClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withName(name: string): ConvertToLogicalClusterRequest {
        this['name'] = name;
        return this;
    }
}
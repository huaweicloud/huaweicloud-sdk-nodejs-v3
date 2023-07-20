

export class DeleteClusterTagRequest {
    private 'cluster_id'?: string;
    public key?: string;
    public constructor(clusterId?: string, key?: string) { 
        this['cluster_id'] = clusterId;
        this['key'] = key;
    }
    public withClusterId(clusterId: string): DeleteClusterTagRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withKey(key: string): DeleteClusterTagRequest {
        this['key'] = key;
        return this;
    }
}
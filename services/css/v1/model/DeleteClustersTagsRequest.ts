

export class DeleteClustersTagsRequest {
    private 'cluster_id'?: string;
    private 'resource_type'?: string;
    public key?: string;
    public constructor(clusterId?: string, resourceType?: string, key?: string) { 
        this['cluster_id'] = clusterId;
        this['resource_type'] = resourceType;
        this['key'] = key;
    }
    public withClusterId(clusterId: string): DeleteClustersTagsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withResourceType(resourceType: string): DeleteClustersTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withKey(key: string): DeleteClustersTagsRequest {
        this['key'] = key;
        return this;
    }
}
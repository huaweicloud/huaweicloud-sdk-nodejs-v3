

export class ShowClusterTagRequest {
    private 'cluster_id'?: string;
    private 'resource_type'?: string;
    public constructor(clusterId?: string, resourceType?: string) { 
        this['cluster_id'] = clusterId;
        this['resource_type'] = resourceType;
    }
    public withClusterId(clusterId: string): ShowClusterTagRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withResourceType(resourceType: string): ShowClusterTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}
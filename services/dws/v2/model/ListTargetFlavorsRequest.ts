

export class ListTargetFlavorsRequest {
    private 'flavor_id'?: string;
    private 'cluster_id'?: string;
    public constructor(flavorId?: string) { 
        this['flavor_id'] = flavorId;
    }
    public withFlavorId(flavorId: string): ListTargetFlavorsRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withClusterId(clusterId: string): ListTargetFlavorsRequest {
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
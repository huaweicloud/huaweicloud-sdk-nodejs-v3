

export class ShowClusterFlavorRequest {
    private 'cluster_id'?: string;
    public namespace?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ShowClusterFlavorRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): ShowClusterFlavorRequest {
        this['namespace'] = namespace;
        return this;
    }
}
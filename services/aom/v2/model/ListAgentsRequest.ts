

export class ListAgentsRequest {
    private 'cluster_id'?: string;
    public namespace?: string;
    public constructor(clusterId?: string, namespace?: string) { 
        this['cluster_id'] = clusterId;
        this['namespace'] = namespace;
    }
    public withClusterId(clusterId: string): ListAgentsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): ListAgentsRequest {
        this['namespace'] = namespace;
        return this;
    }
}
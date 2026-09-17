

export class ShowClusterNodeRequest {
    private 'cluster_id'?: string;
    private 'node_name'?: string;
    public constructor(clusterId?: string, nodeName?: string) { 
        this['cluster_id'] = clusterId;
        this['node_name'] = nodeName;
    }
    public withClusterId(clusterId: string): ShowClusterNodeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNodeName(nodeName: string): ShowClusterNodeRequest {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
}
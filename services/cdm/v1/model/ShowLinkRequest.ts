

export class ShowLinkRequest {
    private 'cluster_id'?: string;
    private 'link_name'?: string;
    public constructor(clusterId?: string, linkName?: string) { 
        this['cluster_id'] = clusterId;
        this['link_name'] = linkName;
    }
    public withClusterId(clusterId: string): ShowLinkRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withLinkName(linkName: string): ShowLinkRequest {
        this['link_name'] = linkName;
        return this;
    }
    public set linkName(linkName: string  | undefined) {
        this['link_name'] = linkName;
    }
    public get linkName(): string | undefined {
        return this['link_name'];
    }
}
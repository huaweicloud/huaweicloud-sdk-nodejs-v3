

export class Resources {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public images?: string;
    public labels?: string;
    public namespace?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): Resources {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): Resources {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withImages(images: string): Resources {
        this['images'] = images;
        return this;
    }
    public withLabels(labels: string): Resources {
        this['labels'] = labels;
        return this;
    }
    public withNamespace(namespace: string): Resources {
        this['namespace'] = namespace;
        return this;
    }
}


export class PolicyProtectScope {
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    public images?: Array<string>;
    public namespaces?: Array<string>;
    public labels?: Array<string>;
    public constructor(clusterName?: string, clusterId?: string, images?: Array<string>, namespaces?: Array<string>, labels?: Array<string>) { 
        this['cluster_name'] = clusterName;
        this['cluster_id'] = clusterId;
        this['images'] = images;
        this['namespaces'] = namespaces;
        this['labels'] = labels;
    }
    public withClusterName(clusterName: string): PolicyProtectScope {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): PolicyProtectScope {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withImages(images: Array<string>): PolicyProtectScope {
        this['images'] = images;
        return this;
    }
    public withNamespaces(namespaces: Array<string>): PolicyProtectScope {
        this['namespaces'] = namespaces;
        return this;
    }
    public withLabels(labels: Array<string>): PolicyProtectScope {
        this['labels'] = labels;
        return this;
    }
}
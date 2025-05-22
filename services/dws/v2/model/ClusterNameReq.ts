

export class ClusterNameReq {
    private 'cluster_name'?: string;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ClusterNameReq {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
}
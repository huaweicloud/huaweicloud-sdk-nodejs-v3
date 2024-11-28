

export class CCEClusterInfoListRequestBodyClusterInfoList {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public constructor(clusterId?: string, clusterName?: string) { 
        this['cluster_id'] = clusterId;
        this['cluster_name'] = clusterName;
    }
    public withClusterId(clusterId: string): CCEClusterInfoListRequestBodyClusterInfoList {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): CCEClusterInfoListRequestBodyClusterInfoList {
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
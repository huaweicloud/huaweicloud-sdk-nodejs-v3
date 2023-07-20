

export class UpdateClusterReq {
    private 'cluster_name'?: string;
    public constructor(clusterName?: string) { 
        this['cluster_name'] = clusterName;
    }
    public withClusterName(clusterName: string): UpdateClusterReq {
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
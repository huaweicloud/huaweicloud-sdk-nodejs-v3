

export class KerberosStatus {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public status?: boolean;
    public constructor() { 
    }
    public withClusterId(clusterId: string): KerberosStatus {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): KerberosStatus {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withStatus(status: boolean): KerberosStatus {
        this['status'] = status;
        return this;
    }
}
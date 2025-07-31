

export class ClusterItemResponseInfo {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_ns'?: Array<string>;
    private 'cluster_labels'?: Array<string>;
    private 'protect_status'?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): ClusterItemResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ClusterItemResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterNs(clusterNs: Array<string>): ClusterItemResponseInfo {
        this['cluster_ns'] = clusterNs;
        return this;
    }
    public set clusterNs(clusterNs: Array<string>  | undefined) {
        this['cluster_ns'] = clusterNs;
    }
    public get clusterNs(): Array<string> | undefined {
        return this['cluster_ns'];
    }
    public withClusterLabels(clusterLabels: Array<string>): ClusterItemResponseInfo {
        this['cluster_labels'] = clusterLabels;
        return this;
    }
    public set clusterLabels(clusterLabels: Array<string>  | undefined) {
        this['cluster_labels'] = clusterLabels;
    }
    public get clusterLabels(): Array<string> | undefined {
        return this['cluster_labels'];
    }
    public withProtectStatus(protectStatus: string): ClusterItemResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
}
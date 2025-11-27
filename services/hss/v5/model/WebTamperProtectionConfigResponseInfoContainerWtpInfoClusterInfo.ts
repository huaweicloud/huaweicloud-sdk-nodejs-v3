

export class WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_version'?: string;
    private 'cluster_type'?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterVersion(clusterVersion: string): WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo {
        this['cluster_version'] = clusterVersion;
        return this;
    }
    public set clusterVersion(clusterVersion: string  | undefined) {
        this['cluster_version'] = clusterVersion;
    }
    public get clusterVersion(): string | undefined {
        return this['cluster_version'];
    }
    public withClusterType(clusterType: string): WebTamperProtectionConfigResponseInfoContainerWtpInfoClusterInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
}


export class ShowClusterSupportConfigurationRequest {
    private 'cluster_id'?: string;
    private 'cluster_type'?: string;
    private 'cluster_version'?: string;
    private 'network_mode'?: string;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): ShowClusterSupportConfigurationRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterType(clusterType: string): ShowClusterSupportConfigurationRequest {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withClusterVersion(clusterVersion: string): ShowClusterSupportConfigurationRequest {
        this['cluster_version'] = clusterVersion;
        return this;
    }
    public set clusterVersion(clusterVersion: string  | undefined) {
        this['cluster_version'] = clusterVersion;
    }
    public get clusterVersion(): string | undefined {
        return this['cluster_version'];
    }
    public withNetworkMode(networkMode: string): ShowClusterSupportConfigurationRequest {
        this['network_mode'] = networkMode;
        return this;
    }
    public set networkMode(networkMode: string  | undefined) {
        this['network_mode'] = networkMode;
    }
    public get networkMode(): string | undefined {
        return this['network_mode'];
    }
    public withContentType(contentType: string): ShowClusterSupportConfigurationRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}


export class GetClusterSupportConfigurationRequest {
    private 'Content-Type'?: string;
    public clusterType?: string;
    public clusterVersion?: string;
    public clusterID?: string;
    public networkMode?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): GetClusterSupportConfigurationRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withClusterType(clusterType: string): GetClusterSupportConfigurationRequest {
        this['clusterType'] = clusterType;
        return this;
    }
    public withClusterVersion(clusterVersion: string): GetClusterSupportConfigurationRequest {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
    public withClusterID(clusterID: string): GetClusterSupportConfigurationRequest {
        this['clusterID'] = clusterID;
        return this;
    }
    public withNetworkMode(networkMode: string): GetClusterSupportConfigurationRequest {
        this['networkMode'] = networkMode;
        return this;
    }
}
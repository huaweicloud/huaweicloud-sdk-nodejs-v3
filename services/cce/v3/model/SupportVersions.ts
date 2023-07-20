

export class SupportVersions {
    public clusterType?: string;
    public clusterVersion?: Array<string>;
    public constructor(clusterType?: string, clusterVersion?: Array<string>) { 
        this['clusterType'] = clusterType;
        this['clusterVersion'] = clusterVersion;
    }
    public withClusterType(clusterType: string): SupportVersions {
        this['clusterType'] = clusterType;
        return this;
    }
    public withClusterVersion(clusterVersion: Array<string>): SupportVersions {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
}
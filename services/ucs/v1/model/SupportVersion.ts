

export class SupportVersion {
    public category?: string;
    public clusterType?: string;
    public clusterVersion?: Array<string>;
    public constructor() { 
    }
    public withCategory(category: string): SupportVersion {
        this['category'] = category;
        return this;
    }
    public withClusterType(clusterType: string): SupportVersion {
        this['clusterType'] = clusterType;
        return this;
    }
    public withClusterVersion(clusterVersion: Array<string>): SupportVersion {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
}
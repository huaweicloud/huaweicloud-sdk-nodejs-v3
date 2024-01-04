

export class PostcheckSpec {
    public clusterID?: string;
    public clusterVersion?: string;
    public targetVersion?: string;
    public constructor() { 
    }
    public withClusterID(clusterID: string): PostcheckSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withClusterVersion(clusterVersion: string): PostcheckSpec {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
    public withTargetVersion(targetVersion: string): PostcheckSpec {
        this['targetVersion'] = targetVersion;
        return this;
    }
}
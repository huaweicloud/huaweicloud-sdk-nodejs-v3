

export class WorkFlowSpec {
    public clusterID?: string;
    public clusterVersion?: string;
    public targetVersion?: string;
    public constructor(targetVersion?: string) { 
        this['targetVersion'] = targetVersion;
    }
    public withClusterID(clusterID: string): WorkFlowSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withClusterVersion(clusterVersion: string): WorkFlowSpec {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
    public withTargetVersion(targetVersion: string): WorkFlowSpec {
        this['targetVersion'] = targetVersion;
        return this;
    }
}
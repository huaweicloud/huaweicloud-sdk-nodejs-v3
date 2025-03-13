

export class UpgradePlanSpec {
    public clusterID?: string;
    public clusterVersion?: string;
    public targetVersion?: string;
    public notBefore?: string;
    public notAfter?: string;
    public notBeforeDeadline?: string;
    public constructor(clusterID?: string, clusterVersion?: string, targetVersion?: string, notBefore?: string, notAfter?: string, notBeforeDeadline?: string) { 
        this['clusterID'] = clusterID;
        this['clusterVersion'] = clusterVersion;
        this['targetVersion'] = targetVersion;
        this['notBefore'] = notBefore;
        this['notAfter'] = notAfter;
        this['notBeforeDeadline'] = notBeforeDeadline;
    }
    public withClusterID(clusterID: string): UpgradePlanSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withClusterVersion(clusterVersion: string): UpgradePlanSpec {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
    public withTargetVersion(targetVersion: string): UpgradePlanSpec {
        this['targetVersion'] = targetVersion;
        return this;
    }
    public withNotBefore(notBefore: string): UpgradePlanSpec {
        this['notBefore'] = notBefore;
        return this;
    }
    public withNotAfter(notAfter: string): UpgradePlanSpec {
        this['notAfter'] = notAfter;
        return this;
    }
    public withNotBeforeDeadline(notBeforeDeadline: string): UpgradePlanSpec {
        this['notBeforeDeadline'] = notBeforeDeadline;
        return this;
    }
}
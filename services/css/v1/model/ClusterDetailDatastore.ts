

export class ClusterDetailDatastore {
    public type?: string;
    public version?: string;
    public subVersion?: string;
    public isEosCluster?: boolean;
    public supportSecuritymode?: boolean;
    public constructor() { 
    }
    public withType(type: string): ClusterDetailDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ClusterDetailDatastore {
        this['version'] = version;
        return this;
    }
    public withSubVersion(subVersion: string): ClusterDetailDatastore {
        this['subVersion'] = subVersion;
        return this;
    }
    public withIsEosCluster(isEosCluster: boolean): ClusterDetailDatastore {
        this['isEosCluster'] = isEosCluster;
        return this;
    }
    public withSupportSecuritymode(supportSecuritymode: boolean): ClusterDetailDatastore {
        this['supportSecuritymode'] = supportSecuritymode;
        return this;
    }
}
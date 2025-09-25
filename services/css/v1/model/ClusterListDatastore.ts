

export class ClusterListDatastore {
    public type?: string;
    public version?: string;
    public supportSecuritymode?: boolean;
    public subVersion?: string;
    public isEosCluster?: boolean;
    public constructor() { 
    }
    public withType(type: string): ClusterListDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ClusterListDatastore {
        this['version'] = version;
        return this;
    }
    public withSupportSecuritymode(supportSecuritymode: boolean): ClusterListDatastore {
        this['supportSecuritymode'] = supportSecuritymode;
        return this;
    }
    public withSubVersion(subVersion: string): ClusterListDatastore {
        this['subVersion'] = subVersion;
        return this;
    }
    public withIsEosCluster(isEosCluster: boolean): ClusterListDatastore {
        this['isEosCluster'] = isEosCluster;
        return this;
    }
}


export class ClusterDetailDatastore {
    public type?: string;
    public version?: string;
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
}
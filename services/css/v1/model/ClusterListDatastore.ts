

export class ClusterListDatastore {
    public type?: string;
    public version?: string;
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
}
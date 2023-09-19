

export class CreateClusterDatastoreBody {
    public version?: string;
    public type?: string;
    public constructor(version?: string, type?: string) { 
        this['version'] = version;
        this['type'] = type;
    }
    public withVersion(version: string): CreateClusterDatastoreBody {
        this['version'] = version;
        return this;
    }
    public withType(type: string): CreateClusterDatastoreBody {
        this['type'] = type;
        return this;
    }
}


export class StarRocksInstanceInfoDatastore {
    public id?: string;
    public type?: string;
    public version?: string;
    public constructor() { 
    }
    public withId(id: string): StarRocksInstanceInfoDatastore {
        this['id'] = id;
        return this;
    }
    public withType(type: string): StarRocksInstanceInfoDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): StarRocksInstanceInfoDatastore {
        this['version'] = version;
        return this;
    }
}
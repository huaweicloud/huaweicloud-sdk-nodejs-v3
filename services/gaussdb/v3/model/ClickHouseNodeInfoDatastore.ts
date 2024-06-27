

export class ClickHouseNodeInfoDatastore {
    public id?: string;
    public type?: string;
    public version?: string;
    public constructor(id?: string, type?: string, version?: string) { 
        this['id'] = id;
        this['type'] = type;
        this['version'] = version;
    }
    public withId(id: string): ClickHouseNodeInfoDatastore {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ClickHouseNodeInfoDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ClickHouseNodeInfoDatastore {
        this['version'] = version;
        return this;
    }
}
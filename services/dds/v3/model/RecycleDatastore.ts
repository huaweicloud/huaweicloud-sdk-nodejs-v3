

export class RecycleDatastore {
    public type?: RecycleDatastoreTypeEnum | string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: RecycleDatastoreTypeEnum | string): RecycleDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): RecycleDatastore {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecycleDatastoreTypeEnum {
    DDS_COMMUNITY = 'DDS-Community'
}

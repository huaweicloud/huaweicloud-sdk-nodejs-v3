

export class Datastore {
    public type?: DatastoreTypeEnum | string;
    public version?: string;
    private 'storage_engine'?: DatastoreStorageEngineEnum | string;
    public constructor(type?: string, version?: string, storageEngine?: string) { 
        this['type'] = type;
        this['version'] = version;
        this['storage_engine'] = storageEngine;
    }
    public withType(type: DatastoreTypeEnum | string): Datastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): Datastore {
        this['version'] = version;
        return this;
    }
    public withStorageEngine(storageEngine: DatastoreStorageEngineEnum | string): Datastore {
        this['storage_engine'] = storageEngine;
        return this;
    }
    public set storageEngine(storageEngine: DatastoreStorageEngineEnum | string  | undefined) {
        this['storage_engine'] = storageEngine;
    }
    public get storageEngine(): DatastoreStorageEngineEnum | string | undefined {
        return this['storage_engine'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DatastoreTypeEnum {
    DDS_COMMUNITY = 'DDS-Community'
}
/**
    * @export
    * @enum {string}
    */
export enum DatastoreStorageEngineEnum {
    WIREDTIGER = 'wiredTiger',
    ROCKSDB = 'rocksDB'
}



export class DatastoreOption {
    public type?: string;
    public version?: string;
    private 'storage_engine'?: string;
    public constructor(type?: string, version?: string, storageEngine?: string) { 
        this['type'] = type;
        this['version'] = version;
        this['storage_engine'] = storageEngine;
    }
    public withType(type: string): DatastoreOption {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): DatastoreOption {
        this['version'] = version;
        return this;
    }
    public withStorageEngine(storageEngine: string): DatastoreOption {
        this['storage_engine'] = storageEngine;
        return this;
    }
    public set storageEngine(storageEngine: string  | undefined) {
        this['storage_engine'] = storageEngine;
    }
    public get storageEngine(): string | undefined {
        return this['storage_engine'];
    }
}
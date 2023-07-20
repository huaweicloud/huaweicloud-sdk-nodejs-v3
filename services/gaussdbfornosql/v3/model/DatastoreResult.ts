

export class DatastoreResult {
    public type?: string;
    public version?: string;
    private 'storage_engine'?: string;
    public constructor() { 
    }
    public withType(type: string): DatastoreResult {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): DatastoreResult {
        this['version'] = version;
        return this;
    }
    public withStorageEngine(storageEngine: string): DatastoreResult {
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
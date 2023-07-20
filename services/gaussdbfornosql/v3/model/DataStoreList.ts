

export class DataStoreList {
    private 'datastore_name'?: string;
    public version?: string;
    public mode?: string;
    public constructor(datastoreName?: string, version?: string, mode?: string) { 
        this['datastore_name'] = datastoreName;
        this['version'] = version;
        this['mode'] = mode;
    }
    public withDatastoreName(datastoreName: string): DataStoreList {
        this['datastore_name'] = datastoreName;
        return this;
    }
    public set datastoreName(datastoreName: string  | undefined) {
        this['datastore_name'] = datastoreName;
    }
    public get datastoreName(): string | undefined {
        return this['datastore_name'];
    }
    public withVersion(version: string): DataStoreList {
        this['version'] = version;
        return this;
    }
    public withMode(mode: string): DataStoreList {
        this['mode'] = mode;
        return this;
    }
}
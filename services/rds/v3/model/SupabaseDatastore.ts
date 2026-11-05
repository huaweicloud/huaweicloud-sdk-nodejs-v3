

export class SupabaseDatastore {
    public type?: SupabaseDatastoreTypeEnum | string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: SupabaseDatastoreTypeEnum | string): SupabaseDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): SupabaseDatastore {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SupabaseDatastoreTypeEnum {
    POSTGRESQL = 'PostgreSQL'
}

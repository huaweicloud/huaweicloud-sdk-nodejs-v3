

export class DatastoreResult {
    public type?: DatastoreResultTypeEnum | string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: DatastoreResultTypeEnum | string): DatastoreResult {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): DatastoreResult {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DatastoreResultTypeEnum {
    GAUSSDB = 'GaussDB'
}

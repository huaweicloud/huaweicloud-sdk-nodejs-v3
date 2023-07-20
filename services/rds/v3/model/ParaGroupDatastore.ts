

export class ParaGroupDatastore {
    public type?: ParaGroupDatastoreTypeEnum | string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: ParaGroupDatastoreTypeEnum | string): ParaGroupDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ParaGroupDatastore {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ParaGroupDatastoreTypeEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL',
    SQLSERVER = 'SQLServer'
}

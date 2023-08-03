

export class Datastore {
    public type?: DatastoreTypeEnum | string;
    public version?: string;
    private 'complete_version'?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: DatastoreTypeEnum | string): Datastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): Datastore {
        this['version'] = version;
        return this;
    }
    public withCompleteVersion(completeVersion: string): Datastore {
        this['complete_version'] = completeVersion;
        return this;
    }
    public set completeVersion(completeVersion: string  | undefined) {
        this['complete_version'] = completeVersion;
    }
    public get completeVersion(): string | undefined {
        return this['complete_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DatastoreTypeEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL',
    SQLSERVER = 'SQLServer',
    MARIADB = 'MariaDB'
}

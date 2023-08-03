

export class BackupDatastore {
    public type?: BackupDatastoreTypeEnum | string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: BackupDatastoreTypeEnum | string): BackupDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): BackupDatastore {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupDatastoreTypeEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL',
    SQLSERVER = 'SQLServer',
    MARIADB = 'MariaDB'
}

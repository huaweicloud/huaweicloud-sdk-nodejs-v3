

export class ListDatastoresRequest {
    private 'X-Language'?: string;
    private 'database_name'?: ListDatastoresRequestDatabaseNameEnum | string;
    public constructor(databaseName?: string) { 
        this['database_name'] = databaseName;
    }
    public withXLanguage(xLanguage: string): ListDatastoresRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withDatabaseName(databaseName: ListDatastoresRequestDatabaseNameEnum | string): ListDatastoresRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: ListDatastoresRequestDatabaseNameEnum | string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): ListDatastoresRequestDatabaseNameEnum | string | undefined {
        return this['database_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDatastoresRequestDatabaseNameEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL',
    SQLSERVER = 'SQLServer',
    MARIADB = 'MariaDB'
}

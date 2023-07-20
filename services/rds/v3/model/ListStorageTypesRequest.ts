

export class ListStorageTypesRequest {
    private 'X-Language'?: string;
    private 'database_name'?: ListStorageTypesRequestDatabaseNameEnum | string;
    private 'version_name'?: string;
    private 'ha_mode'?: ListStorageTypesRequestHaModeEnum | string;
    public constructor(databaseName?: string, versionName?: string) { 
        this['database_name'] = databaseName;
        this['version_name'] = versionName;
    }
    public withXLanguage(xLanguage: string): ListStorageTypesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withDatabaseName(databaseName: ListStorageTypesRequestDatabaseNameEnum | string): ListStorageTypesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: ListStorageTypesRequestDatabaseNameEnum | string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): ListStorageTypesRequestDatabaseNameEnum | string | undefined {
        return this['database_name'];
    }
    public withVersionName(versionName: string): ListStorageTypesRequest {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withHaMode(haMode: ListStorageTypesRequestHaModeEnum | string): ListStorageTypesRequest {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: ListStorageTypesRequestHaModeEnum | string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): ListStorageTypesRequestHaModeEnum | string | undefined {
        return this['ha_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListStorageTypesRequestDatabaseNameEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL',
    SQLSERVER = 'SQLServer'
}
/**
    * @export
    * @enum {string}
    */
export enum ListStorageTypesRequestHaModeEnum {
    HA = 'ha',
    SINGLE = 'single',
    REPLICA = 'replica'
}

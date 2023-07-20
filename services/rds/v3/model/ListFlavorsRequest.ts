

export class ListFlavorsRequest {
    private 'X-Language'?: string;
    private 'database_name'?: ListFlavorsRequestDatabaseNameEnum | string;
    private 'version_name'?: string;
    private 'spec_code'?: string;
    public constructor(databaseName?: string) { 
        this['database_name'] = databaseName;
    }
    public withXLanguage(xLanguage: string): ListFlavorsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withDatabaseName(databaseName: ListFlavorsRequestDatabaseNameEnum | string): ListFlavorsRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: ListFlavorsRequestDatabaseNameEnum | string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): ListFlavorsRequestDatabaseNameEnum | string | undefined {
        return this['database_name'];
    }
    public withVersionName(versionName: string): ListFlavorsRequest {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withSpecCode(specCode: string): ListFlavorsRequest {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFlavorsRequestDatabaseNameEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL',
    SQLSERVER = 'SQLServer'
}

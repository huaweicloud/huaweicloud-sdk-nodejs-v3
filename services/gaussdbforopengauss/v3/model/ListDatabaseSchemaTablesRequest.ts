

export class ListDatabaseSchemaTablesRequest {
    private 'X-Language'?: ListDatabaseSchemaTablesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name_keyword'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, dbName?: string, schemaName?: string) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
        this['schema_name'] = schemaName;
    }
    public withXLanguage(xLanguage: ListDatabaseSchemaTablesRequestXLanguageEnum | string): ListDatabaseSchemaTablesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDatabaseSchemaTablesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDatabaseSchemaTablesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListDatabaseSchemaTablesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): ListDatabaseSchemaTablesRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): ListDatabaseSchemaTablesRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableNameKeyword(tableNameKeyword: string): ListDatabaseSchemaTablesRequest {
        this['table_name_keyword'] = tableNameKeyword;
        return this;
    }
    public set tableNameKeyword(tableNameKeyword: string  | undefined) {
        this['table_name_keyword'] = tableNameKeyword;
    }
    public get tableNameKeyword(): string | undefined {
        return this['table_name_keyword'];
    }
    public withOffset(offset: number): ListDatabaseSchemaTablesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDatabaseSchemaTablesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDatabaseSchemaTablesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

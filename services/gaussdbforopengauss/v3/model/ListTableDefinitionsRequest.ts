

export class ListTableDefinitionsRequest {
    private 'X-Language'?: ListTableDefinitionsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    public constructor(instanceId?: string, databaseName?: string, tableName?: string) { 
        this['instance_id'] = instanceId;
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
    }
    public withXLanguage(xLanguage: ListTableDefinitionsRequestXLanguageEnum | string): ListTableDefinitionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTableDefinitionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTableDefinitionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListTableDefinitionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabaseName(databaseName: string): ListTableDefinitionsRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): ListTableDefinitionsRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): ListTableDefinitionsRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTableDefinitionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

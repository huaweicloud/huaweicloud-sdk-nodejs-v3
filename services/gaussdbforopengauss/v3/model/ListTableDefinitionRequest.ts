

export class ListTableDefinitionRequest {
    private 'X-Language'?: ListTableDefinitionRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    public constructor(instanceId?: string, databaseName?: string, schemaName?: string, tableName?: string) { 
        this['instance_id'] = instanceId;
        this['database_name'] = databaseName;
        this['schema_name'] = schemaName;
        this['table_name'] = tableName;
    }
    public withXLanguage(xLanguage: ListTableDefinitionRequestXLanguageEnum | string): ListTableDefinitionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTableDefinitionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTableDefinitionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListTableDefinitionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabaseName(databaseName: string): ListTableDefinitionRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): ListTableDefinitionRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): ListTableDefinitionRequest {
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
export enum ListTableDefinitionRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

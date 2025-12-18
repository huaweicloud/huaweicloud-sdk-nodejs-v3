

export class ListSchemaVolumesRequest {
    private 'X-Language'?: ListSchemaVolumesRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, databaseName?: string) { 
        this['instance_id'] = instanceId;
        this['database_name'] = databaseName;
    }
    public withXLanguage(xLanguage: ListSchemaVolumesRequestXLanguageEnum | string): ListSchemaVolumesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSchemaVolumesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSchemaVolumesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSchemaVolumesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabaseName(databaseName: string): ListSchemaVolumesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): ListSchemaVolumesRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withOffset(offset: number): ListSchemaVolumesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSchemaVolumesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSchemaVolumesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

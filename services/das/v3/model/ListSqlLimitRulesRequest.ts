

export class ListSqlLimitRulesRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'datastore_type'?: ListSqlLimitRulesRequestDatastoreTypeEnum | string;
    private 'database_name'?: string;
    private 'X-Language'?: ListSqlLimitRulesRequestXLanguageEnum | string;
    public constructor(instanceId?: string, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceId(instanceId: string): ListSqlLimitRulesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListSqlLimitRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSqlLimitRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withDatastoreType(datastoreType: ListSqlLimitRulesRequestDatastoreTypeEnum | string): ListSqlLimitRulesRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ListSqlLimitRulesRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ListSqlLimitRulesRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withDatabaseName(databaseName: string): ListSqlLimitRulesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withXLanguage(xLanguage: ListSqlLimitRulesRequestXLanguageEnum | string): ListSqlLimitRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSqlLimitRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSqlLimitRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSqlLimitRulesRequestDatastoreTypeEnum {
    MYSQL = 'MySQL',
    POSTGRESQL = 'PostgreSQL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSqlLimitRulesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

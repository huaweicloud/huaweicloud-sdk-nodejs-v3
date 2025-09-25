

export class ShowSqlPatchRequest {
    private 'X-Language'?: ShowSqlPatchRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'sql_id'?: string;
    private 'database_name'?: string;
    public constructor(instanceId?: string, nodeId?: string, sqlId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
        this['sql_id'] = sqlId;
    }
    public withXLanguage(xLanguage: ShowSqlPatchRequestXLanguageEnum | string): ShowSqlPatchRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSqlPatchRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSqlPatchRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowSqlPatchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ShowSqlPatchRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSqlId(sqlId: string): ShowSqlPatchRequest {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withDatabaseName(databaseName: string): ShowSqlPatchRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSqlPatchRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

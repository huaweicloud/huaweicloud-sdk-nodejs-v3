

export class ShowSqlExecutionPlanRequest {
    private 'instance_id'?: string;
    private 'db_user_id'?: string;
    public database?: string;
    public sql?: string;
    private 'X-Language'?: ShowSqlExecutionPlanRequestXLanguageEnum | string;
    public constructor(instanceId?: string, dbUserId?: string, database?: string, sql?: string) { 
        this['instance_id'] = instanceId;
        this['db_user_id'] = dbUserId;
        this['database'] = database;
        this['sql'] = sql;
    }
    public withInstanceId(instanceId: string): ShowSqlExecutionPlanRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbUserId(dbUserId: string): ShowSqlExecutionPlanRequest {
        this['db_user_id'] = dbUserId;
        return this;
    }
    public set dbUserId(dbUserId: string  | undefined) {
        this['db_user_id'] = dbUserId;
    }
    public get dbUserId(): string | undefined {
        return this['db_user_id'];
    }
    public withDatabase(database: string): ShowSqlExecutionPlanRequest {
        this['database'] = database;
        return this;
    }
    public withSql(sql: string): ShowSqlExecutionPlanRequest {
        this['sql'] = sql;
        return this;
    }
    public withXLanguage(xLanguage: ShowSqlExecutionPlanRequestXLanguageEnum | string): ShowSqlExecutionPlanRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSqlExecutionPlanRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSqlExecutionPlanRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSqlExecutionPlanRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

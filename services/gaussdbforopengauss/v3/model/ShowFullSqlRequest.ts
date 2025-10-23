

export class ShowFullSqlRequest {
    private 'X-Language'?: ShowFullSqlRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'sql_exec_id'?: string;
    public id?: number;
    private 'sql_id'?: string;
    public constructor(instanceId?: string, sqlExecId?: string) { 
        this['instance_id'] = instanceId;
        this['sql_exec_id'] = sqlExecId;
    }
    public withXLanguage(xLanguage: ShowFullSqlRequestXLanguageEnum | string): ShowFullSqlRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowFullSqlRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowFullSqlRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowFullSqlRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSqlExecId(sqlExecId: string): ShowFullSqlRequest {
        this['sql_exec_id'] = sqlExecId;
        return this;
    }
    public set sqlExecId(sqlExecId: string  | undefined) {
        this['sql_exec_id'] = sqlExecId;
    }
    public get sqlExecId(): string | undefined {
        return this['sql_exec_id'];
    }
    public withId(id: number): ShowFullSqlRequest {
        this['id'] = id;
        return this;
    }
    public withSqlId(sqlId: string): ShowFullSqlRequest {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFullSqlRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}



export class ListSqlTraceRequest {
    private 'instance_id'?: string;
    private 'sql_id'?: string;
    private 'sql_exec_id'?: string;
    private 'transaction_id'?: string;
    private 'trace_id'?: string;
    private 'X-Language'?: ListSqlTraceRequestXLanguageEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListSqlTraceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSqlId(sqlId: string): ListSqlTraceRequest {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlExecId(sqlExecId: string): ListSqlTraceRequest {
        this['sql_exec_id'] = sqlExecId;
        return this;
    }
    public set sqlExecId(sqlExecId: string  | undefined) {
        this['sql_exec_id'] = sqlExecId;
    }
    public get sqlExecId(): string | undefined {
        return this['sql_exec_id'];
    }
    public withTransactionId(transactionId: string): ListSqlTraceRequest {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withTraceId(traceId: string): ListSqlTraceRequest {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withXLanguage(xLanguage: ListSqlTraceRequestXLanguageEnum | string): ListSqlTraceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSqlTraceRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSqlTraceRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSqlTraceRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

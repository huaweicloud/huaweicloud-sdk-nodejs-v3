

export class FullSqlSampleInfo {
    public sql?: string;
    private 'sql_template_id'?: string;
    public database?: string;
    public client?: string;
    public user?: string;
    private 'execute_at'?: number;
    private 'query_time'?: number;
    private 'lock_time'?: number;
    public constructor() { 
    }
    public withSql(sql: string): FullSqlSampleInfo {
        this['sql'] = sql;
        return this;
    }
    public withSqlTemplateId(sqlTemplateId: string): FullSqlSampleInfo {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withDatabase(database: string): FullSqlSampleInfo {
        this['database'] = database;
        return this;
    }
    public withClient(client: string): FullSqlSampleInfo {
        this['client'] = client;
        return this;
    }
    public withUser(user: string): FullSqlSampleInfo {
        this['user'] = user;
        return this;
    }
    public withExecuteAt(executeAt: number): FullSqlSampleInfo {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
    public withQueryTime(queryTime: number): FullSqlSampleInfo {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: number  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): number | undefined {
        return this['query_time'];
    }
    public withLockTime(lockTime: number): FullSqlSampleInfo {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
}
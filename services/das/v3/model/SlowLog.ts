

export class SlowLog {
    public sql?: string;
    private 'sql_template_id'?: string;
    public database?: string;
    public client?: string;
    public user?: string;
    private 'execute_at'?: number;
    private 'query_time'?: number;
    private 'lock_time'?: number;
    private 'rows_examined'?: number;
    private 'rows_sent'?: number;
    public constructor(sql?: string, sqlTemplateId?: string, database?: string, client?: string, user?: string, executeAt?: number, queryTime?: number, lockTime?: number, rowsExamined?: number, rowsSent?: number) { 
        this['sql'] = sql;
        this['sql_template_id'] = sqlTemplateId;
        this['database'] = database;
        this['client'] = client;
        this['user'] = user;
        this['execute_at'] = executeAt;
        this['query_time'] = queryTime;
        this['lock_time'] = lockTime;
        this['rows_examined'] = rowsExamined;
        this['rows_sent'] = rowsSent;
    }
    public withSql(sql: string): SlowLog {
        this['sql'] = sql;
        return this;
    }
    public withSqlTemplateId(sqlTemplateId: string): SlowLog {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withDatabase(database: string): SlowLog {
        this['database'] = database;
        return this;
    }
    public withClient(client: string): SlowLog {
        this['client'] = client;
        return this;
    }
    public withUser(user: string): SlowLog {
        this['user'] = user;
        return this;
    }
    public withExecuteAt(executeAt: number): SlowLog {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
    public withQueryTime(queryTime: number): SlowLog {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: number  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): number | undefined {
        return this['query_time'];
    }
    public withLockTime(lockTime: number): SlowLog {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
    public withRowsExamined(rowsExamined: number): SlowLog {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: number  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): number | undefined {
        return this['rows_examined'];
    }
    public withRowsSent(rowsSent: number): SlowLog {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: number  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): number | undefined {
        return this['rows_sent'];
    }
}
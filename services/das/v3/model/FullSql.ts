

export class FullSql {
    public sql?: string;
    private 'operate_type'?: string;
    public status?: string;
    private 'error_no'?: string;
    public database?: string;
    public client?: string;
    private 'thread_id'?: string;
    public user?: string;
    private 'execute_at'?: number;
    private 'query_time'?: number;
    private 'lock_time'?: number;
    private 'rows_examined'?: number;
    private 'rows_sent'?: number;
    private 'rows_affected'?: number;
    public constructor(sql?: string, operateType?: string, status?: string, errorNo?: string, database?: string, client?: string, threadId?: string, user?: string, executeAt?: number, queryTime?: number, lockTime?: number, rowsExamined?: number, rowsSent?: number, rowsAffected?: number) { 
        this['sql'] = sql;
        this['operate_type'] = operateType;
        this['status'] = status;
        this['error_no'] = errorNo;
        this['database'] = database;
        this['client'] = client;
        this['thread_id'] = threadId;
        this['user'] = user;
        this['execute_at'] = executeAt;
        this['query_time'] = queryTime;
        this['lock_time'] = lockTime;
        this['rows_examined'] = rowsExamined;
        this['rows_sent'] = rowsSent;
        this['rows_affected'] = rowsAffected;
    }
    public withSql(sql: string): FullSql {
        this['sql'] = sql;
        return this;
    }
    public withOperateType(operateType: string): FullSql {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withStatus(status: string): FullSql {
        this['status'] = status;
        return this;
    }
    public withErrorNo(errorNo: string): FullSql {
        this['error_no'] = errorNo;
        return this;
    }
    public set errorNo(errorNo: string  | undefined) {
        this['error_no'] = errorNo;
    }
    public get errorNo(): string | undefined {
        return this['error_no'];
    }
    public withDatabase(database: string): FullSql {
        this['database'] = database;
        return this;
    }
    public withClient(client: string): FullSql {
        this['client'] = client;
        return this;
    }
    public withThreadId(threadId: string): FullSql {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withUser(user: string): FullSql {
        this['user'] = user;
        return this;
    }
    public withExecuteAt(executeAt: number): FullSql {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
    public withQueryTime(queryTime: number): FullSql {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: number  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): number | undefined {
        return this['query_time'];
    }
    public withLockTime(lockTime: number): FullSql {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
    public withRowsExamined(rowsExamined: number): FullSql {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: number  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): number | undefined {
        return this['rows_examined'];
    }
    public withRowsSent(rowsSent: number): FullSql {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: number  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): number | undefined {
        return this['rows_sent'];
    }
    public withRowsAffected(rowsAffected: number): FullSql {
        this['rows_affected'] = rowsAffected;
        return this;
    }
    public set rowsAffected(rowsAffected: number  | undefined) {
        this['rows_affected'] = rowsAffected;
    }
    public get rowsAffected(): number | undefined {
        return this['rows_affected'];
    }
}
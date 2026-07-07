

export class ShowDeadLockAnalysisResultRespSqlList {
    public sql?: string;
    private 'occurrence_time'?: number;
    private 'query_time'?: number;
    private 'transaction_id'?: string;
    private 'sql_template_id'?: string;
    private 'node_id'?: string;
    private 'db_user'?: string;
    public database?: string;
    public client?: string;
    private 'sql_type'?: string;
    public status?: number;
    private 'error_no'?: number;
    private 'rows_affected'?: number;
    private 'rows_sent'?: number;
    private 'lock_time'?: number;
    private 'rows_examined'?: number;
    private 'session_id'?: string;
    private 'cpu_time'?: number;
    private 'send_bytes'?: number;
    private 'query_tables'?: string;
    private 'innodb_io_read_bytes'?: number;
    private 'innodb_io_read'?: number;
    private 'innodb_io_read_wait'?: number;
    private 'innodb_lock_wait'?: number;
    private 'innodb_queue_wait'?: number;
    public constructor(sql?: string, occurrenceTime?: number, queryTime?: number, transactionId?: string, sqlTemplateId?: string, nodeId?: string, dbUser?: string, database?: string, client?: string, sqlType?: string, status?: number, errorNo?: number, rowsAffected?: number, rowsSent?: number, lockTime?: number, rowsExamined?: number, sessionId?: string, cpuTime?: number, sendBytes?: number, queryTables?: string, innodbIoReadBytes?: number, innodbIoRead?: number, innodbIoReadWait?: number, innodbLockWait?: number, innodbQueueWait?: number) { 
        this['sql'] = sql;
        this['occurrence_time'] = occurrenceTime;
        this['query_time'] = queryTime;
        this['transaction_id'] = transactionId;
        this['sql_template_id'] = sqlTemplateId;
        this['node_id'] = nodeId;
        this['db_user'] = dbUser;
        this['database'] = database;
        this['client'] = client;
        this['sql_type'] = sqlType;
        this['status'] = status;
        this['error_no'] = errorNo;
        this['rows_affected'] = rowsAffected;
        this['rows_sent'] = rowsSent;
        this['lock_time'] = lockTime;
        this['rows_examined'] = rowsExamined;
        this['session_id'] = sessionId;
        this['cpu_time'] = cpuTime;
        this['send_bytes'] = sendBytes;
        this['query_tables'] = queryTables;
        this['innodb_io_read_bytes'] = innodbIoReadBytes;
        this['innodb_io_read'] = innodbIoRead;
        this['innodb_io_read_wait'] = innodbIoReadWait;
        this['innodb_lock_wait'] = innodbLockWait;
        this['innodb_queue_wait'] = innodbQueueWait;
    }
    public withSql(sql: string): ShowDeadLockAnalysisResultRespSqlList {
        this['sql'] = sql;
        return this;
    }
    public withOccurrenceTime(occurrenceTime: number): ShowDeadLockAnalysisResultRespSqlList {
        this['occurrence_time'] = occurrenceTime;
        return this;
    }
    public set occurrenceTime(occurrenceTime: number  | undefined) {
        this['occurrence_time'] = occurrenceTime;
    }
    public get occurrenceTime(): number | undefined {
        return this['occurrence_time'];
    }
    public withQueryTime(queryTime: number): ShowDeadLockAnalysisResultRespSqlList {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: number  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): number | undefined {
        return this['query_time'];
    }
    public withTransactionId(transactionId: string): ShowDeadLockAnalysisResultRespSqlList {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withSqlTemplateId(sqlTemplateId: string): ShowDeadLockAnalysisResultRespSqlList {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withNodeId(nodeId: string): ShowDeadLockAnalysisResultRespSqlList {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withDbUser(dbUser: string): ShowDeadLockAnalysisResultRespSqlList {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withDatabase(database: string): ShowDeadLockAnalysisResultRespSqlList {
        this['database'] = database;
        return this;
    }
    public withClient(client: string): ShowDeadLockAnalysisResultRespSqlList {
        this['client'] = client;
        return this;
    }
    public withSqlType(sqlType: string): ShowDeadLockAnalysisResultRespSqlList {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withStatus(status: number): ShowDeadLockAnalysisResultRespSqlList {
        this['status'] = status;
        return this;
    }
    public withErrorNo(errorNo: number): ShowDeadLockAnalysisResultRespSqlList {
        this['error_no'] = errorNo;
        return this;
    }
    public set errorNo(errorNo: number  | undefined) {
        this['error_no'] = errorNo;
    }
    public get errorNo(): number | undefined {
        return this['error_no'];
    }
    public withRowsAffected(rowsAffected: number): ShowDeadLockAnalysisResultRespSqlList {
        this['rows_affected'] = rowsAffected;
        return this;
    }
    public set rowsAffected(rowsAffected: number  | undefined) {
        this['rows_affected'] = rowsAffected;
    }
    public get rowsAffected(): number | undefined {
        return this['rows_affected'];
    }
    public withRowsSent(rowsSent: number): ShowDeadLockAnalysisResultRespSqlList {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: number  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): number | undefined {
        return this['rows_sent'];
    }
    public withLockTime(lockTime: number): ShowDeadLockAnalysisResultRespSqlList {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
    public withRowsExamined(rowsExamined: number): ShowDeadLockAnalysisResultRespSqlList {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: number  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): number | undefined {
        return this['rows_examined'];
    }
    public withSessionId(sessionId: string): ShowDeadLockAnalysisResultRespSqlList {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withCpuTime(cpuTime: number): ShowDeadLockAnalysisResultRespSqlList {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: number  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): number | undefined {
        return this['cpu_time'];
    }
    public withSendBytes(sendBytes: number): ShowDeadLockAnalysisResultRespSqlList {
        this['send_bytes'] = sendBytes;
        return this;
    }
    public set sendBytes(sendBytes: number  | undefined) {
        this['send_bytes'] = sendBytes;
    }
    public get sendBytes(): number | undefined {
        return this['send_bytes'];
    }
    public withQueryTables(queryTables: string): ShowDeadLockAnalysisResultRespSqlList {
        this['query_tables'] = queryTables;
        return this;
    }
    public set queryTables(queryTables: string  | undefined) {
        this['query_tables'] = queryTables;
    }
    public get queryTables(): string | undefined {
        return this['query_tables'];
    }
    public withInnodbIoReadBytes(innodbIoReadBytes: number): ShowDeadLockAnalysisResultRespSqlList {
        this['innodb_io_read_bytes'] = innodbIoReadBytes;
        return this;
    }
    public set innodbIoReadBytes(innodbIoReadBytes: number  | undefined) {
        this['innodb_io_read_bytes'] = innodbIoReadBytes;
    }
    public get innodbIoReadBytes(): number | undefined {
        return this['innodb_io_read_bytes'];
    }
    public withInnodbIoRead(innodbIoRead: number): ShowDeadLockAnalysisResultRespSqlList {
        this['innodb_io_read'] = innodbIoRead;
        return this;
    }
    public set innodbIoRead(innodbIoRead: number  | undefined) {
        this['innodb_io_read'] = innodbIoRead;
    }
    public get innodbIoRead(): number | undefined {
        return this['innodb_io_read'];
    }
    public withInnodbIoReadWait(innodbIoReadWait: number): ShowDeadLockAnalysisResultRespSqlList {
        this['innodb_io_read_wait'] = innodbIoReadWait;
        return this;
    }
    public set innodbIoReadWait(innodbIoReadWait: number  | undefined) {
        this['innodb_io_read_wait'] = innodbIoReadWait;
    }
    public get innodbIoReadWait(): number | undefined {
        return this['innodb_io_read_wait'];
    }
    public withInnodbLockWait(innodbLockWait: number): ShowDeadLockAnalysisResultRespSqlList {
        this['innodb_lock_wait'] = innodbLockWait;
        return this;
    }
    public set innodbLockWait(innodbLockWait: number  | undefined) {
        this['innodb_lock_wait'] = innodbLockWait;
    }
    public get innodbLockWait(): number | undefined {
        return this['innodb_lock_wait'];
    }
    public withInnodbQueueWait(innodbQueueWait: number): ShowDeadLockAnalysisResultRespSqlList {
        this['innodb_queue_wait'] = innodbQueueWait;
        return this;
    }
    public set innodbQueueWait(innodbQueueWait: number  | undefined) {
        this['innodb_queue_wait'] = innodbQueueWait;
    }
    public get innodbQueueWait(): number | undefined {
        return this['innodb_queue_wait'];
    }
}
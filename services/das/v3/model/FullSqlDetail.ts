

export class FullSqlDetail {
    public sql?: string;
    private 'sql_template_id'?: string;
    private 'operate_type'?: string;
    public status?: string;
    private 'error_no'?: string;
    public database?: string;
    private 'thread_id'?: string;
    public client?: string;
    public user?: string;
    private 'execute_at'?: number;
    private 'query_time'?: number;
    private 'lock_time'?: number;
    private 'rows_examined'?: number;
    private 'rows_sent'?: number;
    private 'rows_affected'?: number;
    private 'trx_id'?: number;
    private 'cpu_time'?: number;
    private 'send_bytes'?: number;
    private 'query_tables'?: string;
    private 'innodb_io_read_bytes'?: number;
    private 'innodb_io_read'?: number;
    private 'innodb_io_read_wait'?: number;
    private 'innodb_lock_wait'?: number;
    private 'innodb_queue_wait'?: number;
    private 'kernel_version'?: string;
    private 'query_time_detail'?: string;
    private 'session_id'?: string;
    private 'node_id'?: string;
    public constructor(sql?: string, sqlTemplateId?: string, operateType?: string, status?: string, errorNo?: string, database?: string, threadId?: string, client?: string, user?: string, executeAt?: number, queryTime?: number, lockTime?: number, rowsExamined?: number, rowsSent?: number, rowsAffected?: number, trxId?: number, cpuTime?: number, sendBytes?: number, queryTables?: string, innodbIoReadBytes?: number, innodbIoRead?: number, innodbIoReadWait?: number, innodbLockWait?: number, innodbQueueWait?: number, kernelVersion?: string, queryTimeDetail?: string, sessionId?: string, nodeId?: string) { 
        this['sql'] = sql;
        this['sql_template_id'] = sqlTemplateId;
        this['operate_type'] = operateType;
        this['status'] = status;
        this['error_no'] = errorNo;
        this['database'] = database;
        this['thread_id'] = threadId;
        this['client'] = client;
        this['user'] = user;
        this['execute_at'] = executeAt;
        this['query_time'] = queryTime;
        this['lock_time'] = lockTime;
        this['rows_examined'] = rowsExamined;
        this['rows_sent'] = rowsSent;
        this['rows_affected'] = rowsAffected;
        this['trx_id'] = trxId;
        this['cpu_time'] = cpuTime;
        this['send_bytes'] = sendBytes;
        this['query_tables'] = queryTables;
        this['innodb_io_read_bytes'] = innodbIoReadBytes;
        this['innodb_io_read'] = innodbIoRead;
        this['innodb_io_read_wait'] = innodbIoReadWait;
        this['innodb_lock_wait'] = innodbLockWait;
        this['innodb_queue_wait'] = innodbQueueWait;
        this['kernel_version'] = kernelVersion;
        this['query_time_detail'] = queryTimeDetail;
        this['session_id'] = sessionId;
        this['node_id'] = nodeId;
    }
    public withSql(sql: string): FullSqlDetail {
        this['sql'] = sql;
        return this;
    }
    public withSqlTemplateId(sqlTemplateId: string): FullSqlDetail {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withOperateType(operateType: string): FullSqlDetail {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withStatus(status: string): FullSqlDetail {
        this['status'] = status;
        return this;
    }
    public withErrorNo(errorNo: string): FullSqlDetail {
        this['error_no'] = errorNo;
        return this;
    }
    public set errorNo(errorNo: string  | undefined) {
        this['error_no'] = errorNo;
    }
    public get errorNo(): string | undefined {
        return this['error_no'];
    }
    public withDatabase(database: string): FullSqlDetail {
        this['database'] = database;
        return this;
    }
    public withThreadId(threadId: string): FullSqlDetail {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withClient(client: string): FullSqlDetail {
        this['client'] = client;
        return this;
    }
    public withUser(user: string): FullSqlDetail {
        this['user'] = user;
        return this;
    }
    public withExecuteAt(executeAt: number): FullSqlDetail {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
    public withQueryTime(queryTime: number): FullSqlDetail {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: number  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): number | undefined {
        return this['query_time'];
    }
    public withLockTime(lockTime: number): FullSqlDetail {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
    public withRowsExamined(rowsExamined: number): FullSqlDetail {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: number  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): number | undefined {
        return this['rows_examined'];
    }
    public withRowsSent(rowsSent: number): FullSqlDetail {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: number  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): number | undefined {
        return this['rows_sent'];
    }
    public withRowsAffected(rowsAffected: number): FullSqlDetail {
        this['rows_affected'] = rowsAffected;
        return this;
    }
    public set rowsAffected(rowsAffected: number  | undefined) {
        this['rows_affected'] = rowsAffected;
    }
    public get rowsAffected(): number | undefined {
        return this['rows_affected'];
    }
    public withTrxId(trxId: number): FullSqlDetail {
        this['trx_id'] = trxId;
        return this;
    }
    public set trxId(trxId: number  | undefined) {
        this['trx_id'] = trxId;
    }
    public get trxId(): number | undefined {
        return this['trx_id'];
    }
    public withCpuTime(cpuTime: number): FullSqlDetail {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: number  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): number | undefined {
        return this['cpu_time'];
    }
    public withSendBytes(sendBytes: number): FullSqlDetail {
        this['send_bytes'] = sendBytes;
        return this;
    }
    public set sendBytes(sendBytes: number  | undefined) {
        this['send_bytes'] = sendBytes;
    }
    public get sendBytes(): number | undefined {
        return this['send_bytes'];
    }
    public withQueryTables(queryTables: string): FullSqlDetail {
        this['query_tables'] = queryTables;
        return this;
    }
    public set queryTables(queryTables: string  | undefined) {
        this['query_tables'] = queryTables;
    }
    public get queryTables(): string | undefined {
        return this['query_tables'];
    }
    public withInnodbIoReadBytes(innodbIoReadBytes: number): FullSqlDetail {
        this['innodb_io_read_bytes'] = innodbIoReadBytes;
        return this;
    }
    public set innodbIoReadBytes(innodbIoReadBytes: number  | undefined) {
        this['innodb_io_read_bytes'] = innodbIoReadBytes;
    }
    public get innodbIoReadBytes(): number | undefined {
        return this['innodb_io_read_bytes'];
    }
    public withInnodbIoRead(innodbIoRead: number): FullSqlDetail {
        this['innodb_io_read'] = innodbIoRead;
        return this;
    }
    public set innodbIoRead(innodbIoRead: number  | undefined) {
        this['innodb_io_read'] = innodbIoRead;
    }
    public get innodbIoRead(): number | undefined {
        return this['innodb_io_read'];
    }
    public withInnodbIoReadWait(innodbIoReadWait: number): FullSqlDetail {
        this['innodb_io_read_wait'] = innodbIoReadWait;
        return this;
    }
    public set innodbIoReadWait(innodbIoReadWait: number  | undefined) {
        this['innodb_io_read_wait'] = innodbIoReadWait;
    }
    public get innodbIoReadWait(): number | undefined {
        return this['innodb_io_read_wait'];
    }
    public withInnodbLockWait(innodbLockWait: number): FullSqlDetail {
        this['innodb_lock_wait'] = innodbLockWait;
        return this;
    }
    public set innodbLockWait(innodbLockWait: number  | undefined) {
        this['innodb_lock_wait'] = innodbLockWait;
    }
    public get innodbLockWait(): number | undefined {
        return this['innodb_lock_wait'];
    }
    public withInnodbQueueWait(innodbQueueWait: number): FullSqlDetail {
        this['innodb_queue_wait'] = innodbQueueWait;
        return this;
    }
    public set innodbQueueWait(innodbQueueWait: number  | undefined) {
        this['innodb_queue_wait'] = innodbQueueWait;
    }
    public get innodbQueueWait(): number | undefined {
        return this['innodb_queue_wait'];
    }
    public withKernelVersion(kernelVersion: string): FullSqlDetail {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
    public withQueryTimeDetail(queryTimeDetail: string): FullSqlDetail {
        this['query_time_detail'] = queryTimeDetail;
        return this;
    }
    public set queryTimeDetail(queryTimeDetail: string  | undefined) {
        this['query_time_detail'] = queryTimeDetail;
    }
    public get queryTimeDetail(): string | undefined {
        return this['query_time_detail'];
    }
    public withSessionId(sessionId: string): FullSqlDetail {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withNodeId(nodeId: string): FullSqlDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}
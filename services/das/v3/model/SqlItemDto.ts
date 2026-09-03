

export class SqlItemDto {
    public id?: string;
    private 'operate_type'?: string;
    private 'sql_template_id'?: string;
    private 'instance_id'?: string;
    public sql?: string;
    public database?: string;
    private 'thread_id'?: number;
    public username?: string;
    private 'client_ip'?: string;
    public status?: number;
    private 'execute_cost'?: number;
    private 'execute_at'?: number;
    private 'rows_affected'?: number;
    private 'rows_examined'?: number;
    private 'lock_wait_time'?: number;
    private 'rows_returned'?: number;
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
    private 'error_no'?: number;
    private 'node_id'?: string;
    private 'logical_reads'?: number;
    private 'physical_reads'?: number;
    public writes?: number;
    private 'app_name'?: string;
    public constructor() { 
    }
    public withId(id: string): SqlItemDto {
        this['id'] = id;
        return this;
    }
    public withOperateType(operateType: string): SqlItemDto {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withSqlTemplateId(sqlTemplateId: string): SqlItemDto {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withInstanceId(instanceId: string): SqlItemDto {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSql(sql: string): SqlItemDto {
        this['sql'] = sql;
        return this;
    }
    public withDatabase(database: string): SqlItemDto {
        this['database'] = database;
        return this;
    }
    public withThreadId(threadId: number): SqlItemDto {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: number  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): number | undefined {
        return this['thread_id'];
    }
    public withUsername(username: string): SqlItemDto {
        this['username'] = username;
        return this;
    }
    public withClientIp(clientIp: string): SqlItemDto {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withStatus(status: number): SqlItemDto {
        this['status'] = status;
        return this;
    }
    public withExecuteCost(executeCost: number): SqlItemDto {
        this['execute_cost'] = executeCost;
        return this;
    }
    public set executeCost(executeCost: number  | undefined) {
        this['execute_cost'] = executeCost;
    }
    public get executeCost(): number | undefined {
        return this['execute_cost'];
    }
    public withExecuteAt(executeAt: number): SqlItemDto {
        this['execute_at'] = executeAt;
        return this;
    }
    public set executeAt(executeAt: number  | undefined) {
        this['execute_at'] = executeAt;
    }
    public get executeAt(): number | undefined {
        return this['execute_at'];
    }
    public withRowsAffected(rowsAffected: number): SqlItemDto {
        this['rows_affected'] = rowsAffected;
        return this;
    }
    public set rowsAffected(rowsAffected: number  | undefined) {
        this['rows_affected'] = rowsAffected;
    }
    public get rowsAffected(): number | undefined {
        return this['rows_affected'];
    }
    public withRowsExamined(rowsExamined: number): SqlItemDto {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: number  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): number | undefined {
        return this['rows_examined'];
    }
    public withLockWaitTime(lockWaitTime: number): SqlItemDto {
        this['lock_wait_time'] = lockWaitTime;
        return this;
    }
    public set lockWaitTime(lockWaitTime: number  | undefined) {
        this['lock_wait_time'] = lockWaitTime;
    }
    public get lockWaitTime(): number | undefined {
        return this['lock_wait_time'];
    }
    public withRowsReturned(rowsReturned: number): SqlItemDto {
        this['rows_returned'] = rowsReturned;
        return this;
    }
    public set rowsReturned(rowsReturned: number  | undefined) {
        this['rows_returned'] = rowsReturned;
    }
    public get rowsReturned(): number | undefined {
        return this['rows_returned'];
    }
    public withTrxId(trxId: number): SqlItemDto {
        this['trx_id'] = trxId;
        return this;
    }
    public set trxId(trxId: number  | undefined) {
        this['trx_id'] = trxId;
    }
    public get trxId(): number | undefined {
        return this['trx_id'];
    }
    public withCpuTime(cpuTime: number): SqlItemDto {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: number  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): number | undefined {
        return this['cpu_time'];
    }
    public withSendBytes(sendBytes: number): SqlItemDto {
        this['send_bytes'] = sendBytes;
        return this;
    }
    public set sendBytes(sendBytes: number  | undefined) {
        this['send_bytes'] = sendBytes;
    }
    public get sendBytes(): number | undefined {
        return this['send_bytes'];
    }
    public withQueryTables(queryTables: string): SqlItemDto {
        this['query_tables'] = queryTables;
        return this;
    }
    public set queryTables(queryTables: string  | undefined) {
        this['query_tables'] = queryTables;
    }
    public get queryTables(): string | undefined {
        return this['query_tables'];
    }
    public withInnodbIoReadBytes(innodbIoReadBytes: number): SqlItemDto {
        this['innodb_io_read_bytes'] = innodbIoReadBytes;
        return this;
    }
    public set innodbIoReadBytes(innodbIoReadBytes: number  | undefined) {
        this['innodb_io_read_bytes'] = innodbIoReadBytes;
    }
    public get innodbIoReadBytes(): number | undefined {
        return this['innodb_io_read_bytes'];
    }
    public withInnodbIoRead(innodbIoRead: number): SqlItemDto {
        this['innodb_io_read'] = innodbIoRead;
        return this;
    }
    public set innodbIoRead(innodbIoRead: number  | undefined) {
        this['innodb_io_read'] = innodbIoRead;
    }
    public get innodbIoRead(): number | undefined {
        return this['innodb_io_read'];
    }
    public withInnodbIoReadWait(innodbIoReadWait: number): SqlItemDto {
        this['innodb_io_read_wait'] = innodbIoReadWait;
        return this;
    }
    public set innodbIoReadWait(innodbIoReadWait: number  | undefined) {
        this['innodb_io_read_wait'] = innodbIoReadWait;
    }
    public get innodbIoReadWait(): number | undefined {
        return this['innodb_io_read_wait'];
    }
    public withInnodbLockWait(innodbLockWait: number): SqlItemDto {
        this['innodb_lock_wait'] = innodbLockWait;
        return this;
    }
    public set innodbLockWait(innodbLockWait: number  | undefined) {
        this['innodb_lock_wait'] = innodbLockWait;
    }
    public get innodbLockWait(): number | undefined {
        return this['innodb_lock_wait'];
    }
    public withInnodbQueueWait(innodbQueueWait: number): SqlItemDto {
        this['innodb_queue_wait'] = innodbQueueWait;
        return this;
    }
    public set innodbQueueWait(innodbQueueWait: number  | undefined) {
        this['innodb_queue_wait'] = innodbQueueWait;
    }
    public get innodbQueueWait(): number | undefined {
        return this['innodb_queue_wait'];
    }
    public withKernelVersion(kernelVersion: string): SqlItemDto {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
    public withQueryTimeDetail(queryTimeDetail: string): SqlItemDto {
        this['query_time_detail'] = queryTimeDetail;
        return this;
    }
    public set queryTimeDetail(queryTimeDetail: string  | undefined) {
        this['query_time_detail'] = queryTimeDetail;
    }
    public get queryTimeDetail(): string | undefined {
        return this['query_time_detail'];
    }
    public withSessionId(sessionId: string): SqlItemDto {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withErrorNo(errorNo: number): SqlItemDto {
        this['error_no'] = errorNo;
        return this;
    }
    public set errorNo(errorNo: number  | undefined) {
        this['error_no'] = errorNo;
    }
    public get errorNo(): number | undefined {
        return this['error_no'];
    }
    public withNodeId(nodeId: string): SqlItemDto {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withLogicalReads(logicalReads: number): SqlItemDto {
        this['logical_reads'] = logicalReads;
        return this;
    }
    public set logicalReads(logicalReads: number  | undefined) {
        this['logical_reads'] = logicalReads;
    }
    public get logicalReads(): number | undefined {
        return this['logical_reads'];
    }
    public withPhysicalReads(physicalReads: number): SqlItemDto {
        this['physical_reads'] = physicalReads;
        return this;
    }
    public set physicalReads(physicalReads: number  | undefined) {
        this['physical_reads'] = physicalReads;
    }
    public get physicalReads(): number | undefined {
        return this['physical_reads'];
    }
    public withWrites(writes: number): SqlItemDto {
        this['writes'] = writes;
        return this;
    }
    public withAppName(appName: string): SqlItemDto {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
}


export class FullSqlResult {
    public id?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'component_id'?: string;
    private 'db_name'?: string;
    private 'schema_name'?: string;
    public username?: string;
    private 'application_name'?: string;
    private 'client_addr'?: string;
    private 'client_port'?: string;
    private 'sql_id'?: string;
    private 'sql_exec_id'?: string;
    private 'transaction_id'?: string;
    private 'trace_id'?: string;
    public query?: string;
    public sql?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'all_time'?: number;
    private 'db_time'?: number;
    private 'cpu_time'?: number;
    private 'data_io_time'?: number;
    private 'execution_time'?: number;
    private 'scan_lines'?: number;
    private 'insert_rows'?: number;
    private 'update_rows'?: number;
    private 'delete_rows'?: number;
    private 'is_slow_sql'?: boolean;
    private 'start_timestamp'?: number;
    private 'finish_timestamp'?: number;
    private 'hit_rate'?: number;
    public constructor() { 
    }
    public withId(id: string): FullSqlResult {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): FullSqlResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): FullSqlResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): FullSqlResult {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withDbName(dbName: string): FullSqlResult {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): FullSqlResult {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withUsername(username: string): FullSqlResult {
        this['username'] = username;
        return this;
    }
    public withApplicationName(applicationName: string): FullSqlResult {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withClientAddr(clientAddr: string): FullSqlResult {
        this['client_addr'] = clientAddr;
        return this;
    }
    public set clientAddr(clientAddr: string  | undefined) {
        this['client_addr'] = clientAddr;
    }
    public get clientAddr(): string | undefined {
        return this['client_addr'];
    }
    public withClientPort(clientPort: string): FullSqlResult {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: string  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): string | undefined {
        return this['client_port'];
    }
    public withSqlId(sqlId: string): FullSqlResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlExecId(sqlExecId: string): FullSqlResult {
        this['sql_exec_id'] = sqlExecId;
        return this;
    }
    public set sqlExecId(sqlExecId: string  | undefined) {
        this['sql_exec_id'] = sqlExecId;
    }
    public get sqlExecId(): string | undefined {
        return this['sql_exec_id'];
    }
    public withTransactionId(transactionId: string): FullSqlResult {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withTraceId(traceId: string): FullSqlResult {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withQuery(query: string): FullSqlResult {
        this['query'] = query;
        return this;
    }
    public withSql(sql: string): FullSqlResult {
        this['sql'] = sql;
        return this;
    }
    public withBeginTime(beginTime: string): FullSqlResult {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): FullSqlResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withAllTime(allTime: number): FullSqlResult {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withDbTime(dbTime: number): FullSqlResult {
        this['db_time'] = dbTime;
        return this;
    }
    public set dbTime(dbTime: number  | undefined) {
        this['db_time'] = dbTime;
    }
    public get dbTime(): number | undefined {
        return this['db_time'];
    }
    public withCpuTime(cpuTime: number): FullSqlResult {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: number  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): number | undefined {
        return this['cpu_time'];
    }
    public withDataIoTime(dataIoTime: number): FullSqlResult {
        this['data_io_time'] = dataIoTime;
        return this;
    }
    public set dataIoTime(dataIoTime: number  | undefined) {
        this['data_io_time'] = dataIoTime;
    }
    public get dataIoTime(): number | undefined {
        return this['data_io_time'];
    }
    public withExecutionTime(executionTime: number): FullSqlResult {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: number  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): number | undefined {
        return this['execution_time'];
    }
    public withScanLines(scanLines: number): FullSqlResult {
        this['scan_lines'] = scanLines;
        return this;
    }
    public set scanLines(scanLines: number  | undefined) {
        this['scan_lines'] = scanLines;
    }
    public get scanLines(): number | undefined {
        return this['scan_lines'];
    }
    public withInsertRows(insertRows: number): FullSqlResult {
        this['insert_rows'] = insertRows;
        return this;
    }
    public set insertRows(insertRows: number  | undefined) {
        this['insert_rows'] = insertRows;
    }
    public get insertRows(): number | undefined {
        return this['insert_rows'];
    }
    public withUpdateRows(updateRows: number): FullSqlResult {
        this['update_rows'] = updateRows;
        return this;
    }
    public set updateRows(updateRows: number  | undefined) {
        this['update_rows'] = updateRows;
    }
    public get updateRows(): number | undefined {
        return this['update_rows'];
    }
    public withDeleteRows(deleteRows: number): FullSqlResult {
        this['delete_rows'] = deleteRows;
        return this;
    }
    public set deleteRows(deleteRows: number  | undefined) {
        this['delete_rows'] = deleteRows;
    }
    public get deleteRows(): number | undefined {
        return this['delete_rows'];
    }
    public withIsSlowSql(isSlowSql: boolean): FullSqlResult {
        this['is_slow_sql'] = isSlowSql;
        return this;
    }
    public set isSlowSql(isSlowSql: boolean  | undefined) {
        this['is_slow_sql'] = isSlowSql;
    }
    public get isSlowSql(): boolean | undefined {
        return this['is_slow_sql'];
    }
    public withStartTimestamp(startTimestamp: number): FullSqlResult {
        this['start_timestamp'] = startTimestamp;
        return this;
    }
    public set startTimestamp(startTimestamp: number  | undefined) {
        this['start_timestamp'] = startTimestamp;
    }
    public get startTimestamp(): number | undefined {
        return this['start_timestamp'];
    }
    public withFinishTimestamp(finishTimestamp: number): FullSqlResult {
        this['finish_timestamp'] = finishTimestamp;
        return this;
    }
    public set finishTimestamp(finishTimestamp: number  | undefined) {
        this['finish_timestamp'] = finishTimestamp;
    }
    public get finishTimestamp(): number | undefined {
        return this['finish_timestamp'];
    }
    public withHitRate(hitRate: number): FullSqlResult {
        this['hit_rate'] = hitRate;
        return this;
    }
    public set hitRate(hitRate: number  | undefined) {
        this['hit_rate'] = hitRate;
    }
    public get hitRate(): number | undefined {
        return this['hit_rate'];
    }
}
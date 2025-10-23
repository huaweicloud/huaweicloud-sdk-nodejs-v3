

export class FullSqlComponetResult {
    private 'component_id'?: string;
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'origin_node'?: string;
    public username?: string;
    private 'application_name'?: string;
    private 'client_addr'?: string;
    private 'client_port'?: string;
    private 'parent_sql_id'?: string;
    private 'sql_id'?: string;
    private 'sql_exec_id'?: string;
    private 'transaction_id'?: string;
    private 'trace_id'?: string;
    public query?: string;
    private 'thread_id'?: string;
    private 'session_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'slow_query_threshold'?: number;
    private 'n_soft_parse'?: number;
    private 'n_hard_parse'?: number;
    private 'query_plan'?: string;
    private 'n_return_rows'?: number;
    private 'n_tuples_fetched'?: number;
    private 'n_tuples_returned'?: number;
    private 'n_tuples_inserted'?: number;
    private 'n_tuples_updated'?: number;
    private 'n_tuples_deleted'?: number;
    private 'n_blocks_fetched'?: number;
    private 'n_blocks_hit'?: number;
    private 'db_time'?: number;
    private 'cpu_time'?: number;
    private 'execution_time'?: number;
    private 'parse_time'?: number;
    private 'plan_time'?: number;
    private 'rewrite_time'?: number;
    private 'pl_execution_time'?: number;
    private 'pl_compilation_time'?: number;
    private 'data_io_time'?: number;
    private 'lock_count'?: number;
    private 'lock_time'?: number;
    private 'lock_wait_count'?: number;
    private 'lock_wait_time'?: number;
    public details?: string;
    private 'is_slow_sql'?: boolean;
    public advise?: string;
    private 'finish_status'?: string;
    private 'net_send_info'?: string;
    private 'net_recv_info'?: string;
    private 'net_stream_send_info'?: string;
    private 'net_stream_recv_info'?: string;
    public constructor() { 
    }
    public withComponentId(componentId: string): FullSqlComponetResult {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withDbName(dbName: string): FullSqlComponetResult {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): FullSqlComponetResult {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withOriginNode(originNode: string): FullSqlComponetResult {
        this['origin_node'] = originNode;
        return this;
    }
    public set originNode(originNode: string  | undefined) {
        this['origin_node'] = originNode;
    }
    public get originNode(): string | undefined {
        return this['origin_node'];
    }
    public withUsername(username: string): FullSqlComponetResult {
        this['username'] = username;
        return this;
    }
    public withApplicationName(applicationName: string): FullSqlComponetResult {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withClientAddr(clientAddr: string): FullSqlComponetResult {
        this['client_addr'] = clientAddr;
        return this;
    }
    public set clientAddr(clientAddr: string  | undefined) {
        this['client_addr'] = clientAddr;
    }
    public get clientAddr(): string | undefined {
        return this['client_addr'];
    }
    public withClientPort(clientPort: string): FullSqlComponetResult {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: string  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): string | undefined {
        return this['client_port'];
    }
    public withParentSqlId(parentSqlId: string): FullSqlComponetResult {
        this['parent_sql_id'] = parentSqlId;
        return this;
    }
    public set parentSqlId(parentSqlId: string  | undefined) {
        this['parent_sql_id'] = parentSqlId;
    }
    public get parentSqlId(): string | undefined {
        return this['parent_sql_id'];
    }
    public withSqlId(sqlId: string): FullSqlComponetResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withSqlExecId(sqlExecId: string): FullSqlComponetResult {
        this['sql_exec_id'] = sqlExecId;
        return this;
    }
    public set sqlExecId(sqlExecId: string  | undefined) {
        this['sql_exec_id'] = sqlExecId;
    }
    public get sqlExecId(): string | undefined {
        return this['sql_exec_id'];
    }
    public withTransactionId(transactionId: string): FullSqlComponetResult {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withTraceId(traceId: string): FullSqlComponetResult {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withQuery(query: string): FullSqlComponetResult {
        this['query'] = query;
        return this;
    }
    public withThreadId(threadId: string): FullSqlComponetResult {
        this['thread_id'] = threadId;
        return this;
    }
    public set threadId(threadId: string  | undefined) {
        this['thread_id'] = threadId;
    }
    public get threadId(): string | undefined {
        return this['thread_id'];
    }
    public withSessionId(sessionId: string): FullSqlComponetResult {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withBeginTime(beginTime: string): FullSqlComponetResult {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): FullSqlComponetResult {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSlowQueryThreshold(slowQueryThreshold: number): FullSqlComponetResult {
        this['slow_query_threshold'] = slowQueryThreshold;
        return this;
    }
    public set slowQueryThreshold(slowQueryThreshold: number  | undefined) {
        this['slow_query_threshold'] = slowQueryThreshold;
    }
    public get slowQueryThreshold(): number | undefined {
        return this['slow_query_threshold'];
    }
    public withNSoftParse(nSoftParse: number): FullSqlComponetResult {
        this['n_soft_parse'] = nSoftParse;
        return this;
    }
    public set nSoftParse(nSoftParse: number  | undefined) {
        this['n_soft_parse'] = nSoftParse;
    }
    public get nSoftParse(): number | undefined {
        return this['n_soft_parse'];
    }
    public withNHardParse(nHardParse: number): FullSqlComponetResult {
        this['n_hard_parse'] = nHardParse;
        return this;
    }
    public set nHardParse(nHardParse: number  | undefined) {
        this['n_hard_parse'] = nHardParse;
    }
    public get nHardParse(): number | undefined {
        return this['n_hard_parse'];
    }
    public withQueryPlan(queryPlan: string): FullSqlComponetResult {
        this['query_plan'] = queryPlan;
        return this;
    }
    public set queryPlan(queryPlan: string  | undefined) {
        this['query_plan'] = queryPlan;
    }
    public get queryPlan(): string | undefined {
        return this['query_plan'];
    }
    public withNReturnRows(nReturnRows: number): FullSqlComponetResult {
        this['n_return_rows'] = nReturnRows;
        return this;
    }
    public set nReturnRows(nReturnRows: number  | undefined) {
        this['n_return_rows'] = nReturnRows;
    }
    public get nReturnRows(): number | undefined {
        return this['n_return_rows'];
    }
    public withNTuplesFetched(nTuplesFetched: number): FullSqlComponetResult {
        this['n_tuples_fetched'] = nTuplesFetched;
        return this;
    }
    public set nTuplesFetched(nTuplesFetched: number  | undefined) {
        this['n_tuples_fetched'] = nTuplesFetched;
    }
    public get nTuplesFetched(): number | undefined {
        return this['n_tuples_fetched'];
    }
    public withNTuplesReturned(nTuplesReturned: number): FullSqlComponetResult {
        this['n_tuples_returned'] = nTuplesReturned;
        return this;
    }
    public set nTuplesReturned(nTuplesReturned: number  | undefined) {
        this['n_tuples_returned'] = nTuplesReturned;
    }
    public get nTuplesReturned(): number | undefined {
        return this['n_tuples_returned'];
    }
    public withNTuplesInserted(nTuplesInserted: number): FullSqlComponetResult {
        this['n_tuples_inserted'] = nTuplesInserted;
        return this;
    }
    public set nTuplesInserted(nTuplesInserted: number  | undefined) {
        this['n_tuples_inserted'] = nTuplesInserted;
    }
    public get nTuplesInserted(): number | undefined {
        return this['n_tuples_inserted'];
    }
    public withNTuplesUpdated(nTuplesUpdated: number): FullSqlComponetResult {
        this['n_tuples_updated'] = nTuplesUpdated;
        return this;
    }
    public set nTuplesUpdated(nTuplesUpdated: number  | undefined) {
        this['n_tuples_updated'] = nTuplesUpdated;
    }
    public get nTuplesUpdated(): number | undefined {
        return this['n_tuples_updated'];
    }
    public withNTuplesDeleted(nTuplesDeleted: number): FullSqlComponetResult {
        this['n_tuples_deleted'] = nTuplesDeleted;
        return this;
    }
    public set nTuplesDeleted(nTuplesDeleted: number  | undefined) {
        this['n_tuples_deleted'] = nTuplesDeleted;
    }
    public get nTuplesDeleted(): number | undefined {
        return this['n_tuples_deleted'];
    }
    public withNBlocksFetched(nBlocksFetched: number): FullSqlComponetResult {
        this['n_blocks_fetched'] = nBlocksFetched;
        return this;
    }
    public set nBlocksFetched(nBlocksFetched: number  | undefined) {
        this['n_blocks_fetched'] = nBlocksFetched;
    }
    public get nBlocksFetched(): number | undefined {
        return this['n_blocks_fetched'];
    }
    public withNBlocksHit(nBlocksHit: number): FullSqlComponetResult {
        this['n_blocks_hit'] = nBlocksHit;
        return this;
    }
    public set nBlocksHit(nBlocksHit: number  | undefined) {
        this['n_blocks_hit'] = nBlocksHit;
    }
    public get nBlocksHit(): number | undefined {
        return this['n_blocks_hit'];
    }
    public withDbTime(dbTime: number): FullSqlComponetResult {
        this['db_time'] = dbTime;
        return this;
    }
    public set dbTime(dbTime: number  | undefined) {
        this['db_time'] = dbTime;
    }
    public get dbTime(): number | undefined {
        return this['db_time'];
    }
    public withCpuTime(cpuTime: number): FullSqlComponetResult {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: number  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): number | undefined {
        return this['cpu_time'];
    }
    public withExecutionTime(executionTime: number): FullSqlComponetResult {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: number  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): number | undefined {
        return this['execution_time'];
    }
    public withParseTime(parseTime: number): FullSqlComponetResult {
        this['parse_time'] = parseTime;
        return this;
    }
    public set parseTime(parseTime: number  | undefined) {
        this['parse_time'] = parseTime;
    }
    public get parseTime(): number | undefined {
        return this['parse_time'];
    }
    public withPlanTime(planTime: number): FullSqlComponetResult {
        this['plan_time'] = planTime;
        return this;
    }
    public set planTime(planTime: number  | undefined) {
        this['plan_time'] = planTime;
    }
    public get planTime(): number | undefined {
        return this['plan_time'];
    }
    public withRewriteTime(rewriteTime: number): FullSqlComponetResult {
        this['rewrite_time'] = rewriteTime;
        return this;
    }
    public set rewriteTime(rewriteTime: number  | undefined) {
        this['rewrite_time'] = rewriteTime;
    }
    public get rewriteTime(): number | undefined {
        return this['rewrite_time'];
    }
    public withPlExecutionTime(plExecutionTime: number): FullSqlComponetResult {
        this['pl_execution_time'] = plExecutionTime;
        return this;
    }
    public set plExecutionTime(plExecutionTime: number  | undefined) {
        this['pl_execution_time'] = plExecutionTime;
    }
    public get plExecutionTime(): number | undefined {
        return this['pl_execution_time'];
    }
    public withPlCompilationTime(plCompilationTime: number): FullSqlComponetResult {
        this['pl_compilation_time'] = plCompilationTime;
        return this;
    }
    public set plCompilationTime(plCompilationTime: number  | undefined) {
        this['pl_compilation_time'] = plCompilationTime;
    }
    public get plCompilationTime(): number | undefined {
        return this['pl_compilation_time'];
    }
    public withDataIoTime(dataIoTime: number): FullSqlComponetResult {
        this['data_io_time'] = dataIoTime;
        return this;
    }
    public set dataIoTime(dataIoTime: number  | undefined) {
        this['data_io_time'] = dataIoTime;
    }
    public get dataIoTime(): number | undefined {
        return this['data_io_time'];
    }
    public withLockCount(lockCount: number): FullSqlComponetResult {
        this['lock_count'] = lockCount;
        return this;
    }
    public set lockCount(lockCount: number  | undefined) {
        this['lock_count'] = lockCount;
    }
    public get lockCount(): number | undefined {
        return this['lock_count'];
    }
    public withLockTime(lockTime: number): FullSqlComponetResult {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
    public withLockWaitCount(lockWaitCount: number): FullSqlComponetResult {
        this['lock_wait_count'] = lockWaitCount;
        return this;
    }
    public set lockWaitCount(lockWaitCount: number  | undefined) {
        this['lock_wait_count'] = lockWaitCount;
    }
    public get lockWaitCount(): number | undefined {
        return this['lock_wait_count'];
    }
    public withLockWaitTime(lockWaitTime: number): FullSqlComponetResult {
        this['lock_wait_time'] = lockWaitTime;
        return this;
    }
    public set lockWaitTime(lockWaitTime: number  | undefined) {
        this['lock_wait_time'] = lockWaitTime;
    }
    public get lockWaitTime(): number | undefined {
        return this['lock_wait_time'];
    }
    public withDetails(details: string): FullSqlComponetResult {
        this['details'] = details;
        return this;
    }
    public withIsSlowSql(isSlowSql: boolean): FullSqlComponetResult {
        this['is_slow_sql'] = isSlowSql;
        return this;
    }
    public set isSlowSql(isSlowSql: boolean  | undefined) {
        this['is_slow_sql'] = isSlowSql;
    }
    public get isSlowSql(): boolean | undefined {
        return this['is_slow_sql'];
    }
    public withAdvise(advise: string): FullSqlComponetResult {
        this['advise'] = advise;
        return this;
    }
    public withFinishStatus(finishStatus: string): FullSqlComponetResult {
        this['finish_status'] = finishStatus;
        return this;
    }
    public set finishStatus(finishStatus: string  | undefined) {
        this['finish_status'] = finishStatus;
    }
    public get finishStatus(): string | undefined {
        return this['finish_status'];
    }
    public withNetSendInfo(netSendInfo: string): FullSqlComponetResult {
        this['net_send_info'] = netSendInfo;
        return this;
    }
    public set netSendInfo(netSendInfo: string  | undefined) {
        this['net_send_info'] = netSendInfo;
    }
    public get netSendInfo(): string | undefined {
        return this['net_send_info'];
    }
    public withNetRecvInfo(netRecvInfo: string): FullSqlComponetResult {
        this['net_recv_info'] = netRecvInfo;
        return this;
    }
    public set netRecvInfo(netRecvInfo: string  | undefined) {
        this['net_recv_info'] = netRecvInfo;
    }
    public get netRecvInfo(): string | undefined {
        return this['net_recv_info'];
    }
    public withNetStreamSendInfo(netStreamSendInfo: string): FullSqlComponetResult {
        this['net_stream_send_info'] = netStreamSendInfo;
        return this;
    }
    public set netStreamSendInfo(netStreamSendInfo: string  | undefined) {
        this['net_stream_send_info'] = netStreamSendInfo;
    }
    public get netStreamSendInfo(): string | undefined {
        return this['net_stream_send_info'];
    }
    public withNetStreamRecvInfo(netStreamRecvInfo: string): FullSqlComponetResult {
        this['net_stream_recv_info'] = netStreamRecvInfo;
        return this;
    }
    public set netStreamRecvInfo(netStreamRecvInfo: string  | undefined) {
        this['net_stream_recv_info'] = netStreamRecvInfo;
    }
    public get netStreamRecvInfo(): string | undefined {
        return this['net_stream_recv_info'];
    }
}
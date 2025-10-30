

export class RealTimeSessionResult {
    private 'session_id'?: string;
    public pid?: string;
    private 'unique_sql_id'?: string;
    private 'database_name'?: string;
    private 'client_ip'?: string;
    private 'user_name'?: string;
    public wait?: string;
    private 'block_session'?: string;
    private 'wait_event'?: string;
    public state?: string;
    private 'query_runtime'?: string;
    public query?: string;
    private 'back_end_start'?: number;
    private 'transaction_start'?: number;
    private 'query_start'?: number;
    private 'application_name'?: string;
    private 'exec_time'?: string;
    private 'trans_num'?: string;
    private 'rollback_num'?: string;
    private 'sql_num'?: string;
    private 'client_port'?: string;
    private 'query_id'?: string;
    private 'transaction_time_cost'?: string;
    private 'trace_id'?: string;
    private 'global_session_id'?: string;
    private 'top_transaction_id'?: string;
    private 'current_transaction_id'?: string;
    private 'xlog_quantity_pretty'?: string;
    private 'wait_status'?: string;
    private 'lwt_id'?: string;
    private 'thread_name'?: string;
    private 'lock_mode'?: string;
    private 'parent_session_id'?: string;
    private 'smp_id'?: string;
    private 'lock_tag'?: string;
    private 'component_name'?: string;
    public constructor() { 
    }
    public withSessionId(sessionId: string): RealTimeSessionResult {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withPid(pid: string): RealTimeSessionResult {
        this['pid'] = pid;
        return this;
    }
    public withUniqueSqlId(uniqueSqlId: string): RealTimeSessionResult {
        this['unique_sql_id'] = uniqueSqlId;
        return this;
    }
    public set uniqueSqlId(uniqueSqlId: string  | undefined) {
        this['unique_sql_id'] = uniqueSqlId;
    }
    public get uniqueSqlId(): string | undefined {
        return this['unique_sql_id'];
    }
    public withDatabaseName(databaseName: string): RealTimeSessionResult {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withClientIp(clientIp: string): RealTimeSessionResult {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withUserName(userName: string): RealTimeSessionResult {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withWait(wait: string): RealTimeSessionResult {
        this['wait'] = wait;
        return this;
    }
    public withBlockSession(blockSession: string): RealTimeSessionResult {
        this['block_session'] = blockSession;
        return this;
    }
    public set blockSession(blockSession: string  | undefined) {
        this['block_session'] = blockSession;
    }
    public get blockSession(): string | undefined {
        return this['block_session'];
    }
    public withWaitEvent(waitEvent: string): RealTimeSessionResult {
        this['wait_event'] = waitEvent;
        return this;
    }
    public set waitEvent(waitEvent: string  | undefined) {
        this['wait_event'] = waitEvent;
    }
    public get waitEvent(): string | undefined {
        return this['wait_event'];
    }
    public withState(state: string): RealTimeSessionResult {
        this['state'] = state;
        return this;
    }
    public withQueryRuntime(queryRuntime: string): RealTimeSessionResult {
        this['query_runtime'] = queryRuntime;
        return this;
    }
    public set queryRuntime(queryRuntime: string  | undefined) {
        this['query_runtime'] = queryRuntime;
    }
    public get queryRuntime(): string | undefined {
        return this['query_runtime'];
    }
    public withQuery(query: string): RealTimeSessionResult {
        this['query'] = query;
        return this;
    }
    public withBackEndStart(backEndStart: number): RealTimeSessionResult {
        this['back_end_start'] = backEndStart;
        return this;
    }
    public set backEndStart(backEndStart: number  | undefined) {
        this['back_end_start'] = backEndStart;
    }
    public get backEndStart(): number | undefined {
        return this['back_end_start'];
    }
    public withTransactionStart(transactionStart: number): RealTimeSessionResult {
        this['transaction_start'] = transactionStart;
        return this;
    }
    public set transactionStart(transactionStart: number  | undefined) {
        this['transaction_start'] = transactionStart;
    }
    public get transactionStart(): number | undefined {
        return this['transaction_start'];
    }
    public withQueryStart(queryStart: number): RealTimeSessionResult {
        this['query_start'] = queryStart;
        return this;
    }
    public set queryStart(queryStart: number  | undefined) {
        this['query_start'] = queryStart;
    }
    public get queryStart(): number | undefined {
        return this['query_start'];
    }
    public withApplicationName(applicationName: string): RealTimeSessionResult {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withExecTime(execTime: string): RealTimeSessionResult {
        this['exec_time'] = execTime;
        return this;
    }
    public set execTime(execTime: string  | undefined) {
        this['exec_time'] = execTime;
    }
    public get execTime(): string | undefined {
        return this['exec_time'];
    }
    public withTransNum(transNum: string): RealTimeSessionResult {
        this['trans_num'] = transNum;
        return this;
    }
    public set transNum(transNum: string  | undefined) {
        this['trans_num'] = transNum;
    }
    public get transNum(): string | undefined {
        return this['trans_num'];
    }
    public withRollbackNum(rollbackNum: string): RealTimeSessionResult {
        this['rollback_num'] = rollbackNum;
        return this;
    }
    public set rollbackNum(rollbackNum: string  | undefined) {
        this['rollback_num'] = rollbackNum;
    }
    public get rollbackNum(): string | undefined {
        return this['rollback_num'];
    }
    public withSqlNum(sqlNum: string): RealTimeSessionResult {
        this['sql_num'] = sqlNum;
        return this;
    }
    public set sqlNum(sqlNum: string  | undefined) {
        this['sql_num'] = sqlNum;
    }
    public get sqlNum(): string | undefined {
        return this['sql_num'];
    }
    public withClientPort(clientPort: string): RealTimeSessionResult {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: string  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): string | undefined {
        return this['client_port'];
    }
    public withQueryId(queryId: string): RealTimeSessionResult {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withTransactionTimeCost(transactionTimeCost: string): RealTimeSessionResult {
        this['transaction_time_cost'] = transactionTimeCost;
        return this;
    }
    public set transactionTimeCost(transactionTimeCost: string  | undefined) {
        this['transaction_time_cost'] = transactionTimeCost;
    }
    public get transactionTimeCost(): string | undefined {
        return this['transaction_time_cost'];
    }
    public withTraceId(traceId: string): RealTimeSessionResult {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withGlobalSessionId(globalSessionId: string): RealTimeSessionResult {
        this['global_session_id'] = globalSessionId;
        return this;
    }
    public set globalSessionId(globalSessionId: string  | undefined) {
        this['global_session_id'] = globalSessionId;
    }
    public get globalSessionId(): string | undefined {
        return this['global_session_id'];
    }
    public withTopTransactionId(topTransactionId: string): RealTimeSessionResult {
        this['top_transaction_id'] = topTransactionId;
        return this;
    }
    public set topTransactionId(topTransactionId: string  | undefined) {
        this['top_transaction_id'] = topTransactionId;
    }
    public get topTransactionId(): string | undefined {
        return this['top_transaction_id'];
    }
    public withCurrentTransactionId(currentTransactionId: string): RealTimeSessionResult {
        this['current_transaction_id'] = currentTransactionId;
        return this;
    }
    public set currentTransactionId(currentTransactionId: string  | undefined) {
        this['current_transaction_id'] = currentTransactionId;
    }
    public get currentTransactionId(): string | undefined {
        return this['current_transaction_id'];
    }
    public withXlogQuantityPretty(xlogQuantityPretty: string): RealTimeSessionResult {
        this['xlog_quantity_pretty'] = xlogQuantityPretty;
        return this;
    }
    public set xlogQuantityPretty(xlogQuantityPretty: string  | undefined) {
        this['xlog_quantity_pretty'] = xlogQuantityPretty;
    }
    public get xlogQuantityPretty(): string | undefined {
        return this['xlog_quantity_pretty'];
    }
    public withWaitStatus(waitStatus: string): RealTimeSessionResult {
        this['wait_status'] = waitStatus;
        return this;
    }
    public set waitStatus(waitStatus: string  | undefined) {
        this['wait_status'] = waitStatus;
    }
    public get waitStatus(): string | undefined {
        return this['wait_status'];
    }
    public withLwtId(lwtId: string): RealTimeSessionResult {
        this['lwt_id'] = lwtId;
        return this;
    }
    public set lwtId(lwtId: string  | undefined) {
        this['lwt_id'] = lwtId;
    }
    public get lwtId(): string | undefined {
        return this['lwt_id'];
    }
    public withThreadName(threadName: string): RealTimeSessionResult {
        this['thread_name'] = threadName;
        return this;
    }
    public set threadName(threadName: string  | undefined) {
        this['thread_name'] = threadName;
    }
    public get threadName(): string | undefined {
        return this['thread_name'];
    }
    public withLockMode(lockMode: string): RealTimeSessionResult {
        this['lock_mode'] = lockMode;
        return this;
    }
    public set lockMode(lockMode: string  | undefined) {
        this['lock_mode'] = lockMode;
    }
    public get lockMode(): string | undefined {
        return this['lock_mode'];
    }
    public withParentSessionId(parentSessionId: string): RealTimeSessionResult {
        this['parent_session_id'] = parentSessionId;
        return this;
    }
    public set parentSessionId(parentSessionId: string  | undefined) {
        this['parent_session_id'] = parentSessionId;
    }
    public get parentSessionId(): string | undefined {
        return this['parent_session_id'];
    }
    public withSmpId(smpId: string): RealTimeSessionResult {
        this['smp_id'] = smpId;
        return this;
    }
    public set smpId(smpId: string  | undefined) {
        this['smp_id'] = smpId;
    }
    public get smpId(): string | undefined {
        return this['smp_id'];
    }
    public withLockTag(lockTag: string): RealTimeSessionResult {
        this['lock_tag'] = lockTag;
        return this;
    }
    public set lockTag(lockTag: string  | undefined) {
        this['lock_tag'] = lockTag;
    }
    public get lockTag(): string | undefined {
        return this['lock_tag'];
    }
    public withComponentName(componentName: string): RealTimeSessionResult {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
}
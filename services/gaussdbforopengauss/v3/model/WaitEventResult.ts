

export class WaitEventResult {
    private 'session_id'?: string;
    public pid?: string;
    private 'wait_event'?: string;
    private 'wait_status'?: string;
    private 'database_name'?: string;
    private 'user_name'?: string;
    private 'client_addr'?: string;
    private 'client_port'?: string;
    private 'session_time'?: string;
    private 'xact_start'?: string;
    private 'transaction_time'?: string;
    private 'query_start'?: string;
    private 'state_change'?: string;
    private 'query_time'?: string;
    private 'backend_start'?: string;
    public waiting?: string;
    public lockmode?: string;
    private 'block_sessionid'?: string;
    private 'block_count'?: string;
    private 'unique_sql_id'?: string;
    private 'query_id'?: string;
    public query?: string;
    private 'current_xid'?: string;
    private 'top_xid'?: string;
    private 'xlog_quantity'?: string;
    public state?: string;
    private 'application_name'?: string;
    private 'connection_info'?: string;
    public constructor() { 
    }
    public withSessionId(sessionId: string): WaitEventResult {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withPid(pid: string): WaitEventResult {
        this['pid'] = pid;
        return this;
    }
    public withWaitEvent(waitEvent: string): WaitEventResult {
        this['wait_event'] = waitEvent;
        return this;
    }
    public set waitEvent(waitEvent: string  | undefined) {
        this['wait_event'] = waitEvent;
    }
    public get waitEvent(): string | undefined {
        return this['wait_event'];
    }
    public withWaitStatus(waitStatus: string): WaitEventResult {
        this['wait_status'] = waitStatus;
        return this;
    }
    public set waitStatus(waitStatus: string  | undefined) {
        this['wait_status'] = waitStatus;
    }
    public get waitStatus(): string | undefined {
        return this['wait_status'];
    }
    public withDatabaseName(databaseName: string): WaitEventResult {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withUserName(userName: string): WaitEventResult {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withClientAddr(clientAddr: string): WaitEventResult {
        this['client_addr'] = clientAddr;
        return this;
    }
    public set clientAddr(clientAddr: string  | undefined) {
        this['client_addr'] = clientAddr;
    }
    public get clientAddr(): string | undefined {
        return this['client_addr'];
    }
    public withClientPort(clientPort: string): WaitEventResult {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: string  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): string | undefined {
        return this['client_port'];
    }
    public withSessionTime(sessionTime: string): WaitEventResult {
        this['session_time'] = sessionTime;
        return this;
    }
    public set sessionTime(sessionTime: string  | undefined) {
        this['session_time'] = sessionTime;
    }
    public get sessionTime(): string | undefined {
        return this['session_time'];
    }
    public withXactStart(xactStart: string): WaitEventResult {
        this['xact_start'] = xactStart;
        return this;
    }
    public set xactStart(xactStart: string  | undefined) {
        this['xact_start'] = xactStart;
    }
    public get xactStart(): string | undefined {
        return this['xact_start'];
    }
    public withTransactionTime(transactionTime: string): WaitEventResult {
        this['transaction_time'] = transactionTime;
        return this;
    }
    public set transactionTime(transactionTime: string  | undefined) {
        this['transaction_time'] = transactionTime;
    }
    public get transactionTime(): string | undefined {
        return this['transaction_time'];
    }
    public withQueryStart(queryStart: string): WaitEventResult {
        this['query_start'] = queryStart;
        return this;
    }
    public set queryStart(queryStart: string  | undefined) {
        this['query_start'] = queryStart;
    }
    public get queryStart(): string | undefined {
        return this['query_start'];
    }
    public withStateChange(stateChange: string): WaitEventResult {
        this['state_change'] = stateChange;
        return this;
    }
    public set stateChange(stateChange: string  | undefined) {
        this['state_change'] = stateChange;
    }
    public get stateChange(): string | undefined {
        return this['state_change'];
    }
    public withQueryTime(queryTime: string): WaitEventResult {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: string  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): string | undefined {
        return this['query_time'];
    }
    public withBackendStart(backendStart: string): WaitEventResult {
        this['backend_start'] = backendStart;
        return this;
    }
    public set backendStart(backendStart: string  | undefined) {
        this['backend_start'] = backendStart;
    }
    public get backendStart(): string | undefined {
        return this['backend_start'];
    }
    public withWaiting(waiting: string): WaitEventResult {
        this['waiting'] = waiting;
        return this;
    }
    public withLockmode(lockmode: string): WaitEventResult {
        this['lockmode'] = lockmode;
        return this;
    }
    public withBlockSessionid(blockSessionid: string): WaitEventResult {
        this['block_sessionid'] = blockSessionid;
        return this;
    }
    public set blockSessionid(blockSessionid: string  | undefined) {
        this['block_sessionid'] = blockSessionid;
    }
    public get blockSessionid(): string | undefined {
        return this['block_sessionid'];
    }
    public withBlockCount(blockCount: string): WaitEventResult {
        this['block_count'] = blockCount;
        return this;
    }
    public set blockCount(blockCount: string  | undefined) {
        this['block_count'] = blockCount;
    }
    public get blockCount(): string | undefined {
        return this['block_count'];
    }
    public withUniqueSqlId(uniqueSqlId: string): WaitEventResult {
        this['unique_sql_id'] = uniqueSqlId;
        return this;
    }
    public set uniqueSqlId(uniqueSqlId: string  | undefined) {
        this['unique_sql_id'] = uniqueSqlId;
    }
    public get uniqueSqlId(): string | undefined {
        return this['unique_sql_id'];
    }
    public withQueryId(queryId: string): WaitEventResult {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withQuery(query: string): WaitEventResult {
        this['query'] = query;
        return this;
    }
    public withCurrentXid(currentXid: string): WaitEventResult {
        this['current_xid'] = currentXid;
        return this;
    }
    public set currentXid(currentXid: string  | undefined) {
        this['current_xid'] = currentXid;
    }
    public get currentXid(): string | undefined {
        return this['current_xid'];
    }
    public withTopXid(topXid: string): WaitEventResult {
        this['top_xid'] = topXid;
        return this;
    }
    public set topXid(topXid: string  | undefined) {
        this['top_xid'] = topXid;
    }
    public get topXid(): string | undefined {
        return this['top_xid'];
    }
    public withXlogQuantity(xlogQuantity: string): WaitEventResult {
        this['xlog_quantity'] = xlogQuantity;
        return this;
    }
    public set xlogQuantity(xlogQuantity: string  | undefined) {
        this['xlog_quantity'] = xlogQuantity;
    }
    public get xlogQuantity(): string | undefined {
        return this['xlog_quantity'];
    }
    public withState(state: string): WaitEventResult {
        this['state'] = state;
        return this;
    }
    public withApplicationName(applicationName: string): WaitEventResult {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withConnectionInfo(connectionInfo: string): WaitEventResult {
        this['connection_info'] = connectionInfo;
        return this;
    }
    public set connectionInfo(connectionInfo: string  | undefined) {
        this['connection_info'] = connectionInfo;
    }
    public get connectionInfo(): string | undefined {
        return this['connection_info'];
    }
}
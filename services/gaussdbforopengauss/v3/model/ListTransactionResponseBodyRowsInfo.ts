

export class ListTransactionResponseBodyRowsInfo {
    public sessionid?: number;
    public pid?: number;
    private 'query_id'?: number;
    public datname?: string;
    private 'client_addr'?: string;
    private 'client_port'?: number;
    public usename?: string;
    public query?: string;
    private 'backend_start'?: string;
    private 'xact_start'?: string;
    private 'application_name'?: string;
    public state?: string;
    private 'state_change'?: string;
    private 'query_start'?: string;
    public waiting?: string;
    private 'unique_sql_id'?: number;
    private 'top_xid'?: string;
    private 'current_xid'?: string;
    private 'exec_time'?: string;
    private 'xlog_quantity'?: number;
    public constructor() { 
    }
    public withSessionid(sessionid: number): ListTransactionResponseBodyRowsInfo {
        this['sessionid'] = sessionid;
        return this;
    }
    public withPid(pid: number): ListTransactionResponseBodyRowsInfo {
        this['pid'] = pid;
        return this;
    }
    public withQueryId(queryId: number): ListTransactionResponseBodyRowsInfo {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: number  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): number | undefined {
        return this['query_id'];
    }
    public withDatname(datname: string): ListTransactionResponseBodyRowsInfo {
        this['datname'] = datname;
        return this;
    }
    public withClientAddr(clientAddr: string): ListTransactionResponseBodyRowsInfo {
        this['client_addr'] = clientAddr;
        return this;
    }
    public set clientAddr(clientAddr: string  | undefined) {
        this['client_addr'] = clientAddr;
    }
    public get clientAddr(): string | undefined {
        return this['client_addr'];
    }
    public withClientPort(clientPort: number): ListTransactionResponseBodyRowsInfo {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: number  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): number | undefined {
        return this['client_port'];
    }
    public withUsename(usename: string): ListTransactionResponseBodyRowsInfo {
        this['usename'] = usename;
        return this;
    }
    public withQuery(query: string): ListTransactionResponseBodyRowsInfo {
        this['query'] = query;
        return this;
    }
    public withBackendStart(backendStart: string): ListTransactionResponseBodyRowsInfo {
        this['backend_start'] = backendStart;
        return this;
    }
    public set backendStart(backendStart: string  | undefined) {
        this['backend_start'] = backendStart;
    }
    public get backendStart(): string | undefined {
        return this['backend_start'];
    }
    public withXactStart(xactStart: string): ListTransactionResponseBodyRowsInfo {
        this['xact_start'] = xactStart;
        return this;
    }
    public set xactStart(xactStart: string  | undefined) {
        this['xact_start'] = xactStart;
    }
    public get xactStart(): string | undefined {
        return this['xact_start'];
    }
    public withApplicationName(applicationName: string): ListTransactionResponseBodyRowsInfo {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withState(state: string): ListTransactionResponseBodyRowsInfo {
        this['state'] = state;
        return this;
    }
    public withStateChange(stateChange: string): ListTransactionResponseBodyRowsInfo {
        this['state_change'] = stateChange;
        return this;
    }
    public set stateChange(stateChange: string  | undefined) {
        this['state_change'] = stateChange;
    }
    public get stateChange(): string | undefined {
        return this['state_change'];
    }
    public withQueryStart(queryStart: string): ListTransactionResponseBodyRowsInfo {
        this['query_start'] = queryStart;
        return this;
    }
    public set queryStart(queryStart: string  | undefined) {
        this['query_start'] = queryStart;
    }
    public get queryStart(): string | undefined {
        return this['query_start'];
    }
    public withWaiting(waiting: string): ListTransactionResponseBodyRowsInfo {
        this['waiting'] = waiting;
        return this;
    }
    public withUniqueSqlId(uniqueSqlId: number): ListTransactionResponseBodyRowsInfo {
        this['unique_sql_id'] = uniqueSqlId;
        return this;
    }
    public set uniqueSqlId(uniqueSqlId: number  | undefined) {
        this['unique_sql_id'] = uniqueSqlId;
    }
    public get uniqueSqlId(): number | undefined {
        return this['unique_sql_id'];
    }
    public withTopXid(topXid: string): ListTransactionResponseBodyRowsInfo {
        this['top_xid'] = topXid;
        return this;
    }
    public set topXid(topXid: string  | undefined) {
        this['top_xid'] = topXid;
    }
    public get topXid(): string | undefined {
        return this['top_xid'];
    }
    public withCurrentXid(currentXid: string): ListTransactionResponseBodyRowsInfo {
        this['current_xid'] = currentXid;
        return this;
    }
    public set currentXid(currentXid: string  | undefined) {
        this['current_xid'] = currentXid;
    }
    public get currentXid(): string | undefined {
        return this['current_xid'];
    }
    public withExecTime(execTime: string): ListTransactionResponseBodyRowsInfo {
        this['exec_time'] = execTime;
        return this;
    }
    public set execTime(execTime: string  | undefined) {
        this['exec_time'] = execTime;
    }
    public get execTime(): string | undefined {
        return this['exec_time'];
    }
    public withXlogQuantity(xlogQuantity: number): ListTransactionResponseBodyRowsInfo {
        this['xlog_quantity'] = xlogQuantity;
        return this;
    }
    public set xlogQuantity(xlogQuantity: number  | undefined) {
        this['xlog_quantity'] = xlogQuantity;
    }
    public get xlogQuantity(): number | undefined {
        return this['xlog_quantity'];
    }
}
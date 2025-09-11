

export class SlowSqlDetailResult {
    private 'sql_id'?: string;
    private 'user_name'?: string;
    private 'client_ip'?: string;
    private 'client_port'?: string;
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'sql_text'?: string;
    private 'query_plan'?: string;
    private 'start_time'?: number;
    private 'finish_time'?: number;
    private 'returned_rows'?: number;
    private 'fetched_rows'?: number;
    private 'fetched_pages'?: number;
    private 'hit_pages'?: number;
    private 'total_time'?: number;
    private 'cpu_time'?: number;
    private 'plan_time'?: number;
    private 'io_time'?: number;
    private 'lock_count'?: number;
    private 'lock_time'?: number;
    public constructor() { 
    }
    public withSqlId(sqlId: string): SlowSqlDetailResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withUserName(userName: string): SlowSqlDetailResult {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withClientIp(clientIp: string): SlowSqlDetailResult {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withClientPort(clientPort: string): SlowSqlDetailResult {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: string  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): string | undefined {
        return this['client_port'];
    }
    public withNodeId(nodeId: string): SlowSqlDetailResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): SlowSqlDetailResult {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withSqlText(sqlText: string): SlowSqlDetailResult {
        this['sql_text'] = sqlText;
        return this;
    }
    public set sqlText(sqlText: string  | undefined) {
        this['sql_text'] = sqlText;
    }
    public get sqlText(): string | undefined {
        return this['sql_text'];
    }
    public withQueryPlan(queryPlan: string): SlowSqlDetailResult {
        this['query_plan'] = queryPlan;
        return this;
    }
    public set queryPlan(queryPlan: string  | undefined) {
        this['query_plan'] = queryPlan;
    }
    public get queryPlan(): string | undefined {
        return this['query_plan'];
    }
    public withStartTime(startTime: number): SlowSqlDetailResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withFinishTime(finishTime: number): SlowSqlDetailResult {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: number  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): number | undefined {
        return this['finish_time'];
    }
    public withReturnedRows(returnedRows: number): SlowSqlDetailResult {
        this['returned_rows'] = returnedRows;
        return this;
    }
    public set returnedRows(returnedRows: number  | undefined) {
        this['returned_rows'] = returnedRows;
    }
    public get returnedRows(): number | undefined {
        return this['returned_rows'];
    }
    public withFetchedRows(fetchedRows: number): SlowSqlDetailResult {
        this['fetched_rows'] = fetchedRows;
        return this;
    }
    public set fetchedRows(fetchedRows: number  | undefined) {
        this['fetched_rows'] = fetchedRows;
    }
    public get fetchedRows(): number | undefined {
        return this['fetched_rows'];
    }
    public withFetchedPages(fetchedPages: number): SlowSqlDetailResult {
        this['fetched_pages'] = fetchedPages;
        return this;
    }
    public set fetchedPages(fetchedPages: number  | undefined) {
        this['fetched_pages'] = fetchedPages;
    }
    public get fetchedPages(): number | undefined {
        return this['fetched_pages'];
    }
    public withHitPages(hitPages: number): SlowSqlDetailResult {
        this['hit_pages'] = hitPages;
        return this;
    }
    public set hitPages(hitPages: number  | undefined) {
        this['hit_pages'] = hitPages;
    }
    public get hitPages(): number | undefined {
        return this['hit_pages'];
    }
    public withTotalTime(totalTime: number): SlowSqlDetailResult {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number  | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime(): number | undefined {
        return this['total_time'];
    }
    public withCpuTime(cpuTime: number): SlowSqlDetailResult {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: number  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): number | undefined {
        return this['cpu_time'];
    }
    public withPlanTime(planTime: number): SlowSqlDetailResult {
        this['plan_time'] = planTime;
        return this;
    }
    public set planTime(planTime: number  | undefined) {
        this['plan_time'] = planTime;
    }
    public get planTime(): number | undefined {
        return this['plan_time'];
    }
    public withIoTime(ioTime: number): SlowSqlDetailResult {
        this['io_time'] = ioTime;
        return this;
    }
    public set ioTime(ioTime: number  | undefined) {
        this['io_time'] = ioTime;
    }
    public get ioTime(): number | undefined {
        return this['io_time'];
    }
    public withLockCount(lockCount: number): SlowSqlDetailResult {
        this['lock_count'] = lockCount;
        return this;
    }
    public set lockCount(lockCount: number  | undefined) {
        this['lock_count'] = lockCount;
    }
    public get lockCount(): number | undefined {
        return this['lock_count'];
    }
    public withLockTime(lockTime: number): SlowSqlDetailResult {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
}
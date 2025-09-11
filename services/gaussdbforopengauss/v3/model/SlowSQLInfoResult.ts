

export class SlowSQLInfoResult {
    public sql?: string;
    private 'sql_id'?: string;
    private 'user_name'?: string;
    private 'sql_text'?: string;
    private 'query_plan'?: string;
    public calls?: string;
    private 'avg_exec_time'?: string;
    private 'avg_cpu_time'?: string;
    private 'avg_io_time'?: string;
    private 'avg_returned_rows'?: number;
    private 'avg_fetched_rows'?: number;
    private 'buffer_hit_ratio'?: string;
    private 'sql_hit_ratio'?: string;
    private 'node_id'?: string;
    private 'node_name'?: string;
    public constructor() { 
    }
    public withSql(sql: string): SlowSQLInfoResult {
        this['sql'] = sql;
        return this;
    }
    public withSqlId(sqlId: string): SlowSQLInfoResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withUserName(userName: string): SlowSQLInfoResult {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSqlText(sqlText: string): SlowSQLInfoResult {
        this['sql_text'] = sqlText;
        return this;
    }
    public set sqlText(sqlText: string  | undefined) {
        this['sql_text'] = sqlText;
    }
    public get sqlText(): string | undefined {
        return this['sql_text'];
    }
    public withQueryPlan(queryPlan: string): SlowSQLInfoResult {
        this['query_plan'] = queryPlan;
        return this;
    }
    public set queryPlan(queryPlan: string  | undefined) {
        this['query_plan'] = queryPlan;
    }
    public get queryPlan(): string | undefined {
        return this['query_plan'];
    }
    public withCalls(calls: string): SlowSQLInfoResult {
        this['calls'] = calls;
        return this;
    }
    public withAvgExecTime(avgExecTime: string): SlowSQLInfoResult {
        this['avg_exec_time'] = avgExecTime;
        return this;
    }
    public set avgExecTime(avgExecTime: string  | undefined) {
        this['avg_exec_time'] = avgExecTime;
    }
    public get avgExecTime(): string | undefined {
        return this['avg_exec_time'];
    }
    public withAvgCpuTime(avgCpuTime: string): SlowSQLInfoResult {
        this['avg_cpu_time'] = avgCpuTime;
        return this;
    }
    public set avgCpuTime(avgCpuTime: string  | undefined) {
        this['avg_cpu_time'] = avgCpuTime;
    }
    public get avgCpuTime(): string | undefined {
        return this['avg_cpu_time'];
    }
    public withAvgIoTime(avgIoTime: string): SlowSQLInfoResult {
        this['avg_io_time'] = avgIoTime;
        return this;
    }
    public set avgIoTime(avgIoTime: string  | undefined) {
        this['avg_io_time'] = avgIoTime;
    }
    public get avgIoTime(): string | undefined {
        return this['avg_io_time'];
    }
    public withAvgReturnedRows(avgReturnedRows: number): SlowSQLInfoResult {
        this['avg_returned_rows'] = avgReturnedRows;
        return this;
    }
    public set avgReturnedRows(avgReturnedRows: number  | undefined) {
        this['avg_returned_rows'] = avgReturnedRows;
    }
    public get avgReturnedRows(): number | undefined {
        return this['avg_returned_rows'];
    }
    public withAvgFetchedRows(avgFetchedRows: number): SlowSQLInfoResult {
        this['avg_fetched_rows'] = avgFetchedRows;
        return this;
    }
    public set avgFetchedRows(avgFetchedRows: number  | undefined) {
        this['avg_fetched_rows'] = avgFetchedRows;
    }
    public get avgFetchedRows(): number | undefined {
        return this['avg_fetched_rows'];
    }
    public withBufferHitRatio(bufferHitRatio: string): SlowSQLInfoResult {
        this['buffer_hit_ratio'] = bufferHitRatio;
        return this;
    }
    public set bufferHitRatio(bufferHitRatio: string  | undefined) {
        this['buffer_hit_ratio'] = bufferHitRatio;
    }
    public get bufferHitRatio(): string | undefined {
        return this['buffer_hit_ratio'];
    }
    public withSqlHitRatio(sqlHitRatio: string): SlowSQLInfoResult {
        this['sql_hit_ratio'] = sqlHitRatio;
        return this;
    }
    public set sqlHitRatio(sqlHitRatio: string  | undefined) {
        this['sql_hit_ratio'] = sqlHitRatio;
    }
    public get sqlHitRatio(): string | undefined {
        return this['sql_hit_ratio'];
    }
    public withNodeId(nodeId: string): SlowSQLInfoResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): SlowSQLInfoResult {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
}
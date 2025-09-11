

export class TopSQLInfoResult {
    private 'sql_id'?: string;
    private 'user_name'?: string;
    private 'sql_text'?: string;
    private 'calls_percent'?: string;
    private 'cpu_percent'?: string;
    private 'io_percent'?: string;
    public calls?: string;
    private 'returned_rows'?: string;
    private 'tuple_read'?: string;
    private 'avg_elapse_time'?: string;
    private 'total_elapse_time'?: string;
    private 'cpu_time'?: string;
    private 'io_time'?: string;
    private 'min_elapse_time'?: string;
    private 'max_elapse_time'?: string;
    private 'sql_hit_ratio'?: string;
    private 'node_id'?: string;
    private 'db_name'?: string;
    private 'node_name'?: string;
    public constructor() { 
    }
    public withSqlId(sqlId: string): TopSQLInfoResult {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
    public withUserName(userName: string): TopSQLInfoResult {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSqlText(sqlText: string): TopSQLInfoResult {
        this['sql_text'] = sqlText;
        return this;
    }
    public set sqlText(sqlText: string  | undefined) {
        this['sql_text'] = sqlText;
    }
    public get sqlText(): string | undefined {
        return this['sql_text'];
    }
    public withCallsPercent(callsPercent: string): TopSQLInfoResult {
        this['calls_percent'] = callsPercent;
        return this;
    }
    public set callsPercent(callsPercent: string  | undefined) {
        this['calls_percent'] = callsPercent;
    }
    public get callsPercent(): string | undefined {
        return this['calls_percent'];
    }
    public withCpuPercent(cpuPercent: string): TopSQLInfoResult {
        this['cpu_percent'] = cpuPercent;
        return this;
    }
    public set cpuPercent(cpuPercent: string  | undefined) {
        this['cpu_percent'] = cpuPercent;
    }
    public get cpuPercent(): string | undefined {
        return this['cpu_percent'];
    }
    public withIoPercent(ioPercent: string): TopSQLInfoResult {
        this['io_percent'] = ioPercent;
        return this;
    }
    public set ioPercent(ioPercent: string  | undefined) {
        this['io_percent'] = ioPercent;
    }
    public get ioPercent(): string | undefined {
        return this['io_percent'];
    }
    public withCalls(calls: string): TopSQLInfoResult {
        this['calls'] = calls;
        return this;
    }
    public withReturnedRows(returnedRows: string): TopSQLInfoResult {
        this['returned_rows'] = returnedRows;
        return this;
    }
    public set returnedRows(returnedRows: string  | undefined) {
        this['returned_rows'] = returnedRows;
    }
    public get returnedRows(): string | undefined {
        return this['returned_rows'];
    }
    public withTupleRead(tupleRead: string): TopSQLInfoResult {
        this['tuple_read'] = tupleRead;
        return this;
    }
    public set tupleRead(tupleRead: string  | undefined) {
        this['tuple_read'] = tupleRead;
    }
    public get tupleRead(): string | undefined {
        return this['tuple_read'];
    }
    public withAvgElapseTime(avgElapseTime: string): TopSQLInfoResult {
        this['avg_elapse_time'] = avgElapseTime;
        return this;
    }
    public set avgElapseTime(avgElapseTime: string  | undefined) {
        this['avg_elapse_time'] = avgElapseTime;
    }
    public get avgElapseTime(): string | undefined {
        return this['avg_elapse_time'];
    }
    public withTotalElapseTime(totalElapseTime: string): TopSQLInfoResult {
        this['total_elapse_time'] = totalElapseTime;
        return this;
    }
    public set totalElapseTime(totalElapseTime: string  | undefined) {
        this['total_elapse_time'] = totalElapseTime;
    }
    public get totalElapseTime(): string | undefined {
        return this['total_elapse_time'];
    }
    public withCpuTime(cpuTime: string): TopSQLInfoResult {
        this['cpu_time'] = cpuTime;
        return this;
    }
    public set cpuTime(cpuTime: string  | undefined) {
        this['cpu_time'] = cpuTime;
    }
    public get cpuTime(): string | undefined {
        return this['cpu_time'];
    }
    public withIoTime(ioTime: string): TopSQLInfoResult {
        this['io_time'] = ioTime;
        return this;
    }
    public set ioTime(ioTime: string  | undefined) {
        this['io_time'] = ioTime;
    }
    public get ioTime(): string | undefined {
        return this['io_time'];
    }
    public withMinElapseTime(minElapseTime: string): TopSQLInfoResult {
        this['min_elapse_time'] = minElapseTime;
        return this;
    }
    public set minElapseTime(minElapseTime: string  | undefined) {
        this['min_elapse_time'] = minElapseTime;
    }
    public get minElapseTime(): string | undefined {
        return this['min_elapse_time'];
    }
    public withMaxElapseTime(maxElapseTime: string): TopSQLInfoResult {
        this['max_elapse_time'] = maxElapseTime;
        return this;
    }
    public set maxElapseTime(maxElapseTime: string  | undefined) {
        this['max_elapse_time'] = maxElapseTime;
    }
    public get maxElapseTime(): string | undefined {
        return this['max_elapse_time'];
    }
    public withSqlHitRatio(sqlHitRatio: string): TopSQLInfoResult {
        this['sql_hit_ratio'] = sqlHitRatio;
        return this;
    }
    public set sqlHitRatio(sqlHitRatio: string  | undefined) {
        this['sql_hit_ratio'] = sqlHitRatio;
    }
    public get sqlHitRatio(): string | undefined {
        return this['sql_hit_ratio'];
    }
    public withNodeId(nodeId: string): TopSQLInfoResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withDbName(dbName: string): TopSQLInfoResult {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withNodeName(nodeName: string): TopSQLInfoResult {
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
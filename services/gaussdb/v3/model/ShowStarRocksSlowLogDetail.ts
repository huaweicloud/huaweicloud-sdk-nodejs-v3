

export class ShowStarRocksSlowLogDetail {
    private 'node_id'?: string;
    public count?: string;
    public time?: string;
    private 'lock_time'?: string;
    private 'rows_sent'?: string;
    private 'rows_examined'?: string;
    public database?: string;
    public users?: string;
    private 'query_sample'?: string;
    public type?: string;
    private 'start_time'?: string;
    private 'client_ip'?: string;
    private 'line_num'?: string;
    private 'slow_log_date'?: number;
    public constructor() { 
    }
    public withNodeId(nodeId: string): ShowStarRocksSlowLogDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withCount(count: string): ShowStarRocksSlowLogDetail {
        this['count'] = count;
        return this;
    }
    public withTime(time: string): ShowStarRocksSlowLogDetail {
        this['time'] = time;
        return this;
    }
    public withLockTime(lockTime: string): ShowStarRocksSlowLogDetail {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withRowsSent(rowsSent: string): ShowStarRocksSlowLogDetail {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: string  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): string | undefined {
        return this['rows_sent'];
    }
    public withRowsExamined(rowsExamined: string): ShowStarRocksSlowLogDetail {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: string  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): string | undefined {
        return this['rows_examined'];
    }
    public withDatabase(database: string): ShowStarRocksSlowLogDetail {
        this['database'] = database;
        return this;
    }
    public withUsers(users: string): ShowStarRocksSlowLogDetail {
        this['users'] = users;
        return this;
    }
    public withQuerySample(querySample: string): ShowStarRocksSlowLogDetail {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withType(type: string): ShowStarRocksSlowLogDetail {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): ShowStarRocksSlowLogDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withClientIp(clientIp: string): ShowStarRocksSlowLogDetail {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withLineNum(lineNum: string): ShowStarRocksSlowLogDetail {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withSlowLogDate(slowLogDate: number): ShowStarRocksSlowLogDetail {
        this['slow_log_date'] = slowLogDate;
        return this;
    }
    public set slowLogDate(slowLogDate: number  | undefined) {
        this['slow_log_date'] = slowLogDate;
    }
    public get slowLogDate(): number | undefined {
        return this['slow_log_date'];
    }
}


export class LtsLogSlowDetail {
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
    public constructor() { 
    }
    public withNodeId(nodeId: string): LtsLogSlowDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withCount(count: string): LtsLogSlowDetail {
        this['count'] = count;
        return this;
    }
    public withTime(time: string): LtsLogSlowDetail {
        this['time'] = time;
        return this;
    }
    public withLockTime(lockTime: string): LtsLogSlowDetail {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withRowsSent(rowsSent: string): LtsLogSlowDetail {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: string  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): string | undefined {
        return this['rows_sent'];
    }
    public withRowsExamined(rowsExamined: string): LtsLogSlowDetail {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: string  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): string | undefined {
        return this['rows_examined'];
    }
    public withDatabase(database: string): LtsLogSlowDetail {
        this['database'] = database;
        return this;
    }
    public withUsers(users: string): LtsLogSlowDetail {
        this['users'] = users;
        return this;
    }
    public withQuerySample(querySample: string): LtsLogSlowDetail {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withType(type: string): LtsLogSlowDetail {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): LtsLogSlowDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withClientIp(clientIp: string): LtsLogSlowDetail {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withLineNum(lineNum: string): LtsLogSlowDetail {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
}
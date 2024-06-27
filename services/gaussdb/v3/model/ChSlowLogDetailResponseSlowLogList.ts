

export class ChSlowLogDetailResponseSlowLogList {
    private 'node_id'?: string;
    public time?: string;
    private 'lock_time'?: string;
    private 'rows_sent'?: number;
    private 'rows_examined'?: number;
    public database?: string;
    public users?: string;
    private 'query_sample'?: string;
    public type?: string;
    private 'client_ip'?: string;
    private 'start_time'?: string;
    private 'line_num'?: string;
    public count?: string;
    public constructor(nodeId?: string, time?: string, lockTime?: string, rowsSent?: number, rowsExamined?: number, database?: string, users?: string, querySample?: string, type?: string, clientIp?: string, startTime?: string, lineNum?: string, count?: string) { 
        this['node_id'] = nodeId;
        this['time'] = time;
        this['lock_time'] = lockTime;
        this['rows_sent'] = rowsSent;
        this['rows_examined'] = rowsExamined;
        this['database'] = database;
        this['users'] = users;
        this['query_sample'] = querySample;
        this['type'] = type;
        this['client_ip'] = clientIp;
        this['start_time'] = startTime;
        this['line_num'] = lineNum;
        this['count'] = count;
    }
    public withNodeId(nodeId: string): ChSlowLogDetailResponseSlowLogList {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withTime(time: string): ChSlowLogDetailResponseSlowLogList {
        this['time'] = time;
        return this;
    }
    public withLockTime(lockTime: string): ChSlowLogDetailResponseSlowLogList {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withRowsSent(rowsSent: number): ChSlowLogDetailResponseSlowLogList {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: number  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): number | undefined {
        return this['rows_sent'];
    }
    public withRowsExamined(rowsExamined: number): ChSlowLogDetailResponseSlowLogList {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: number  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): number | undefined {
        return this['rows_examined'];
    }
    public withDatabase(database: string): ChSlowLogDetailResponseSlowLogList {
        this['database'] = database;
        return this;
    }
    public withUsers(users: string): ChSlowLogDetailResponseSlowLogList {
        this['users'] = users;
        return this;
    }
    public withQuerySample(querySample: string): ChSlowLogDetailResponseSlowLogList {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withType(type: string): ChSlowLogDetailResponseSlowLogList {
        this['type'] = type;
        return this;
    }
    public withClientIp(clientIp: string): ChSlowLogDetailResponseSlowLogList {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withStartTime(startTime: string): ChSlowLogDetailResponseSlowLogList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withLineNum(lineNum: string): ChSlowLogDetailResponseSlowLogList {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withCount(count: string): ChSlowLogDetailResponseSlowLogList {
        this['count'] = count;
        return this;
    }
}
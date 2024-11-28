

export class ShowSlowLogStatisticsItem {
    private 'client_ip'?: string;
    public count?: string;
    public database?: string;
    private 'lock_time'?: string;
    private 'node_id'?: string;
    private 'query_sample'?: string;
    private 'rows_examined'?: number;
    private 'rows_sent'?: number;
    public time?: string;
    public type?: string;
    public users?: string;
    public constructor() { 
    }
    public withClientIp(clientIp: string): ShowSlowLogStatisticsItem {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withCount(count: string): ShowSlowLogStatisticsItem {
        this['count'] = count;
        return this;
    }
    public withDatabase(database: string): ShowSlowLogStatisticsItem {
        this['database'] = database;
        return this;
    }
    public withLockTime(lockTime: string): ShowSlowLogStatisticsItem {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withNodeId(nodeId: string): ShowSlowLogStatisticsItem {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withQuerySample(querySample: string): ShowSlowLogStatisticsItem {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withRowsExamined(rowsExamined: number): ShowSlowLogStatisticsItem {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: number  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): number | undefined {
        return this['rows_examined'];
    }
    public withRowsSent(rowsSent: number): ShowSlowLogStatisticsItem {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: number  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): number | undefined {
        return this['rows_sent'];
    }
    public withTime(time: string): ShowSlowLogStatisticsItem {
        this['time'] = time;
        return this;
    }
    public withType(type: string): ShowSlowLogStatisticsItem {
        this['type'] = type;
        return this;
    }
    public withUsers(users: string): ShowSlowLogStatisticsItem {
        this['users'] = users;
        return this;
    }
}
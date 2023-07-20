

export class MysqlSlowLogStatisticsItem {
    public count?: string;
    public time?: string;
    private 'lock_time'?: string;
    private 'rows_sent'?: number;
    private 'rows_examined'?: number;
    public database?: string;
    public users?: string;
    private 'query_sample'?: string;
    private 'client_ip'?: string;
    public type?: string;
    public constructor() { 
    }
    public withCount(count: string): MysqlSlowLogStatisticsItem {
        this['count'] = count;
        return this;
    }
    public withTime(time: string): MysqlSlowLogStatisticsItem {
        this['time'] = time;
        return this;
    }
    public withLockTime(lockTime: string): MysqlSlowLogStatisticsItem {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withRowsSent(rowsSent: number): MysqlSlowLogStatisticsItem {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: number  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): number | undefined {
        return this['rows_sent'];
    }
    public withRowsExamined(rowsExamined: number): MysqlSlowLogStatisticsItem {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: number  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): number | undefined {
        return this['rows_examined'];
    }
    public withDatabase(database: string): MysqlSlowLogStatisticsItem {
        this['database'] = database;
        return this;
    }
    public withUsers(users: string): MysqlSlowLogStatisticsItem {
        this['users'] = users;
        return this;
    }
    public withQuerySample(querySample: string): MysqlSlowLogStatisticsItem {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withClientIp(clientIp: string): MysqlSlowLogStatisticsItem {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withType(type: string): MysqlSlowLogStatisticsItem {
        this['type'] = type;
        return this;
    }
}
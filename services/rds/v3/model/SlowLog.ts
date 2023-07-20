

export class SlowLog {
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
    public constructor(count?: string, time?: string, lockTime?: string, rowsSent?: string, rowsExamined?: string, database?: string, users?: string, querySample?: string, type?: string, startTime?: string, clientIp?: string) { 
        this['count'] = count;
        this['time'] = time;
        this['lock_time'] = lockTime;
        this['rows_sent'] = rowsSent;
        this['rows_examined'] = rowsExamined;
        this['database'] = database;
        this['users'] = users;
        this['query_sample'] = querySample;
        this['type'] = type;
        this['start_time'] = startTime;
        this['client_ip'] = clientIp;
    }
    public withCount(count: string): SlowLog {
        this['count'] = count;
        return this;
    }
    public withTime(time: string): SlowLog {
        this['time'] = time;
        return this;
    }
    public withLockTime(lockTime: string): SlowLog {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withRowsSent(rowsSent: string): SlowLog {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: string  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): string | undefined {
        return this['rows_sent'];
    }
    public withRowsExamined(rowsExamined: string): SlowLog {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: string  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): string | undefined {
        return this['rows_examined'];
    }
    public withDatabase(database: string): SlowLog {
        this['database'] = database;
        return this;
    }
    public withUsers(users: string): SlowLog {
        this['users'] = users;
        return this;
    }
    public withQuerySample(querySample: string): SlowLog {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withType(type: string): SlowLog {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): SlowLog {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withClientIp(clientIp: string): SlowLog {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
}
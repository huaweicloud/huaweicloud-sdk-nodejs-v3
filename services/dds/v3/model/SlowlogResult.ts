

export class SlowlogResult {
    private 'node_name'?: string;
    private 'query_sample'?: string;
    public type?: string;
    public time?: string;
    private 'lock_time'?: string;
    private 'rows_sent'?: string;
    private 'rows_examined'?: string;
    public database?: string;
    private 'start_time'?: string;
    public constructor(nodeName?: string, querySample?: string, type?: string, time?: string, lockTime?: string, rowsSent?: string, rowsExamined?: string, database?: string, startTime?: string) { 
        this['node_name'] = nodeName;
        this['query_sample'] = querySample;
        this['type'] = type;
        this['time'] = time;
        this['lock_time'] = lockTime;
        this['rows_sent'] = rowsSent;
        this['rows_examined'] = rowsExamined;
        this['database'] = database;
        this['start_time'] = startTime;
    }
    public withNodeName(nodeName: string): SlowlogResult {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withQuerySample(querySample: string): SlowlogResult {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withType(type: string): SlowlogResult {
        this['type'] = type;
        return this;
    }
    public withTime(time: string): SlowlogResult {
        this['time'] = time;
        return this;
    }
    public withLockTime(lockTime: string): SlowlogResult {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: string  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): string | undefined {
        return this['lock_time'];
    }
    public withRowsSent(rowsSent: string): SlowlogResult {
        this['rows_sent'] = rowsSent;
        return this;
    }
    public set rowsSent(rowsSent: string  | undefined) {
        this['rows_sent'] = rowsSent;
    }
    public get rowsSent(): string | undefined {
        return this['rows_sent'];
    }
    public withRowsExamined(rowsExamined: string): SlowlogResult {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: string  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): string | undefined {
        return this['rows_examined'];
    }
    public withDatabase(database: string): SlowlogResult {
        this['database'] = database;
        return this;
    }
    public withStartTime(startTime: string): SlowlogResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}
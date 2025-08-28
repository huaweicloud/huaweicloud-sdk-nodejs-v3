

export class SlowLogs {
    public users?: string;
    public database?: string;
    private 'query_sample'?: string;
    private 'log_time'?: string;
    public time?: string;
    public shards?: string;
    private 'node_id'?: string;
    private 'rows_examined'?: string;
    public host?: string;
    public constructor() { 
    }
    public withUsers(users: string): SlowLogs {
        this['users'] = users;
        return this;
    }
    public withDatabase(database: string): SlowLogs {
        this['database'] = database;
        return this;
    }
    public withQuerySample(querySample: string): SlowLogs {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withLogTime(logTime: string): SlowLogs {
        this['log_time'] = logTime;
        return this;
    }
    public set logTime(logTime: string  | undefined) {
        this['log_time'] = logTime;
    }
    public get logTime(): string | undefined {
        return this['log_time'];
    }
    public withTime(time: string): SlowLogs {
        this['time'] = time;
        return this;
    }
    public withShards(shards: string): SlowLogs {
        this['shards'] = shards;
        return this;
    }
    public withNodeId(nodeId: string): SlowLogs {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withRowsExamined(rowsExamined: string): SlowLogs {
        this['rows_examined'] = rowsExamined;
        return this;
    }
    public set rowsExamined(rowsExamined: string  | undefined) {
        this['rows_examined'] = rowsExamined;
    }
    public get rowsExamined(): string | undefined {
        return this['rows_examined'];
    }
    public withHost(host: string): SlowLogs {
        this['host'] = host;
        return this;
    }
}


export class SlowSqlTrendItem {
    public timestamp?: number;
    private 'slow_log_count'?: number;
    public constructor(timestamp?: number, slowLogCount?: number) { 
        this['timestamp'] = timestamp;
        this['slow_log_count'] = slowLogCount;
    }
    public withTimestamp(timestamp: number): SlowSqlTrendItem {
        this['timestamp'] = timestamp;
        return this;
    }
    public withSlowLogCount(slowLogCount: number): SlowSqlTrendItem {
        this['slow_log_count'] = slowLogCount;
        return this;
    }
    public set slowLogCount(slowLogCount: number  | undefined) {
        this['slow_log_count'] = slowLogCount;
    }
    public get slowLogCount(): number | undefined {
        return this['slow_log_count'];
    }
}
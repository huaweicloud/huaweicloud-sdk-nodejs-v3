

export class SlowLogTrendPoint {
    public timestamp?: number;
    private 'slow_log_count'?: number;
    public constructor() { 
    }
    public withTimestamp(timestamp: number): SlowLogTrendPoint {
        this['timestamp'] = timestamp;
        return this;
    }
    public withSlowLogCount(slowLogCount: number): SlowLogTrendPoint {
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
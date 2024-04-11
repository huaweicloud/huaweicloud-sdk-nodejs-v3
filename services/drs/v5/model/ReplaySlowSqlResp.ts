

export class ReplaySlowSqlResp {
    private 'object_type'?: string;
    private 'slow_sql'?: string;
    private 'old_time'?: string;
    private 'replay_time'?: string;
    public constructor() { 
    }
    public withObjectType(objectType: string): ReplaySlowSqlResp {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withSlowSql(slowSql: string): ReplaySlowSqlResp {
        this['slow_sql'] = slowSql;
        return this;
    }
    public set slowSql(slowSql: string  | undefined) {
        this['slow_sql'] = slowSql;
    }
    public get slowSql(): string | undefined {
        return this['slow_sql'];
    }
    public withOldTime(oldTime: string): ReplaySlowSqlResp {
        this['old_time'] = oldTime;
        return this;
    }
    public set oldTime(oldTime: string  | undefined) {
        this['old_time'] = oldTime;
    }
    public get oldTime(): string | undefined {
        return this['old_time'];
    }
    public withReplayTime(replayTime: string): ReplaySlowSqlResp {
        this['replay_time'] = replayTime;
        return this;
    }
    public set replayTime(replayTime: string  | undefined) {
        this['replay_time'] = replayTime;
    }
    public get replayTime(): string | undefined {
        return this['replay_time'];
    }
}
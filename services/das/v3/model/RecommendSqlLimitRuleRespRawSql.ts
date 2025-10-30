

export class RecommendSqlLimitRuleRespRawSql {
    private 'session_id'?: string;
    public host?: string;
    public sql?: string;
    public db?: string;
    public time?: number;
    public constructor() { 
    }
    public withSessionId(sessionId: string): RecommendSqlLimitRuleRespRawSql {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withHost(host: string): RecommendSqlLimitRuleRespRawSql {
        this['host'] = host;
        return this;
    }
    public withSql(sql: string): RecommendSqlLimitRuleRespRawSql {
        this['sql'] = sql;
        return this;
    }
    public withDb(db: string): RecommendSqlLimitRuleRespRawSql {
        this['db'] = db;
        return this;
    }
    public withTime(time: number): RecommendSqlLimitRuleRespRawSql {
        this['time'] = time;
        return this;
    }
}
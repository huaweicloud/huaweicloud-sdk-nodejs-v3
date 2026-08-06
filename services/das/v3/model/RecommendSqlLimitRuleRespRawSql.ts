

export class RecommendSqlLimitRuleRespRawSql {
    private 'session_id'?: number;
    public host?: string;
    public sql?: string;
    public db?: string;
    public user?: string;
    private 'sql_type'?: string;
    public time?: number;
    public constructor() { 
    }
    public withSessionId(sessionId: number): RecommendSqlLimitRuleRespRawSql {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: number  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): number | undefined {
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
    public withUser(user: string): RecommendSqlLimitRuleRespRawSql {
        this['user'] = user;
        return this;
    }
    public withSqlType(sqlType: string): RecommendSqlLimitRuleRespRawSql {
        this['sql_type'] = sqlType;
        return this;
    }
    public set sqlType(sqlType: string  | undefined) {
        this['sql_type'] = sqlType;
    }
    public get sqlType(): string | undefined {
        return this['sql_type'];
    }
    public withTime(time: number): RecommendSqlLimitRuleRespRawSql {
        this['time'] = time;
        return this;
    }
}
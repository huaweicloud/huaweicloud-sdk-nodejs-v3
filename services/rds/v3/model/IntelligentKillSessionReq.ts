

export class IntelligentKillSessionReq {
    private 'auto_add_sql_limit_rule'?: boolean;
    public constructor() { 
    }
    public withAutoAddSqlLimitRule(autoAddSqlLimitRule: boolean): IntelligentKillSessionReq {
        this['auto_add_sql_limit_rule'] = autoAddSqlLimitRule;
        return this;
    }
    public set autoAddSqlLimitRule(autoAddSqlLimitRule: boolean  | undefined) {
        this['auto_add_sql_limit_rule'] = autoAddSqlLimitRule;
    }
    public get autoAddSqlLimitRule(): boolean | undefined {
        return this['auto_add_sql_limit_rule'];
    }
}
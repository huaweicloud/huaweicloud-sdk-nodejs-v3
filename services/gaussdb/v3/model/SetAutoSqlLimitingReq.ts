import { AutoSqlLimitingRule } from './AutoSqlLimitingRule';


export class SetAutoSqlLimitingReq {
    private 'auto_sql_limiting_rules'?: Array<AutoSqlLimitingRule>;
    public constructor(autoSqlLimitingRules?: Array<AutoSqlLimitingRule>) { 
        this['auto_sql_limiting_rules'] = autoSqlLimitingRules;
    }
    public withAutoSqlLimitingRules(autoSqlLimitingRules: Array<AutoSqlLimitingRule>): SetAutoSqlLimitingReq {
        this['auto_sql_limiting_rules'] = autoSqlLimitingRules;
        return this;
    }
    public set autoSqlLimitingRules(autoSqlLimitingRules: Array<AutoSqlLimitingRule>  | undefined) {
        this['auto_sql_limiting_rules'] = autoSqlLimitingRules;
    }
    public get autoSqlLimitingRules(): Array<AutoSqlLimitingRule> | undefined {
        return this['auto_sql_limiting_rules'];
    }
}
import { NodeSqlFilterRuleInfo } from './NodeSqlFilterRuleInfo';


export class OperateSqlFilterRuleReq {
    private 'sql_filter_rules'?: Array<NodeSqlFilterRuleInfo>;
    public constructor(sqlFilterRules?: Array<NodeSqlFilterRuleInfo>) { 
        this['sql_filter_rules'] = sqlFilterRules;
    }
    public withSqlFilterRules(sqlFilterRules: Array<NodeSqlFilterRuleInfo>): OperateSqlFilterRuleReq {
        this['sql_filter_rules'] = sqlFilterRules;
        return this;
    }
    public set sqlFilterRules(sqlFilterRules: Array<NodeSqlFilterRuleInfo>  | undefined) {
        this['sql_filter_rules'] = sqlFilterRules;
    }
    public get sqlFilterRules(): Array<NodeSqlFilterRuleInfo> | undefined {
        return this['sql_filter_rules'];
    }
}
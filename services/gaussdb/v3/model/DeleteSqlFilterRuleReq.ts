import { DeleteNodeSqlFilterRuleInfo } from './DeleteNodeSqlFilterRuleInfo';


export class DeleteSqlFilterRuleReq {
    private 'sql_filter_rules'?: Array<DeleteNodeSqlFilterRuleInfo>;
    public constructor(sqlFilterRules?: Array<DeleteNodeSqlFilterRuleInfo>) { 
        this['sql_filter_rules'] = sqlFilterRules;
    }
    public withSqlFilterRules(sqlFilterRules: Array<DeleteNodeSqlFilterRuleInfo>): DeleteSqlFilterRuleReq {
        this['sql_filter_rules'] = sqlFilterRules;
        return this;
    }
    public set sqlFilterRules(sqlFilterRules: Array<DeleteNodeSqlFilterRuleInfo>  | undefined) {
        this['sql_filter_rules'] = sqlFilterRules;
    }
    public get sqlFilterRules(): Array<DeleteNodeSqlFilterRuleInfo> | undefined {
        return this['sql_filter_rules'];
    }
}
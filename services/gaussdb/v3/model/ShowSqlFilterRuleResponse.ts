import { SqlFilterRule } from './SqlFilterRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlFilterRuleResponse extends SdkResponse {
    private 'node_id'?: string;
    private 'sql_filter_rules'?: Array<SqlFilterRule>;
    public constructor() { 
        super();
    }
    public withNodeId(nodeId: string): ShowSqlFilterRuleResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSqlFilterRules(sqlFilterRules: Array<SqlFilterRule>): ShowSqlFilterRuleResponse {
        this['sql_filter_rules'] = sqlFilterRules;
        return this;
    }
    public set sqlFilterRules(sqlFilterRules: Array<SqlFilterRule>  | undefined) {
        this['sql_filter_rules'] = sqlFilterRules;
    }
    public get sqlFilterRules(): Array<SqlFilterRule> | undefined {
        return this['sql_filter_rules'];
    }
}
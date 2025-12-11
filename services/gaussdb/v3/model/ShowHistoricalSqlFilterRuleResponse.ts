import { HistoricalSqlFilterRule } from './HistoricalSqlFilterRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHistoricalSqlFilterRuleResponse extends SdkResponse {
    private 'sql_filter_rules'?: Array<HistoricalSqlFilterRule>;
    public constructor() { 
        super();
    }
    public withSqlFilterRules(sqlFilterRules: Array<HistoricalSqlFilterRule>): ShowHistoricalSqlFilterRuleResponse {
        this['sql_filter_rules'] = sqlFilterRules;
        return this;
    }
    public set sqlFilterRules(sqlFilterRules: Array<HistoricalSqlFilterRule>  | undefined) {
        this['sql_filter_rules'] = sqlFilterRules;
    }
    public get sqlFilterRules(): Array<HistoricalSqlFilterRule> | undefined {
        return this['sql_filter_rules'];
    }
}
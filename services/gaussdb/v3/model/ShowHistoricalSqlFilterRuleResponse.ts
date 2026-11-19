import { HistoricalSqlFilterRule } from './HistoricalSqlFilterRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHistoricalSqlFilterRuleResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'sql_filter_rules'?: Array<HistoricalSqlFilterRule>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowHistoricalSqlFilterRuleResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
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
import { ShowSqlJobSystemDefendRuleResponseBody } from './ShowSqlJobSystemDefendRuleResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlJobSystemDefendRulesResponse extends SdkResponse {
    public rules?: Array<ShowSqlJobSystemDefendRuleResponseBody>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<ShowSqlJobSystemDefendRuleResponseBody>): ListSqlJobSystemDefendRulesResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotalCount(totalCount: number): ListSqlJobSystemDefendRulesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}
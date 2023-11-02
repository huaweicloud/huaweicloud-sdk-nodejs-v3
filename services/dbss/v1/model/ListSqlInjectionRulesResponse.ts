import { SqlRuleResponseRules } from './SqlRuleResponseRules';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlInjectionRulesResponse extends SdkResponse {
    public rules?: Array<SqlRuleResponseRules>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<SqlRuleResponseRules>): ListSqlInjectionRulesResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotal(total: number): ListSqlInjectionRulesResponse {
        this['total'] = total;
        return this;
    }
}
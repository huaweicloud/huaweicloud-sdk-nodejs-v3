import { SqlRuleResponseRules } from './SqlRuleResponseRules';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlInjectionRulesNewResponse extends SdkResponse {
    public rules?: Array<SqlRuleResponseRules>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<SqlRuleResponseRules>): ListSqlInjectionRulesNewResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotal(total: number): ListSqlInjectionRulesNewResponse {
        this['total'] = total;
        return this;
    }
}
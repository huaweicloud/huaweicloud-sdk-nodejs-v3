import { RuleRiskResponseRules } from './RuleRiskResponseRules';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditRuleRisksResponse extends SdkResponse {
    public rules?: Array<RuleRiskResponseRules>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<RuleRiskResponseRules>): ListAuditRuleRisksResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotal(total: number): ListAuditRuleRisksResponse {
        this['total'] = total;
        return this;
    }
}
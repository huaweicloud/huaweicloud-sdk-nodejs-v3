import { RuleRiskResponseRules } from './RuleRiskResponseRules';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditRuleRisksResponse extends SdkResponse {
    public rules?: Array<RuleRiskResponseRules>;
    public total?: number;
    private 'customize_total'?: number;
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
    public withCustomizeTotal(customizeTotal: number): ListAuditRuleRisksResponse {
        this['customize_total'] = customizeTotal;
        return this;
    }
    public set customizeTotal(customizeTotal: number  | undefined) {
        this['customize_total'] = customizeTotal;
    }
    public get customizeTotal(): number | undefined {
        return this['customize_total'];
    }
}
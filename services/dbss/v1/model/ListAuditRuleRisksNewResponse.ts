import { RuleRiskResponseRules } from './RuleRiskResponseRules';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditRuleRisksNewResponse extends SdkResponse {
    public rules?: Array<RuleRiskResponseRules>;
    public total?: number;
    private 'customize_total'?: number;
    public constructor() { 
        super();
    }
    public withRules(rules: Array<RuleRiskResponseRules>): ListAuditRuleRisksNewResponse {
        this['rules'] = rules;
        return this;
    }
    public withTotal(total: number): ListAuditRuleRisksNewResponse {
        this['total'] = total;
        return this;
    }
    public withCustomizeTotal(customizeTotal: number): ListAuditRuleRisksNewResponse {
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
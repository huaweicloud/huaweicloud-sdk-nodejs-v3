

export class BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds {
    private 'policy_id'?: string;
    private 'rule_ids'?: Array<string>;
    public constructor(policyId?: string, ruleIds?: Array<string>) { 
        this['policy_id'] = policyId;
        this['rule_ids'] = ruleIds;
    }
    public withPolicyId(policyId: string): BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withRuleIds(ruleIds: Array<string>): BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<string> | undefined {
        return this['rule_ids'];
    }
}
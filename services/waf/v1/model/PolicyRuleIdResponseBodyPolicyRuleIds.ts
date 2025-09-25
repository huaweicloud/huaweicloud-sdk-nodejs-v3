

export class PolicyRuleIdResponseBodyPolicyRuleIds {
    private 'policy_id'?: string;
    private 'rule_ids'?: Array<string>;
    public constructor() { 
    }
    public withPolicyId(policyId: string): PolicyRuleIdResponseBodyPolicyRuleIds {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withRuleIds(ruleIds: Array<string>): PolicyRuleIdResponseBodyPolicyRuleIds {
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
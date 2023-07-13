

export class RuleInfo {
    private 'rule_id'?: string | undefined;
    private 'rule_name'?: string | undefined;
    private 'policy_id'?: string | undefined;
    private 'policy_name'?: string | undefined;
    public constructor() { 
    }
    public withRuleId(ruleId: string): RuleInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): RuleInfo {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName() {
        return this['rule_name'];
    }
    public withPolicyId(policyId: string): RuleInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): RuleInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName() {
        return this['policy_name'];
    }
}
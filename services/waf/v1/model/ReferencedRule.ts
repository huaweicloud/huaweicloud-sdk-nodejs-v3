

export class ReferencedRule {
    private 'rule_id'?: string;
    private 'rule_name'?: string;
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'detect_opts_type'?: string;
    public constructor() { 
    }
    public withRuleId(ruleId: string): ReferencedRule {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): ReferencedRule {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withPolicyId(policyId: string): ReferencedRule {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ReferencedRule {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withDetectOptsType(detectOptsType: string): ReferencedRule {
        this['detect_opts_type'] = detectOptsType;
        return this;
    }
    public set detectOptsType(detectOptsType: string  | undefined) {
        this['detect_opts_type'] = detectOptsType;
    }
    public get detectOptsType(): string | undefined {
        return this['detect_opts_type'];
    }
}
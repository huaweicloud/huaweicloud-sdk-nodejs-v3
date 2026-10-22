

export class ShowBotMRuleRequest {
    private 'policy_id'?: string;
    private 'rule_id'?: string;
    public constructor(policyId?: string, ruleId?: string) { 
        this['policy_id'] = policyId;
        this['rule_id'] = ruleId;
    }
    public withPolicyId(policyId: string): ShowBotMRuleRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withRuleId(ruleId: string): ShowBotMRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
}
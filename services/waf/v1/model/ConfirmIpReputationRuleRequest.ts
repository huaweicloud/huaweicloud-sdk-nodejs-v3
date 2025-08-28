

export class ConfirmIpReputationRuleRequest {
    private 'Content-Type'?: string;
    private 'policy_id'?: string;
    private 'rule_id'?: string;
    public constructor(contentType?: string, policyId?: string, ruleId?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
        this['rule_id'] = ruleId;
    }
    public withContentType(contentType: string): ConfirmIpReputationRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPolicyId(policyId: string): ConfirmIpReputationRuleRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withRuleId(ruleId: string): ConfirmIpReputationRuleRequest {
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
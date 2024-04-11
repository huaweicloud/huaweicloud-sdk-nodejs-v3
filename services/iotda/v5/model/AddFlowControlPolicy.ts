

export class AddFlowControlPolicy {
    private 'policy_name'?: string;
    public description?: string;
    public scope?: string;
    private 'scope_value'?: string;
    public limit?: number;
    public constructor() { 
    }
    public withPolicyName(policyName: string): AddFlowControlPolicy {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withDescription(description: string): AddFlowControlPolicy {
        this['description'] = description;
        return this;
    }
    public withScope(scope: string): AddFlowControlPolicy {
        this['scope'] = scope;
        return this;
    }
    public withScopeValue(scopeValue: string): AddFlowControlPolicy {
        this['scope_value'] = scopeValue;
        return this;
    }
    public set scopeValue(scopeValue: string  | undefined) {
        this['scope_value'] = scopeValue;
    }
    public get scopeValue(): string | undefined {
        return this['scope_value'];
    }
    public withLimit(limit: number): AddFlowControlPolicy {
        this['limit'] = limit;
        return this;
    }
}
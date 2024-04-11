

export class UpdateFlowControlPolicy {
    private 'policy_name'?: string;
    public description?: string;
    public limit?: number;
    public constructor() { 
    }
    public withPolicyName(policyName: string): UpdateFlowControlPolicy {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withDescription(description: string): UpdateFlowControlPolicy {
        this['description'] = description;
        return this;
    }
    public withLimit(limit: number): UpdateFlowControlPolicy {
        this['limit'] = limit;
        return this;
    }
}
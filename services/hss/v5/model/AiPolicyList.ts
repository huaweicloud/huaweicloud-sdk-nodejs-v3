

export class AiPolicyList {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public enabled?: boolean;
    public constructor() { 
    }
    public withPolicyId(policyId: string): AiPolicyList {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): AiPolicyList {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withEnabled(enabled: boolean): AiPolicyList {
        this['enabled'] = enabled;
        return this;
    }
}


export class ListAiPolicyDetailRequest {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public constructor(policyId?: string, policyName?: string) { 
        this['policy_id'] = policyId;
        this['policy_name'] = policyName;
    }
    public withPolicyId(policyId: string): ListAiPolicyDetailRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ListAiPolicyDetailRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
}
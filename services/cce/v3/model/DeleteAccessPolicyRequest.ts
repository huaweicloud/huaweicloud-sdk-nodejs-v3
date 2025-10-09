

export class DeleteAccessPolicyRequest {
    private 'policy_id'?: string;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): DeleteAccessPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
}
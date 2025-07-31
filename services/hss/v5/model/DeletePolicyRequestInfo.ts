

export class DeletePolicyRequestInfo {
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    public constructor(policyName?: string, policyId?: string) { 
        this['policy_name'] = policyName;
        this['policy_id'] = policyId;
    }
    public withPolicyName(policyName: string): DeletePolicyRequestInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): DeletePolicyRequestInfo {
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
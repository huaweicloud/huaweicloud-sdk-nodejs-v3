

export class ResumePauseAiPoliciesRequestInfo {
    public enabled?: boolean;
    private 'policy_id'?: string;
    public constructor(enabled?: boolean, policyId?: string) { 
        this['enabled'] = enabled;
        this['policy_id'] = policyId;
    }
    public withEnabled(enabled: boolean): ResumePauseAiPoliciesRequestInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withPolicyId(policyId: string): ResumePauseAiPoliciesRequestInfo {
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
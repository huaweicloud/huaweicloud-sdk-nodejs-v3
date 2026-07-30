

export class UpdateAiPolicyDetailRequestInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public content?: string;
    public constructor(policyId?: string, policyName?: string, content?: string) { 
        this['policy_id'] = policyId;
        this['policy_name'] = policyName;
        this['content'] = content;
    }
    public withPolicyId(policyId: string): UpdateAiPolicyDetailRequestInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): UpdateAiPolicyDetailRequestInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withContent(content: string): UpdateAiPolicyDetailRequestInfo {
        this['content'] = content;
        return this;
    }
}
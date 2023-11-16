

export class ListPolicyRequest {
    public offset?: number;
    public limit?: number;
    private 'policy_name'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withPolicyName(policyName: string): ListPolicyRequest {
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
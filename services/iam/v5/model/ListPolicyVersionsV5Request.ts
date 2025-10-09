

export class ListPolicyVersionsV5Request {
    private 'policy_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): ListPolicyVersionsV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withLimit(limit: number): ListPolicyVersionsV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPolicyVersionsV5Request {
        this['marker'] = marker;
        return this;
    }
}
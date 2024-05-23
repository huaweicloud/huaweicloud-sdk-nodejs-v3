

export class ListEntitiesForPolicyRequest {
    private 'policy_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): ListEntitiesForPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withLimit(limit: number): ListEntitiesForPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEntitiesForPolicyRequest {
        this['marker'] = marker;
        return this;
    }
}
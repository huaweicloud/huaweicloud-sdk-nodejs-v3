

export class ListPoliciesRequest {
    private 'policy_engine_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(policyEngineId?: string) { 
        this['policy_engine_id'] = policyEngineId;
    }
    public withPolicyEngineId(policyEngineId: string): ListPoliciesRequest {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
    public withLimit(limit: number): ListPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPoliciesRequest {
        this['marker'] = marker;
        return this;
    }
}
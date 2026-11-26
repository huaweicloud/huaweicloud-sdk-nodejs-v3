

export class ListPolicyEngineAttachmentsRequest {
    private 'policy_engine_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(policyEngineId?: string) { 
        this['policy_engine_id'] = policyEngineId;
    }
    public withPolicyEngineId(policyEngineId: string): ListPolicyEngineAttachmentsRequest {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
    public withLimit(limit: number): ListPolicyEngineAttachmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPolicyEngineAttachmentsRequest {
        this['marker'] = marker;
        return this;
    }
}


export class GetPolicyRequest {
    private 'policy_engine_id'?: string;
    private 'policy_id'?: string;
    public constructor(policyEngineId?: string, policyId?: string) { 
        this['policy_engine_id'] = policyEngineId;
        this['policy_id'] = policyId;
    }
    public withPolicyEngineId(policyEngineId: string): GetPolicyRequest {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
    public withPolicyId(policyId: string): GetPolicyRequest {
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
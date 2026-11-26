

export class DeletePolicyEngineRequest {
    private 'policy_engine_id'?: string;
    public constructor(policyEngineId?: string) { 
        this['policy_engine_id'] = policyEngineId;
    }
    public withPolicyEngineId(policyEngineId: string): DeletePolicyEngineRequest {
        this['policy_engine_id'] = policyEngineId;
        return this;
    }
    public set policyEngineId(policyEngineId: string  | undefined) {
        this['policy_engine_id'] = policyEngineId;
    }
    public get policyEngineId(): string | undefined {
        return this['policy_engine_id'];
    }
}
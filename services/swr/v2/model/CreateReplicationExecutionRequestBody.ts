

export class CreateReplicationExecutionRequestBody {
    private 'policy_id'?: number;
    public constructor(policyId?: number) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: number): CreateReplicationExecutionRequestBody {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: number  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): number | undefined {
        return this['policy_id'];
    }
}
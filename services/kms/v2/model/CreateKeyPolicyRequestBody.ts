

export class CreateKeyPolicyRequestBody {
    private 'keyspace_id'?: string;
    private 'policy_name'?: string;
    public policy?: string;
    public description?: string;
    public constructor(keyspaceId?: string, policyName?: string, policy?: string) { 
        this['keyspace_id'] = keyspaceId;
        this['policy_name'] = policyName;
        this['policy'] = policy;
    }
    public withKeyspaceId(keyspaceId: string): CreateKeyPolicyRequestBody {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
    public withPolicyName(policyName: string): CreateKeyPolicyRequestBody {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicy(policy: string): CreateKeyPolicyRequestBody {
        this['policy'] = policy;
        return this;
    }
    public withDescription(description: string): CreateKeyPolicyRequestBody {
        this['description'] = description;
        return this;
    }
}


export class ListInstanceReplicationPolicyExecutionsRequest {
    private 'instance_id'?: string;
    private 'policy_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceReplicationPolicyExecutionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPolicyId(policyId: number): ListInstanceReplicationPolicyExecutionsRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: number  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): number | undefined {
        return this['policy_id'];
    }
    public withOffset(offset: number): ListInstanceReplicationPolicyExecutionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceReplicationPolicyExecutionsRequest {
        this['limit'] = limit;
        return this;
    }
}
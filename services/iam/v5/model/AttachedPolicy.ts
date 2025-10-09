

export class AttachedPolicy {
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    public urn?: string;
    private 'attached_at'?: Date;
    public constructor(policyName?: string, policyId?: string, urn?: string, attachedAt?: Date) { 
        this['policy_name'] = policyName;
        this['policy_id'] = policyId;
        this['urn'] = urn;
        this['attached_at'] = attachedAt;
    }
    public withPolicyName(policyName: string): AttachedPolicy {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): AttachedPolicy {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withUrn(urn: string): AttachedPolicy {
        this['urn'] = urn;
        return this;
    }
    public withAttachedAt(attachedAt: Date): AttachedPolicy {
        this['attached_at'] = attachedAt;
        return this;
    }
    public set attachedAt(attachedAt: Date  | undefined) {
        this['attached_at'] = attachedAt;
    }
    public get attachedAt(): Date | undefined {
        return this['attached_at'];
    }
}
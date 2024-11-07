

export class ApplyPolicyId {
    private 'apply_policy_id'?: string;
    public constructor(applyPolicyId?: string) { 
        this['apply_policy_id'] = applyPolicyId;
    }
    public withApplyPolicyId(applyPolicyId: string): ApplyPolicyId {
        this['apply_policy_id'] = applyPolicyId;
        return this;
    }
    public set applyPolicyId(applyPolicyId: string  | undefined) {
        this['apply_policy_id'] = applyPolicyId;
    }
    public get applyPolicyId(): string | undefined {
        return this['apply_policy_id'];
    }
}
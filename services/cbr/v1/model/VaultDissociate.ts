

export class VaultDissociate {
    private 'policy_id': string | undefined;
    public constructor(policyId?: any) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): VaultDissociate {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
        return this['policy_id'];
    }
}
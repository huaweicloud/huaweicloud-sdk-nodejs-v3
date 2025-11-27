

export class AssociateBackupPolicyRequestInfo {
    private 'vault_id'?: string;
    private 'policy_id'?: string;
    public constructor() { 
    }
    public withVaultId(vaultId: string): AssociateBackupPolicyRequestInfo {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withPolicyId(policyId: string): AssociateBackupPolicyRequestInfo {
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
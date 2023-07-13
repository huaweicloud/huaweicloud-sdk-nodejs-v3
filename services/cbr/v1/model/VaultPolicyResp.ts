

export class VaultPolicyResp {
    private 'destination_vault_id'?: string | undefined;
    private 'policy_id': string | undefined;
    private 'vault_id': string | undefined;
    public constructor(policyId?: any, vaultId?: any) { 
        this['policy_id'] = policyId;
        this['vault_id'] = vaultId;
    }
    public withDestinationVaultId(destinationVaultId: string): VaultPolicyResp {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId() {
        return this['destination_vault_id'];
    }
    public withPolicyId(policyId: string): VaultPolicyResp {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
        return this['policy_id'];
    }
    public withVaultId(vaultId: string): VaultPolicyResp {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
        return this['vault_id'];
    }
}
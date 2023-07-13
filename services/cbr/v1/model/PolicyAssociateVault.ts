

export class PolicyAssociateVault {
    private 'destination_vault_id'?: string | undefined;
    private 'vault_id': string | undefined;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withDestinationVaultId(destinationVaultId: string): PolicyAssociateVault {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId() {
        return this['destination_vault_id'];
    }
    public withVaultId(vaultId: string): PolicyAssociateVault {
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


export class PolicyAssociateVault {
    private 'destination_vault_id'?: string;
    private 'vault_id'?: string;
    public constructor(vaultId?: string) { 
        this['vault_id'] = vaultId;
    }
    public withDestinationVaultId(destinationVaultId: string): PolicyAssociateVault {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string  | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId(): string | undefined {
        return this['destination_vault_id'];
    }
    public withVaultId(vaultId: string): PolicyAssociateVault {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}
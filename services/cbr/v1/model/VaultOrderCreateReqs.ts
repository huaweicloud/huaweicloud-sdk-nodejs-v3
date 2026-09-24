import { PrePaidVaultOrder } from './PrePaidVaultOrder';


export class VaultOrderCreateReqs {
    public vault?: PrePaidVaultOrder;
    public constructor(vault?: PrePaidVaultOrder) { 
        this['vault'] = vault;
    }
    public withVault(vault: PrePaidVaultOrder): VaultOrderCreateReqs {
        this['vault'] = vault;
        return this;
    }
}
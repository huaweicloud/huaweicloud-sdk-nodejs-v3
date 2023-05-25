import { VaultOrder } from './VaultOrder';


export class VaultOrderCreateReqs {
    public vault: VaultOrder;
    public constructor(vault?: any) { 
        this['vault'] = vault;
    }
    public withVault(vault: VaultOrder): VaultOrderCreateReqs {
        this['vault'] = vault;
        return this;
    }
}
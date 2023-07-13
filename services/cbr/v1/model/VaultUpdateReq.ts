import { VaultUpdate } from './VaultUpdate';


export class VaultUpdateReq {
    public vault: VaultUpdate;
    public constructor(vault?: any) { 
        this['vault'] = vault;
    }
    public withVault(vault: VaultUpdate): VaultUpdateReq {
        this['vault'] = vault;
        return this;
    }
}
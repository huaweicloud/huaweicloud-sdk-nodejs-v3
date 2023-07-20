import { VaultCreate } from './VaultCreate';


export class VaultCreateReq {
    public vault?: VaultCreate;
    public constructor(vault?: VaultCreate) { 
        this['vault'] = vault;
    }
    public withVault(vault: VaultCreate): VaultCreateReq {
        this['vault'] = vault;
        return this;
    }
}
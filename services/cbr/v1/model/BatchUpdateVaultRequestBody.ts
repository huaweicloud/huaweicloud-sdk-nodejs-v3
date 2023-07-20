import { VaultBatchUpdate } from './VaultBatchUpdate';


export class BatchUpdateVaultRequestBody {
    public vault?: VaultBatchUpdate;
    public constructor(vault?: VaultBatchUpdate) { 
        this['vault'] = vault;
    }
    public withVault(vault: VaultBatchUpdate): BatchUpdateVaultRequestBody {
        this['vault'] = vault;
        return this;
    }
}
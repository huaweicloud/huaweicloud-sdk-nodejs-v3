import { CheckpointParam } from './CheckpointParam';


export class VaultBackup {
    public parameters?: CheckpointParam;
    private 'vault_id': string | undefined;
    public constructor(vaultId?: any) { 
        this['vault_id'] = vaultId;
    }
    public withParameters(parameters: CheckpointParam): VaultBackup {
        this['parameters'] = parameters;
        return this;
    }
    public withVaultId(vaultId: string): VaultBackup {
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
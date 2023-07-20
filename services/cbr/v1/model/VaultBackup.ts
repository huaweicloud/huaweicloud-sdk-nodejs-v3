import { CheckpointParam } from './CheckpointParam';


export class VaultBackup {
    public parameters?: CheckpointParam;
    private 'vault_id'?: string;
    public constructor(vaultId?: string) { 
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
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}
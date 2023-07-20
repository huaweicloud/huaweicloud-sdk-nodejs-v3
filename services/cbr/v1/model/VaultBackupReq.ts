import { VaultBackup } from './VaultBackup';


export class VaultBackupReq {
    public checkpoint?: VaultBackup;
    public constructor(checkpoint?: VaultBackup) { 
        this['checkpoint'] = checkpoint;
    }
    public withCheckpoint(checkpoint: VaultBackup): VaultBackupReq {
        this['checkpoint'] = checkpoint;
        return this;
    }
}
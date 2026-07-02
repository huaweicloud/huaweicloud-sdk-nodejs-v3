import { BackupVaultLockInfoRequest } from './BackupVaultLockInfoRequest';


export class BackupVaultLockRequest {
    private 'backup_vaultlock_info'?: BackupVaultLockInfoRequest;
    public action?: BackupVaultLockRequestActionEnum | string;
    public constructor(backupVaultlockInfo?: BackupVaultLockInfoRequest, action?: string) { 
        this['backup_vaultlock_info'] = backupVaultlockInfo;
        this['action'] = action;
    }
    public withBackupVaultlockInfo(backupVaultlockInfo: BackupVaultLockInfoRequest): BackupVaultLockRequest {
        this['backup_vaultlock_info'] = backupVaultlockInfo;
        return this;
    }
    public set backupVaultlockInfo(backupVaultlockInfo: BackupVaultLockInfoRequest  | undefined) {
        this['backup_vaultlock_info'] = backupVaultlockInfo;
    }
    public get backupVaultlockInfo(): BackupVaultLockInfoRequest | undefined {
        return this['backup_vaultlock_info'];
    }
    public withAction(action: BackupVaultLockRequestActionEnum | string): BackupVaultLockRequest {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupVaultLockRequestActionEnum {
    ENABLE = 'enable',
    EXTEND = 'extend'
}

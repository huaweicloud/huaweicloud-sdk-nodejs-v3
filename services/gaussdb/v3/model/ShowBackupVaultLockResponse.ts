import { BackupVaultLockInfo } from './BackupVaultLockInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupVaultLockResponse extends SdkResponse {
    private 'backup_vaultlock_info'?: BackupVaultLockInfo;
    public constructor() { 
        super();
    }
    public withBackupVaultlockInfo(backupVaultlockInfo: BackupVaultLockInfo): ShowBackupVaultLockResponse {
        this['backup_vaultlock_info'] = backupVaultlockInfo;
        return this;
    }
    public set backupVaultlockInfo(backupVaultlockInfo: BackupVaultLockInfo  | undefined) {
        this['backup_vaultlock_info'] = backupVaultlockInfo;
    }
    public get backupVaultlockInfo(): BackupVaultLockInfo | undefined {
        return this['backup_vaultlock_info'];
    }
}
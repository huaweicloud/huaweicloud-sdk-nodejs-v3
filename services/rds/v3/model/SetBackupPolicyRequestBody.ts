import { BackupPolicy } from './BackupPolicy';


export class SetBackupPolicyRequestBody {
    private 'backup_policy'?: BackupPolicy;
    private 'reserve_backups'?: boolean;
    public constructor(backupPolicy?: BackupPolicy) { 
        this['backup_policy'] = backupPolicy;
    }
    public withBackupPolicy(backupPolicy: BackupPolicy): SetBackupPolicyRequestBody {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: BackupPolicy  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): BackupPolicy | undefined {
        return this['backup_policy'];
    }
    public withReserveBackups(reserveBackups: boolean): SetBackupPolicyRequestBody {
        this['reserve_backups'] = reserveBackups;
        return this;
    }
    public set reserveBackups(reserveBackups: boolean  | undefined) {
        this['reserve_backups'] = reserveBackups;
    }
    public get reserveBackups(): boolean | undefined {
        return this['reserve_backups'];
    }
}
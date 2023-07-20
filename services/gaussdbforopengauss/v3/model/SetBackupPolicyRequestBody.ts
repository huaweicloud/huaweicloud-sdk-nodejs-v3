import { BackupPolicy } from './BackupPolicy';


export class SetBackupPolicyRequestBody {
    private 'backup_policy'?: BackupPolicy;
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
}
import { BackupPolicyInfo } from './BackupPolicyInfo';


export class SetNewBackupPolicyRequestBody {
    private 'backup_policy'?: BackupPolicyInfo;
    public constructor(backupPolicy?: BackupPolicyInfo) { 
        this['backup_policy'] = backupPolicy;
    }
    public withBackupPolicy(backupPolicy: BackupPolicyInfo): SetNewBackupPolicyRequestBody {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: BackupPolicyInfo  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): BackupPolicyInfo | undefined {
        return this['backup_policy'];
    }
}
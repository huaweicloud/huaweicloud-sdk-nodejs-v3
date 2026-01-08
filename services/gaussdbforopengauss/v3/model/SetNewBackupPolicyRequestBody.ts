import { BackupPolicyInfoOption } from './BackupPolicyInfoOption';


export class SetNewBackupPolicyRequestBody {
    private 'backup_policy'?: BackupPolicyInfoOption;
    public constructor(backupPolicy?: BackupPolicyInfoOption) { 
        this['backup_policy'] = backupPolicy;
    }
    public withBackupPolicy(backupPolicy: BackupPolicyInfoOption): SetNewBackupPolicyRequestBody {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: BackupPolicyInfoOption  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): BackupPolicyInfoOption | undefined {
        return this['backup_policy'];
    }
}
import { UpdateBackupOffsitePolicyInfo } from './UpdateBackupOffsitePolicyInfo';


export class UpdateBackupOffsitePolicyRequestBody {
    private 'backup_policy'?: UpdateBackupOffsitePolicyInfo;
    public constructor(backupPolicy?: UpdateBackupOffsitePolicyInfo) { 
        this['backup_policy'] = backupPolicy;
    }
    public withBackupPolicy(backupPolicy: UpdateBackupOffsitePolicyInfo): UpdateBackupOffsitePolicyRequestBody {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: UpdateBackupOffsitePolicyInfo  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): UpdateBackupOffsitePolicyInfo | undefined {
        return this['backup_policy'];
    }
}
import { BackupPolicyInfo } from './BackupPolicyInfo';


export class BatchSetBackupPolicyRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'backup_policy'?: BackupPolicyInfo;
    public constructor(instanceIds?: Array<string>, backupPolicy?: BackupPolicyInfo) { 
        this['instance_ids'] = instanceIds;
        this['backup_policy'] = backupPolicy;
    }
    public withInstanceIds(instanceIds: Array<string>): BatchSetBackupPolicyRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withBackupPolicy(backupPolicy: BackupPolicyInfo): BatchSetBackupPolicyRequestBody {
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
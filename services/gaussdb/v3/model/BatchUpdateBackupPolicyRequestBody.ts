import { MysqlBackupPolicyInfo } from './MysqlBackupPolicyInfo';


export class BatchUpdateBackupPolicyRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'backup_policy'?: MysqlBackupPolicyInfo;
    public constructor(instanceIds?: Array<string>, backupPolicy?: MysqlBackupPolicyInfo) { 
        this['instance_ids'] = instanceIds;
        this['backup_policy'] = backupPolicy;
    }
    public withInstanceIds(instanceIds: Array<string>): BatchUpdateBackupPolicyRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withBackupPolicy(backupPolicy: MysqlBackupPolicyInfo): BatchUpdateBackupPolicyRequestBody {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: MysqlBackupPolicyInfo  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): MysqlBackupPolicyInfo | undefined {
        return this['backup_policy'];
    }
}
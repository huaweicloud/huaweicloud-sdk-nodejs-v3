import { MysqlBackupPolicy } from './MysqlBackupPolicy';


export class MysqlUpdateBackupPolicyRequest {
    private 'backup_policy'?: MysqlBackupPolicy;
    public constructor(backupPolicy?: MysqlBackupPolicy) { 
        this['backup_policy'] = backupPolicy;
    }
    public withBackupPolicy(backupPolicy: MysqlBackupPolicy): MysqlUpdateBackupPolicyRequest {
        this['backup_policy'] = backupPolicy;
        return this;
    }
    public set backupPolicy(backupPolicy: MysqlBackupPolicy  | undefined) {
        this['backup_policy'] = backupPolicy;
    }
    public get backupPolicy(): MysqlBackupPolicy | undefined {
        return this['backup_policy'];
    }
}
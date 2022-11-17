

export class DeleteBackupFileRequest {
    private 'backup_id': string | undefined;
    private 'instance_id': string | undefined;
    public constructor(backupId?: any, instanceId?: any) { 
        this['backup_id'] = backupId;
        this['instance_id'] = instanceId;
    }
    public withBackupId(backupId: string): DeleteBackupFileRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withInstanceId(instanceId: string): DeleteBackupFileRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
}


export class OpExtendInfoRestore {
    private 'backup_id'?: string | undefined;
    private 'backup_name'?: string | undefined;
    private 'target_resource_id'?: string | undefined;
    private 'target_resource_name'?: string | undefined;
    public constructor() { 
    }
    public withBackupId(backupId: string): OpExtendInfoRestore {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withBackupName(backupName: string): OpExtendInfoRestore {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName() {
        return this['backup_name'];
    }
    public withTargetResourceId(targetResourceId: string): OpExtendInfoRestore {
        this['target_resource_id'] = targetResourceId;
        return this;
    }
    public set targetResourceId(targetResourceId: string | undefined) {
        this['target_resource_id'] = targetResourceId;
    }
    public get targetResourceId() {
        return this['target_resource_id'];
    }
    public withTargetResourceName(targetResourceName: string): OpExtendInfoRestore {
        this['target_resource_name'] = targetResourceName;
        return this;
    }
    public set targetResourceName(targetResourceName: string | undefined) {
        this['target_resource_name'] = targetResourceName;
    }
    public get targetResourceName() {
        return this['target_resource_name'];
    }
}
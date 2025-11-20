

export class BackupInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'instance_status'?: string;
    private 'file_size'?: number;
    public created?: string;
    public updated?: string;
    private 'backup_type'?: string;
    public constructor() { 
    }
    public withId(id: string): BackupInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BackupInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): BackupInfo {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): BackupInfo {
        this['status'] = status;
        return this;
    }
    public withInstanceId(instanceId: string): BackupInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): BackupInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceStatus(instanceStatus: string): BackupInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withFileSize(fileSize: number): BackupInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withCreated(created: string): BackupInfo {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): BackupInfo {
        this['updated'] = updated;
        return this;
    }
    public withBackupType(backupType: string): BackupInfo {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
}
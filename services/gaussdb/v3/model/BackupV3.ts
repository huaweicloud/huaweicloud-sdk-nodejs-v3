

export class BackupV3 {
    public id?: string;
    public description?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public name?: string;
    public size?: string;
    private 'size_unit'?: string;
    public status?: string;
    public created?: string;
    public updated?: string;
    private 'backup_type'?: string;
    private 'backup_level'?: string;
    private 'backup_method'?: string;
    private 'use_detail'?: string;
    private 'time_zone'?: string;
    public constructor() { 
    }
    public withId(id: string): BackupV3 {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): BackupV3 {
        this['description'] = description;
        return this;
    }
    public withInstanceId(instanceId: string): BackupV3 {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): BackupV3 {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withName(name: string): BackupV3 {
        this['name'] = name;
        return this;
    }
    public withSize(size: string): BackupV3 {
        this['size'] = size;
        return this;
    }
    public withSizeUnit(sizeUnit: string): BackupV3 {
        this['size_unit'] = sizeUnit;
        return this;
    }
    public set sizeUnit(sizeUnit: string  | undefined) {
        this['size_unit'] = sizeUnit;
    }
    public get sizeUnit(): string | undefined {
        return this['size_unit'];
    }
    public withStatus(status: string): BackupV3 {
        this['status'] = status;
        return this;
    }
    public withCreated(created: string): BackupV3 {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): BackupV3 {
        this['updated'] = updated;
        return this;
    }
    public withBackupType(backupType: string): BackupV3 {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
    public withBackupLevel(backupLevel: string): BackupV3 {
        this['backup_level'] = backupLevel;
        return this;
    }
    public set backupLevel(backupLevel: string  | undefined) {
        this['backup_level'] = backupLevel;
    }
    public get backupLevel(): string | undefined {
        return this['backup_level'];
    }
    public withBackupMethod(backupMethod: string): BackupV3 {
        this['backup_method'] = backupMethod;
        return this;
    }
    public set backupMethod(backupMethod: string  | undefined) {
        this['backup_method'] = backupMethod;
    }
    public get backupMethod(): string | undefined {
        return this['backup_method'];
    }
    public withUseDetail(useDetail: string): BackupV3 {
        this['use_detail'] = useDetail;
        return this;
    }
    public set useDetail(useDetail: string  | undefined) {
        this['use_detail'] = useDetail;
    }
    public get useDetail(): string | undefined {
        return this['use_detail'];
    }
    public withTimeZone(timeZone: string): BackupV3 {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}
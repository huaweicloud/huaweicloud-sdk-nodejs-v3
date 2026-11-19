

export class RetainedBackupInfo {
    private 'backup_id'?: string;
    private 'instance_id'?: string;
    public status?: string;
    private 'backup_name'?: string;
    public size?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'backup_type'?: string;
    private 'backup_level'?: string;
    public constructor() { 
    }
    public withBackupId(backupId: string): RetainedBackupInfo {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withInstanceId(instanceId: string): RetainedBackupInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): RetainedBackupInfo {
        this['status'] = status;
        return this;
    }
    public withBackupName(backupName: string): RetainedBackupInfo {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withSize(size: number): RetainedBackupInfo {
        this['size'] = size;
        return this;
    }
    public withBeginTime(beginTime: string): RetainedBackupInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): RetainedBackupInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withBackupType(backupType: string): RetainedBackupInfo {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
    public withBackupLevel(backupLevel: string): RetainedBackupInfo {
        this['backup_level'] = backupLevel;
        return this;
    }
    public set backupLevel(backupLevel: string  | undefined) {
        this['backup_level'] = backupLevel;
    }
    public get backupLevel(): string | undefined {
        return this['backup_level'];
    }
}
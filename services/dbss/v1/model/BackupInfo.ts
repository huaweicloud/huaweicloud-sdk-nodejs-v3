

export class BackupInfo {
    private 'backup_task_fail_reason'?: string;
    private 'backup_time'?: Date;
    public deleted?: boolean;
    private 'end_time'?: Date;
    private 'file_size'?: number;
    private 'file_size_unit'?: string;
    public id?: string;
    public mode?: string;
    public name?: string;
    public percentage?: number;
    public progress?: string;
    private 'restore_task_fail_reason'?: string;
    public sha256?: string;
    private 'start_time'?: Date;
    public constructor() { 
    }
    public withBackupTaskFailReason(backupTaskFailReason: string): BackupInfo {
        this['backup_task_fail_reason'] = backupTaskFailReason;
        return this;
    }
    public set backupTaskFailReason(backupTaskFailReason: string  | undefined) {
        this['backup_task_fail_reason'] = backupTaskFailReason;
    }
    public get backupTaskFailReason(): string | undefined {
        return this['backup_task_fail_reason'];
    }
    public withBackupTime(backupTime: Date): BackupInfo {
        this['backup_time'] = backupTime;
        return this;
    }
    public set backupTime(backupTime: Date  | undefined) {
        this['backup_time'] = backupTime;
    }
    public get backupTime(): Date | undefined {
        return this['backup_time'];
    }
    public withDeleted(deleted: boolean): BackupInfo {
        this['deleted'] = deleted;
        return this;
    }
    public withEndTime(endTime: Date): BackupInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
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
    public withFileSizeUnit(fileSizeUnit: string): BackupInfo {
        this['file_size_unit'] = fileSizeUnit;
        return this;
    }
    public set fileSizeUnit(fileSizeUnit: string  | undefined) {
        this['file_size_unit'] = fileSizeUnit;
    }
    public get fileSizeUnit(): string | undefined {
        return this['file_size_unit'];
    }
    public withId(id: string): BackupInfo {
        this['id'] = id;
        return this;
    }
    public withMode(mode: string): BackupInfo {
        this['mode'] = mode;
        return this;
    }
    public withName(name: string): BackupInfo {
        this['name'] = name;
        return this;
    }
    public withPercentage(percentage: number): BackupInfo {
        this['percentage'] = percentage;
        return this;
    }
    public withProgress(progress: string): BackupInfo {
        this['progress'] = progress;
        return this;
    }
    public withRestoreTaskFailReason(restoreTaskFailReason: string): BackupInfo {
        this['restore_task_fail_reason'] = restoreTaskFailReason;
        return this;
    }
    public set restoreTaskFailReason(restoreTaskFailReason: string  | undefined) {
        this['restore_task_fail_reason'] = restoreTaskFailReason;
    }
    public get restoreTaskFailReason(): string | undefined {
        return this['restore_task_fail_reason'];
    }
    public withSha256(sha256: string): BackupInfo {
        this['sha256'] = sha256;
        return this;
    }
    public withStartTime(startTime: Date): BackupInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
}
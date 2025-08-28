

export class VulHostBackupsResponseInfoDataList {
    private 'backup_time'?: number;
    private 'backup_id'?: string;
    private 'backup_name'?: string;
    public status?: string;
    public constructor() { 
    }
    public withBackupTime(backupTime: number): VulHostBackupsResponseInfoDataList {
        this['backup_time'] = backupTime;
        return this;
    }
    public set backupTime(backupTime: number  | undefined) {
        this['backup_time'] = backupTime;
    }
    public get backupTime(): number | undefined {
        return this['backup_time'];
    }
    public withBackupId(backupId: string): VulHostBackupsResponseInfoDataList {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupName(backupName: string): VulHostBackupsResponseInfoDataList {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withStatus(status: string): VulHostBackupsResponseInfoDataList {
        this['status'] = status;
        return this;
    }
}
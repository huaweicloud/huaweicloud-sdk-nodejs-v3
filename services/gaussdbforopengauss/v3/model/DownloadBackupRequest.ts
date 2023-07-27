

export class DownloadBackupRequest {
    private 'X-Language'?: string;
    private 'backup_id'?: string;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withXLanguage(xLanguage: string): DownloadBackupRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBackupId(backupId: string): DownloadBackupRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
}


export class ShowBackupDownloadLinkRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'backup_id'?: string;
    public constructor(instanceId?: string, backupId?: string) { 
        this['instance_id'] = instanceId;
        this['backup_id'] = backupId;
    }
    public withXLanguage(xLanguage: string): ShowBackupDownloadLinkRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowBackupDownloadLinkRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBackupId(backupId: string): ShowBackupDownloadLinkRequest {
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
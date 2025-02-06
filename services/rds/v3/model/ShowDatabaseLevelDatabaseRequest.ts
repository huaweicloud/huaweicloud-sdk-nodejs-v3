

export class ShowDatabaseLevelDatabaseRequest {
    private 'instance_id'?: string;
    private 'backup_id'?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string, backupId?: string) { 
        this['instance_id'] = instanceId;
        this['backup_id'] = backupId;
    }
    public withInstanceId(instanceId: string): ShowDatabaseLevelDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBackupId(backupId: string): ShowDatabaseLevelDatabaseRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withXLanguage(xLanguage: string): ShowDatabaseLevelDatabaseRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}
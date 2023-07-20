

export class RestoreExistingInstanceRequestBodySource {
    private 'instance_id'?: string;
    public type?: RestoreExistingInstanceRequestBodySourceTypeEnum | string;
    private 'backup_id'?: string;
    private 'restore_time'?: number;
    private 'database_name'?: { [key: string]: string; };
    private 'restore_all_database'?: boolean;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): RestoreExistingInstanceRequestBodySource {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: RestoreExistingInstanceRequestBodySourceTypeEnum | string): RestoreExistingInstanceRequestBodySource {
        this['type'] = type;
        return this;
    }
    public withBackupId(backupId: string): RestoreExistingInstanceRequestBodySource {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withRestoreTime(restoreTime: number): RestoreExistingInstanceRequestBodySource {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withDatabaseName(databaseName: { [key: string]: string; }): RestoreExistingInstanceRequestBodySource {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: { [key: string]: string; }  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): { [key: string]: string; } | undefined {
        return this['database_name'];
    }
    public withRestoreAllDatabase(restoreAllDatabase: boolean): RestoreExistingInstanceRequestBodySource {
        this['restore_all_database'] = restoreAllDatabase;
        return this;
    }
    public set restoreAllDatabase(restoreAllDatabase: boolean  | undefined) {
        this['restore_all_database'] = restoreAllDatabase;
    }
    public get restoreAllDatabase(): boolean | undefined {
        return this['restore_all_database'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RestoreExistingInstanceRequestBodySourceTypeEnum {
    BACKUP = 'backup',
    TIMESTAMP = 'timestamp'
}

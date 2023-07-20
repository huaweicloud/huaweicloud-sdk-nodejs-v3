

export class ListDbBackupsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'backup_id'?: string;
    private 'backup_type'?: ListDbBackupsRequestBackupTypeEnum | string;
    public offset?: number;
    public limit?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListDbBackupsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListDbBackupsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBackupId(backupId: string): ListDbBackupsRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupType(backupType: ListDbBackupsRequestBackupTypeEnum | string): ListDbBackupsRequest {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: ListDbBackupsRequestBackupTypeEnum | string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): ListDbBackupsRequestBackupTypeEnum | string | undefined {
        return this['backup_type'];
    }
    public withOffset(offset: number): ListDbBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDbBackupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withBeginTime(beginTime: string): ListDbBackupsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListDbBackupsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDbBackupsRequestBackupTypeEnum {
    AUTO = 'auto',
    MANUAL = 'manual'
}



export class ListOffSiteBackupsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'backup_id'?: string;
    private 'backup_type'?: ListOffSiteBackupsRequestBackupTypeEnum | string;
    public offset?: number;
    public limit?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListOffSiteBackupsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListOffSiteBackupsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBackupId(backupId: string): ListOffSiteBackupsRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupType(backupType: ListOffSiteBackupsRequestBackupTypeEnum | string): ListOffSiteBackupsRequest {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: ListOffSiteBackupsRequestBackupTypeEnum | string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): ListOffSiteBackupsRequestBackupTypeEnum | string | undefined {
        return this['backup_type'];
    }
    public withOffset(offset: number): ListOffSiteBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListOffSiteBackupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withBeginTime(beginTime: string): ListOffSiteBackupsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListOffSiteBackupsRequest {
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
export enum ListOffSiteBackupsRequestBackupTypeEnum {
    AUTO = 'auto',
    INCREMENTAL = 'incremental'
}

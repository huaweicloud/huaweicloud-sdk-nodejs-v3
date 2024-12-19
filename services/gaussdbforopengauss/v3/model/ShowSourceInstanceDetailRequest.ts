

export class ShowSourceInstanceDetailRequest {
    private 'X-Language'?: ShowSourceInstanceDetailRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'restore_time'?: string;
    private 'backup_id'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowSourceInstanceDetailRequestXLanguageEnum | string): ShowSourceInstanceDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSourceInstanceDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSourceInstanceDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowSourceInstanceDetailRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRestoreTime(restoreTime: string): ShowSourceInstanceDetailRequest {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: string  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): string | undefined {
        return this['restore_time'];
    }
    public withBackupId(backupId: string): ShowSourceInstanceDetailRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ShowSourceInstanceDetailRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

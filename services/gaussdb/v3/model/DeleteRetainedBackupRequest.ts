

export class DeleteRetainedBackupRequest {
    private 'X-Language'?: DeleteRetainedBackupRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'backup_id'?: string;
    public constructor(instanceId?: string, backupId?: string) { 
        this['instance_id'] = instanceId;
        this['backup_id'] = backupId;
    }
    public withXLanguage(xLanguage: DeleteRetainedBackupRequestXLanguageEnum | string): DeleteRetainedBackupRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteRetainedBackupRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteRetainedBackupRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteRetainedBackupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBackupId(backupId: string): DeleteRetainedBackupRequest {
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
export enum DeleteRetainedBackupRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

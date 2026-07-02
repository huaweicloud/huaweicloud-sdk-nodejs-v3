

export class ShowBackupVaultLockRequest {
    private 'X-Language'?: ShowBackupVaultLockRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ShowBackupVaultLockRequestXLanguageEnum | string): ShowBackupVaultLockRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowBackupVaultLockRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowBackupVaultLockRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowBackupVaultLockRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBackupVaultLockRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

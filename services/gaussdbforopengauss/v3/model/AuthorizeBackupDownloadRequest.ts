

export class AuthorizeBackupDownloadRequest {
    private 'X-Language'?: AuthorizeBackupDownloadRequestXLanguageEnum | string;
    private 'backup_id'?: string;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withXLanguage(xLanguage: AuthorizeBackupDownloadRequestXLanguageEnum | string): AuthorizeBackupDownloadRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: AuthorizeBackupDownloadRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): AuthorizeBackupDownloadRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBackupId(backupId: string): AuthorizeBackupDownloadRequest {
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
export enum AuthorizeBackupDownloadRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

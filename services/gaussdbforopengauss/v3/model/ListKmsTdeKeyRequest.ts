

export class ListKmsTdeKeyRequest {
    private 'X-Language'?: ListKmsTdeKeyRequestXLanguageEnum | string;
    private 'kms_project_name'?: string;
    public constructor(kmsProjectName?: string) { 
        this['kms_project_name'] = kmsProjectName;
    }
    public withXLanguage(xLanguage: ListKmsTdeKeyRequestXLanguageEnum | string): ListKmsTdeKeyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListKmsTdeKeyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListKmsTdeKeyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withKmsProjectName(kmsProjectName: string): ListKmsTdeKeyRequest {
        this['kms_project_name'] = kmsProjectName;
        return this;
    }
    public set kmsProjectName(kmsProjectName: string  | undefined) {
        this['kms_project_name'] = kmsProjectName;
    }
    public get kmsProjectName(): string | undefined {
        return this['kms_project_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListKmsTdeKeyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

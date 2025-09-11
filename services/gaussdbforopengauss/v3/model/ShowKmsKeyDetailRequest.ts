

export class ShowKmsKeyDetailRequest {
    private 'X-Language'?: ShowKmsKeyDetailRequestXLanguageEnum | string;
    private 'kms_key_id'?: string;
    private 'kms_project_name'?: string;
    public constructor(kmsKeyId?: string, kmsProjectName?: string) { 
        this['kms_key_id'] = kmsKeyId;
        this['kms_project_name'] = kmsProjectName;
    }
    public withXLanguage(xLanguage: ShowKmsKeyDetailRequestXLanguageEnum | string): ShowKmsKeyDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowKmsKeyDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowKmsKeyDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withKmsKeyId(kmsKeyId: string): ShowKmsKeyDetailRequest {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
    public withKmsProjectName(kmsProjectName: string): ShowKmsKeyDetailRequest {
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
export enum ShowKmsKeyDetailRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}



export class ResetSupabaseApplicationApiKeyRequest {
    private 'X-Language'?: ResetSupabaseApplicationApiKeyRequestXLanguageEnum | string;
    private 'application_id'?: string;
    private 'key_id'?: string;
    public constructor(applicationId?: string, keyId?: string) { 
        this['application_id'] = applicationId;
        this['key_id'] = keyId;
    }
    public withXLanguage(xLanguage: ResetSupabaseApplicationApiKeyRequestXLanguageEnum | string): ResetSupabaseApplicationApiKeyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ResetSupabaseApplicationApiKeyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ResetSupabaseApplicationApiKeyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ResetSupabaseApplicationApiKeyRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withKeyId(keyId: string): ResetSupabaseApplicationApiKeyRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResetSupabaseApplicationApiKeyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}



export class RestartSupabaseApplicationRequest {
    private 'X-Language'?: RestartSupabaseApplicationRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: RestartSupabaseApplicationRequestXLanguageEnum | string): RestartSupabaseApplicationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: RestartSupabaseApplicationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): RestartSupabaseApplicationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): RestartSupabaseApplicationRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RestartSupabaseApplicationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

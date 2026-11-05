

export class StopSupabaseApplicationRequest {
    private 'X-Language'?: StopSupabaseApplicationRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: StopSupabaseApplicationRequestXLanguageEnum | string): StopSupabaseApplicationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StopSupabaseApplicationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StopSupabaseApplicationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): StopSupabaseApplicationRequest {
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
export enum StopSupabaseApplicationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}



export class StartSupabaseApplicationRequest {
    private 'X-Language'?: StartSupabaseApplicationRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: StartSupabaseApplicationRequestXLanguageEnum | string): StartSupabaseApplicationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartSupabaseApplicationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartSupabaseApplicationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): StartSupabaseApplicationRequest {
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
export enum StartSupabaseApplicationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

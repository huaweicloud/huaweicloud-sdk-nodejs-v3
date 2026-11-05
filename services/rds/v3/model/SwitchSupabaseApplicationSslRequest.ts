import { SwitchSupabaseApplicationSslRequestBody } from './SwitchSupabaseApplicationSslRequestBody';


export class SwitchSupabaseApplicationSslRequest {
    private 'X-Language'?: SwitchSupabaseApplicationSslRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public body?: SwitchSupabaseApplicationSslRequestBody;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: SwitchSupabaseApplicationSslRequestXLanguageEnum | string): SwitchSupabaseApplicationSslRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SwitchSupabaseApplicationSslRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SwitchSupabaseApplicationSslRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): SwitchSupabaseApplicationSslRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: SwitchSupabaseApplicationSslRequestBody): SwitchSupabaseApplicationSslRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchSupabaseApplicationSslRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

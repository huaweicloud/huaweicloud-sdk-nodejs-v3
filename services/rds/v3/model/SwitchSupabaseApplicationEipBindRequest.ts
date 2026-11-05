import { SwitchSupabaseApplicationEipBindRequestBody } from './SwitchSupabaseApplicationEipBindRequestBody';


export class SwitchSupabaseApplicationEipBindRequest {
    private 'X-Language'?: SwitchSupabaseApplicationEipBindRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public body?: SwitchSupabaseApplicationEipBindRequestBody;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: SwitchSupabaseApplicationEipBindRequestXLanguageEnum | string): SwitchSupabaseApplicationEipBindRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SwitchSupabaseApplicationEipBindRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SwitchSupabaseApplicationEipBindRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): SwitchSupabaseApplicationEipBindRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: SwitchSupabaseApplicationEipBindRequestBody): SwitchSupabaseApplicationEipBindRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchSupabaseApplicationEipBindRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

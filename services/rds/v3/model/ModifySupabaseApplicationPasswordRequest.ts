import { ModifySupabaseApplicationPasswordRequestBody } from './ModifySupabaseApplicationPasswordRequestBody';


export class ModifySupabaseApplicationPasswordRequest {
    private 'X-Language'?: ModifySupabaseApplicationPasswordRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public body?: ModifySupabaseApplicationPasswordRequestBody;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ModifySupabaseApplicationPasswordRequestXLanguageEnum | string): ModifySupabaseApplicationPasswordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifySupabaseApplicationPasswordRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifySupabaseApplicationPasswordRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ModifySupabaseApplicationPasswordRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: ModifySupabaseApplicationPasswordRequestBody): ModifySupabaseApplicationPasswordRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifySupabaseApplicationPasswordRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

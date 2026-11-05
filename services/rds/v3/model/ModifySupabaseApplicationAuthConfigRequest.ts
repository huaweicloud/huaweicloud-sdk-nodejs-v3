import { ModifySupabaseApplicationAuthConfigRequestBody } from './ModifySupabaseApplicationAuthConfigRequestBody';


export class ModifySupabaseApplicationAuthConfigRequest {
    private 'X-Language'?: ModifySupabaseApplicationAuthConfigRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public body?: ModifySupabaseApplicationAuthConfigRequestBody;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ModifySupabaseApplicationAuthConfigRequestXLanguageEnum | string): ModifySupabaseApplicationAuthConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifySupabaseApplicationAuthConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifySupabaseApplicationAuthConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ModifySupabaseApplicationAuthConfigRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: ModifySupabaseApplicationAuthConfigRequestBody): ModifySupabaseApplicationAuthConfigRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifySupabaseApplicationAuthConfigRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

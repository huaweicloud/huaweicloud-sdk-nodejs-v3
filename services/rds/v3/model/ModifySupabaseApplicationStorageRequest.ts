import { ModifySupabaseApplicationStorageRequestBody } from './ModifySupabaseApplicationStorageRequestBody';


export class ModifySupabaseApplicationStorageRequest {
    private 'X-Language'?: ModifySupabaseApplicationStorageRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public body?: ModifySupabaseApplicationStorageRequestBody;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ModifySupabaseApplicationStorageRequestXLanguageEnum | string): ModifySupabaseApplicationStorageRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifySupabaseApplicationStorageRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifySupabaseApplicationStorageRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ModifySupabaseApplicationStorageRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withBody(body: ModifySupabaseApplicationStorageRequestBody): ModifySupabaseApplicationStorageRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifySupabaseApplicationStorageRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

import { CreateSupabaseApplicationRequestBody } from './CreateSupabaseApplicationRequestBody';


export class CreateSupabaseApplicationRequest {
    private 'X-Language'?: CreateSupabaseApplicationRequestXLanguageEnum | string;
    private 'X-Client-Token'?: string;
    public body?: CreateSupabaseApplicationRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateSupabaseApplicationRequestXLanguageEnum | string): CreateSupabaseApplicationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSupabaseApplicationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSupabaseApplicationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withXClientToken(xClientToken: string): CreateSupabaseApplicationRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateSupabaseApplicationRequestBody): CreateSupabaseApplicationRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSupabaseApplicationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}

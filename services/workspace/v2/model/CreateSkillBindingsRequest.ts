import { CreateSkillBindingReq } from './CreateSkillBindingReq';


export class CreateSkillBindingsRequest {
    private 'X-Language'?: CreateSkillBindingsRequestXLanguageEnum | string;
    private 'X-Client-Token'?: string;
    public body?: CreateSkillBindingReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateSkillBindingsRequestXLanguageEnum | string): CreateSkillBindingsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSkillBindingsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSkillBindingsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withXClientToken(xClientToken: string): CreateSkillBindingsRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateSkillBindingReq): CreateSkillBindingsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSkillBindingsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

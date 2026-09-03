import { CreateSkillReq } from './CreateSkillReq';


export class CreateSkillRequest {
    private 'X-Language'?: CreateSkillRequestXLanguageEnum | string;
    private 'X-Client-Token'?: string;
    public body?: CreateSkillReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateSkillRequestXLanguageEnum | string): CreateSkillRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSkillRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSkillRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withXClientToken(xClientToken: string): CreateSkillRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateSkillReq): CreateSkillRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSkillRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

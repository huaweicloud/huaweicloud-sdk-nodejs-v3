import { DeleteSkillBindingReq } from './DeleteSkillBindingReq';


export class DeleteSkillBindingsRequest {
    private 'X-Language'?: DeleteSkillBindingsRequestXLanguageEnum | string;
    public body?: DeleteSkillBindingReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: DeleteSkillBindingsRequestXLanguageEnum | string): DeleteSkillBindingsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteSkillBindingsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteSkillBindingsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteSkillBindingReq): DeleteSkillBindingsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteSkillBindingsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

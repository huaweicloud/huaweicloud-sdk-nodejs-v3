import { CreateSkillPackageReq } from './CreateSkillPackageReq';


export class CreateSkillPackageRequest {
    private 'X-Language'?: CreateSkillPackageRequestXLanguageEnum | string;
    private 'X-Client-Token'?: string;
    private 'skill_id'?: string;
    public body?: CreateSkillPackageReq;
    public constructor(skillId?: string) { 
        this['skill_id'] = skillId;
    }
    public withXLanguage(xLanguage: CreateSkillPackageRequestXLanguageEnum | string): CreateSkillPackageRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateSkillPackageRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateSkillPackageRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withXClientToken(xClientToken: string): CreateSkillPackageRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withSkillId(skillId: string): CreateSkillPackageRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withBody(body: CreateSkillPackageReq): CreateSkillPackageRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSkillPackageRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

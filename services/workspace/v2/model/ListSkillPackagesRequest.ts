

export class ListSkillPackagesRequest {
    private 'X-Language'?: ListSkillPackagesRequestXLanguageEnum | string;
    private 'skill_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(skillId?: string) { 
        this['skill_id'] = skillId;
    }
    public withXLanguage(xLanguage: ListSkillPackagesRequestXLanguageEnum | string): ListSkillPackagesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSkillPackagesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSkillPackagesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSkillId(skillId: string): ListSkillPackagesRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withOffset(offset: number): ListSkillPackagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSkillPackagesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSkillPackagesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

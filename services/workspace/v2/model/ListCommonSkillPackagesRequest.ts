

export class ListCommonSkillPackagesRequest {
    private 'X-Language'?: ListCommonSkillPackagesRequestXLanguageEnum | string;
    private 'skill_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(skillId?: string) { 
        this['skill_id'] = skillId;
    }
    public withXLanguage(xLanguage: ListCommonSkillPackagesRequestXLanguageEnum | string): ListCommonSkillPackagesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListCommonSkillPackagesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListCommonSkillPackagesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSkillId(skillId: string): ListCommonSkillPackagesRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withOffset(offset: number): ListCommonSkillPackagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCommonSkillPackagesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCommonSkillPackagesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

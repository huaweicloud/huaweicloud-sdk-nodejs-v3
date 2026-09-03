

export class ShowCommonSkillRequest {
    private 'X-Language'?: ShowCommonSkillRequestXLanguageEnum | string;
    private 'skill_id'?: string;
    public constructor(skillId?: string) { 
        this['skill_id'] = skillId;
    }
    public withXLanguage(xLanguage: ShowCommonSkillRequestXLanguageEnum | string): ShowCommonSkillRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowCommonSkillRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowCommonSkillRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSkillId(skillId: string): ShowCommonSkillRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowCommonSkillRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

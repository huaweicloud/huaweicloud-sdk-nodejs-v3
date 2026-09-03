

export class ListCommonSkillsRequest {
    private 'X-Language'?: ListCommonSkillsRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public category?: string;
    public status?: string;
    private 'skill_name'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListCommonSkillsRequestXLanguageEnum | string): ListCommonSkillsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListCommonSkillsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListCommonSkillsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListCommonSkillsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCommonSkillsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCategory(category: string): ListCommonSkillsRequest {
        this['category'] = category;
        return this;
    }
    public withStatus(status: string): ListCommonSkillsRequest {
        this['status'] = status;
        return this;
    }
    public withSkillName(skillName: string): ListCommonSkillsRequest {
        this['skill_name'] = skillName;
        return this;
    }
    public set skillName(skillName: string  | undefined) {
        this['skill_name'] = skillName;
    }
    public get skillName(): string | undefined {
        return this['skill_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCommonSkillsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

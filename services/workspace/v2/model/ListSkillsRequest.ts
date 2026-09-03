

export class ListSkillsRequest {
    private 'X-Language'?: ListSkillsRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public category?: string;
    public status?: string;
    private 'skill_name'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListSkillsRequestXLanguageEnum | string): ListSkillsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSkillsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSkillsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListSkillsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSkillsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCategory(category: string): ListSkillsRequest {
        this['category'] = category;
        return this;
    }
    public withStatus(status: string): ListSkillsRequest {
        this['status'] = status;
        return this;
    }
    public withSkillName(skillName: string): ListSkillsRequest {
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
export enum ListSkillsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

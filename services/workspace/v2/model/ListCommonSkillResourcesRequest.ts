

export class ListCommonSkillResourcesRequest {
    private 'X-Language'?: ListCommonSkillResourcesRequestXLanguageEnum | string;
    private 'skill_id'?: string;
    public version?: string;
    public offset?: number;
    public limit?: number;
    public constructor(skillId?: string) { 
        this['skill_id'] = skillId;
    }
    public withXLanguage(xLanguage: ListCommonSkillResourcesRequestXLanguageEnum | string): ListCommonSkillResourcesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListCommonSkillResourcesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListCommonSkillResourcesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSkillId(skillId: string): ListCommonSkillResourcesRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withVersion(version: string): ListCommonSkillResourcesRequest {
        this['version'] = version;
        return this;
    }
    public withOffset(offset: number): ListCommonSkillResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCommonSkillResourcesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCommonSkillResourcesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}

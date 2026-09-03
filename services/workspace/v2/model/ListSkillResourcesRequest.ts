

export class ListSkillResourcesRequest {
    private 'X-Language'?: ListSkillResourcesRequestXLanguageEnum | string;
    private 'skill_id'?: string;
    public version?: string;
    public offset?: number;
    public limit?: number;
    public constructor(skillId?: string) { 
        this['skill_id'] = skillId;
    }
    public withXLanguage(xLanguage: ListSkillResourcesRequestXLanguageEnum | string): ListSkillResourcesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSkillResourcesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSkillResourcesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSkillId(skillId: string): ListSkillResourcesRequest {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withVersion(version: string): ListSkillResourcesRequest {
        this['version'] = version;
        return this;
    }
    public withOffset(offset: number): ListSkillResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSkillResourcesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSkillResourcesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
